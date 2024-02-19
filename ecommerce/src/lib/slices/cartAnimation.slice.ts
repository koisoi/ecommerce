import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: {
    desktopCartButtonRect?: DOMRect;
    mobileCartButtonRect?: DOMRect;
    desktopSlidingCartButtonRect?: DOMRect;
} = {};

const slice = createSlice({
    name: "CartAnimationSlice",
    initialState,
    reducers: {
        setDesktopCartButtonRect(
            state,
            action: PayloadAction<DOMRect | undefined>
        ) {
            state.desktopCartButtonRect = action.payload;
        },
        setMobileCartButtonRect(
            state,
            action: PayloadAction<DOMRect | undefined>
        ) {
            state.mobileCartButtonRect = action.payload;
        },
        setDesktopSlidingCartButtonRect(
            state,
            action: PayloadAction<DOMRect | undefined>
        ) {
            state.desktopSlidingCartButtonRect = action.payload;
        }
    }
});

export const CartAnimationReducer = slice.reducer;
export const {
    setDesktopCartButtonRect,
    setDesktopSlidingCartButtonRect,
    setMobileCartButtonRect
} = slice.actions;
export const CartAnimationState = (state: RootState) =>
    state.CartAnimationReducer;
