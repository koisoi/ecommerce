import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryItem, CategoryItemsResponse } from "../types";
import { RootState } from "../store";

const initialState: CategoryItemsResponse & { loading: boolean } = {
    totalItemCount: 0,
    list: [],
    loading: true
};

const slice = createSlice({
    name: "ProductsCategoryGridSlice",
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setTotalAmount(state, action: PayloadAction<number>) {
            state.totalItemCount = action.payload;
        },
        setProducts(state, action: PayloadAction<CategoryItem[]>) {
            state.list = action.payload;
        }
    }
});

export const ProductsCategoryGridReducer = slice.reducer;
export const { setLoading, setTotalAmount, setProducts } = slice.actions;
export const ProductsCategoryGridState = (state: RootState) =>
    state.ProductsCategoryGridReducer;
