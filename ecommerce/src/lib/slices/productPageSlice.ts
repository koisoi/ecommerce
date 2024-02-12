"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productAPI } from "../services/product.service";
import { FullProductInfo, ProductRequest, RootState } from "..";

const initialState: FullProductInfo & {
    loading: boolean;
    canFetchProduct: boolean;
} = {
    id: 0,
    articul: "",
    images: [],
    title: "",
    price: "",
    alias: "",
    is_new: false,
    is_recommend: false,
    complectation: "",
    category: {
        path: ""
    },
    shortCharacteristics: {},
    fullCharacteristics: {},
    reviews: [],
    siblings: [],
    text: "",

    loading: true,
    canFetchProduct: true
};

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async ({ alias, category }: ProductRequest, { rejectWithValue }) => {
        try {
            const response = Promise.all([
                productAPI.getProductMainInfo({ alias, category }),
                productAPI.getProductShortCharacteristics({ alias }),
                productAPI.getProductFullCharacteristics({ alias }),
                productAPI.getProductReviews({ alias }),
                productAPI.getProductSiblings({ alias })
            ]);
            return response;
        } catch (error: any) {
            rejectWithValue(error.response.data);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).ProductPageReducer.canFetchProduct;
        }
    }
);

const slice = createSlice({
    name: "ProductPageSlice",
    initialState,
    reducers: {
        setCanFetchProduct(state, action: PayloadAction<boolean>) {
            state.canFetchProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
            state.canFetchProduct = false;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            if (!action.payload) return; // throw new Error?
            const [
                mainInfo,
                shortCharacteristics,
                fullCharacteristics,
                reviews,
                siblings
            ] = action.payload;

            return {
                ...state,
                ...mainInfo,
                shortCharacteristics,
                fullCharacteristics,
                reviews,
                siblings,

                loading: false,
                canFetchProduct: true
            };
        });
        builder.addCase(fetchProduct.rejected, (state) => {
            state.loading = false;
            state.canFetchProduct = true;
        });
    }
});

export const ProductPageReducer = slice.reducer;
export const { setCanFetchProduct } = slice.actions;
export const ProductPageState = (state: RootState) => state.ProductPageReducer;
