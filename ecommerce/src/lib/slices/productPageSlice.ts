"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productAPI } from "../services/product.service";
import { FullProductInfo, ProductRequest, RootState } from "..";

const initialState: FullProductInfo & {
    loading: boolean;
    canFetchProduct: boolean;
    openedImgLink: string | null;
    wrongProductQuery: boolean;
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
        path: "",
        title: ""
    },
    series: {
        alias: "",
        title: ""
    },
    shortCharacteristics: {},
    fullCharacteristics: {},
    reviews: [],
    siblings: [],
    text: "",
    openedImgLink: null,

    loading: true,
    canFetchProduct: true,
    wrongProductQuery: false
};

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async ({ alias, category }: ProductRequest, { rejectWithValue }) => {
        const response = Promise.all([
            productAPI.getProductMainInfo({ alias, category }),
            productAPI.getProductShortCharacteristics({ alias }),
            productAPI.getProductFullCharacteristics({ alias }),
            productAPI.getProductReviews({ alias }),
            productAPI.getProductSiblings({ alias })
        ]).catch((error) => rejectWithValue(error));
        return response;
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
        },
        setOpenedImgLink(state, action: PayloadAction<string | null>) {
            state.openedImgLink = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
            state.canFetchProduct = false;
            state.wrongProductQuery = false;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            if (!action.payload) {
                return state;
            } // throw new Error?

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
        builder.addCase(fetchProduct.rejected, (state, action) => {
            if ((action.payload as { status: number })?.status === 404)
                state.wrongProductQuery = true;
            state.loading = false;
            state.canFetchProduct = true;
        });
    }
});

export const ProductPageReducer = slice.reducer;
export const { setCanFetchProduct, setOpenedImgLink } = slice.actions;
export const ProductPageState = (state: RootState) => state.ProductPageReducer;
