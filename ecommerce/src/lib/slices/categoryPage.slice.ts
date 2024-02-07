import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryInfo, SeriesInfo } from "../types";
import { RootState } from "../store";
import { categoryAPI } from "../services/catalog.service";

const initialState: CategoryInfo & {
    loading: boolean;
    canFetch: boolean;
} = {
    title: "",
    series: [],
    loading: true,
    canFetch: true
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
            return (getState() as RootState).CategoryPageReducer.canFetch;
        }
    }
);

const slice = createSlice({
    name: "CategoryPageSlice",
    initialState,
    reducers: {
        setCanFetch(state, action: PayloadAction<boolean>) {
            state.canFetch = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.loading = true;
            state.canFetch = false;
        });
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.title = action.payload?.title || "";
            state.page_description = action.payload?.page_description || "";
            state.series = action.payload?.series || [];

            state.loading = false;
            state.canFetch = true;
        });
        builder.addCase(fetchCategory.rejected, (state) => {
            state.loading = false;
            state.canFetch = true;
        });
    }
});

export const CategoryPageReducer = slice.reducer;
export const { setCanFetch } = slice.actions;
export const CategoryPageState = (state: RootState) =>
    state.CategoryPageReducer;
