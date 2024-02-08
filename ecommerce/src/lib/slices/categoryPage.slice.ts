import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { categoryAPI } from "../services/catalog.service";
import { CategoryInfo } from "../types/category";

const initialState: CategoryInfo & {
    loading: boolean;
    canFetchCategory: boolean;
} = {
    title: "",
    series: [],
    loading: true,
    canFetchCategory: true
};

/**
 * Получение информации о категории
 * @param arg alias категории
 */
export const fetchCategory = createAsyncThunk(
    "category/fetchCategory",
    async (category: string, { rejectWithValue }) => {
        try {
            const responce = await categoryAPI.getCategory(category);
            return responce;
        } catch (error: any) {
            rejectWithValue(error.response.data);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).CategoryPageReducer
                .canFetchCategory;
        }
    }
);

const slice = createSlice({
    name: "CategoryPageSlice",
    initialState,
    reducers: {
        setCanFetchCategory(state, action: PayloadAction<boolean>) {
            state.canFetchCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.loading = true;
            state.canFetchCategory = false;
        });
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.title = action.payload?.title || "";
            state.page_description = action.payload?.page_description || "";
            state.series = action.payload?.series || [];

            state.loading = false;
            state.canFetchCategory = true;
        });
        builder.addCase(fetchCategory.rejected, (state) => {
            state.loading = false;
            state.canFetchCategory = true;
        });
    }
});

export const CategoryPageReducer = slice.reducer;
export const { setCanFetchCategory } = slice.actions;
export const CategoryPageState = (state: RootState) =>
    state.CategoryPageReducer;
