"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: {
    openedImgLink: string | null;
} = {
    openedImgLink: null
};

const slice = createSlice({
    name: "ProductPageSlice",
    initialState,
    reducers: {
        setOpenedImgLink(state, action: PayloadAction<string | null>) {
            state.openedImgLink = action.payload;
        }
    }
});

export const ProductPageReducer = slice.reducer;
export const { setOpenedImgLink } = slice.actions;
export const ProductPageState = (state: RootState) => state.ProductPageReducer;
