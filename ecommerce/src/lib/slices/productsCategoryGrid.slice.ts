import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    CategoryItem,
    CategoryItemsRequest,
    CategoryItemsResponse
} from "../types";
import { RootState } from "../store";
import { categoryAPI } from "../services/catalog.service";
import { fetchCategory } from "./categoryPage.slice";

const initialState: CategoryItemsResponse & {
    loading: boolean;
    canFetch: boolean;
} = {
    totalItemCount: 0,
    list: [],
    loading: true,
    canFetch: true
};

/**
 * Получение товаров в категории
 * @param arg объект параметров
 * @param category alias категории
 * @param series необязательный, alias серии
 * @param productsPerPage карточек на страницу
 * @param page страница
 */
export const fetchCategoryItems = createAsyncThunk(
    "category/fetchItems",
    async (arg: CategoryItemsRequest, { rejectWithValue }) => {
        try {
            const responce = await categoryAPI.getCategoryItems(arg);
            return responce;
        } catch (error: any) {
            rejectWithValue(error.response.data);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).ProductsCategoryGridReducer
                .canFetch;
        }
    }
);

const slice = createSlice({
    name: "ProductsCategoryGridSlice",
    initialState,
    reducers: {
        setCanFetch(state, action: PayloadAction<boolean>) {
            state.canFetch = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategoryItems.pending, (state) => {
            state.loading = true;
            state.canFetch = false;
        });
        builder.addCase(fetchCategoryItems.fulfilled, (state, action) => {
            state.totalItemCount = action.payload?.totalItemCount || 0;
            state.list = action.payload?.list || [];

            state.loading = false;
            state.canFetch = true;
        });
        builder.addCase(fetchCategory.rejected, (state) => {
            state.loading = false;
            state.canFetch = true;
        });
    }
});

export const ProductsCategoryGridReducer = slice.reducer;
export const { setCanFetch } = slice.actions;
export const ProductsCategoryGridState = (state: RootState) =>
    state.ProductsCategoryGridReducer;
