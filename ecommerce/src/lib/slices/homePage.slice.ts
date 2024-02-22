"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryItem, ProductReview, RootState } from "..";
import { homePageAPI } from "../services/homePage.service";

const initialState: {
    popularProducts: CategoryItem[];
    popularProductsLoading: boolean;
    reviews: ProductReview[];
    reviewsLoading: boolean;
} = {
    popularProducts: [],
    popularProductsLoading: false,
    reviews: [],
    reviewsLoading: false
};

export const fetchPopularProducts = createAsyncThunk(
    "home/fetchPopularProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await homePageAPI.getPopularProducts();
            return response;
        } catch (error: any) {
            rejectWithValue(error);
        }
    },
    {
        condition: (_, { getState }) => {
            return !(getState() as RootState).HomePageReducer
                .popularProductsLoading;
        }
    }
);

export const fetchLastReviews = createAsyncThunk(
    "home/fetchLastReviews",
    async (_, { rejectWithValue }) => {
        try {
            const response = await homePageAPI.getLastReviews();
            return response;
        } catch (error: any) {
            rejectWithValue(error);
        }
    },
    {
        condition: (_, { getState }) => {
            return !(getState() as RootState).HomePageReducer.reviewsLoading;
        }
    }
);

const slice = createSlice({
    name: "HomePageSlice",
    initialState,
    reducers: {
        setPopularProductsLoading(state, action: PayloadAction<boolean>) {
            state.popularProductsLoading = action.payload;
        },
        setReviewsLoading(state, action: PayloadAction<boolean>) {
            state.reviewsLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPopularProducts.pending, (state) => {
            state.popularProductsLoading = true;
        });
        builder.addCase(fetchPopularProducts.rejected, (state) => {
            state.popularProductsLoading = false;
        });
        builder.addCase(fetchPopularProducts.fulfilled, (state, action) => {
            state.popularProducts = action.payload || [];
            state.popularProductsLoading = false;
        });

        builder.addCase(fetchLastReviews.pending, (state) => {
            state.reviewsLoading = true;
        });
        builder.addCase(fetchLastReviews.rejected, (state) => {
            state.reviewsLoading = false;
        });
        builder.addCase(fetchLastReviews.fulfilled, (state, action) => {
            state.reviews = action.payload || [];
            state.reviewsLoading = false;
        });
    }
});

export const HomePageReducer = slice.reducer;
export const { setPopularProductsLoading, setReviewsLoading } = slice.actions;
export const HomePageState = (state: RootState) => state.HomePageReducer;
