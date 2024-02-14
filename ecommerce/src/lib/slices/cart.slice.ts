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
        setCart(state, action: PayloadAction<CartItem[]>) {
            //@ts-ignore
            state.items = action.payload;
        },
        addItemToCart(state, action: PayloadAction<CartItem>) {
            const cartItem = state.items.find(
                (val) => val.alias === action.payload.alias
            );
            if (!!cartItem) cartItem.amount++;
            //@ts-ignore
            else state.items.push(action.payload);
        },
        setCartItemAmount(
            state,
            action: PayloadAction<{ item: CartItem; amount: number }>
        ) {
            const cartItem = state.items.find(
                (val) => val.alias === action.payload.item.alias
            );
            if (!cartItem) return;
            else cartItem.amount = action.payload.amount;
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
    deleteItemFromCart,
    clearCart,
    setCartItemAmount,
    setCart
} = slice.actions;
export const CartState = (state: RootState) => state.CartReducer;
