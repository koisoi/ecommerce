"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types/cart";
import { RootState } from "..";

const initialState: {
    items: CartItem[];
} = {
    items: []
};

const slice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<CartItem>) {
            const cartItem = state.items.find(
                (val) => val.alias === action.payload.alias
            );
            if (!!cartItem) cartItem.amount++;
            else state.items.push(action.payload);
        },
        removeOneItemFromCart(state, action: PayloadAction<CartItem>) {
            const cartItemIndex = state.items.findIndex(
                (val) => val.alias === action.payload.alias
            );

            if (cartItemIndex === -1) return;
            else if (state.items[cartItemIndex].amount > 1) {
                state.items[cartItemIndex].amount--;
            } else {
                state.items.splice(cartItemIndex, 1);
            }
        },
        deleteItemFromCart(state, action: PayloadAction<CartItem>) {
            const cartItemIndex = state.items.findIndex(
                (val) => val.alias === action.payload.alias
            );

            if (cartItemIndex === -1) return;
            else {
                state.items.splice(cartItemIndex, 1);
            }
        },
        clearCart(state) {
            state.items = [];
        }
    }
});

export const CartReducer = slice.reducer;
export const {
    addItemToCart,
    removeOneItemFromCart,
    deleteItemFromCart,
    clearCart
} = slice.actions;
export const CartState = (state: RootState) => state.CategoryPageReducer;
