"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: {
    mobileMenuOpen: boolean;
} = {
    mobileMenuOpen: false
};

const slice = createSlice({
    name: "MobileMenuSlice",
    initialState,
    reducers: {
        setMobileMenuOpen(state, action: PayloadAction<boolean>) {
            state.mobileMenuOpen = action.payload;
        }
    }
});

export const MobileMenuReducer = slice.reducer;
export const { setMobileMenuOpen } = slice.actions;
export const MobileMenuState = (state: RootState) => state.MobileMenuReducer;
