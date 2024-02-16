"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types/cart";
import { OrderData, OrderForm, RootState, StatisticsForm } from "..";
import { orderAPI } from "../services/order.service";

const initialState: {
    items: CartItem[];
    loading: boolean;
    canAuthorize: boolean;
    canPostOrder: boolean;
    canPostStatistics: boolean;
    postedOrderId: string | null;
    cartTotal: string;
    completedOrderForm: OrderForm;
} = {
    items: [],
    loading: true,
    canAuthorize: true,
    canPostOrder: false,
    canPostStatistics: false,
    postedOrderId: null,
    cartTotal: "0",
    completedOrderForm: {
        fullName: "",
        email: "",
        phoneNumber: "",
        commentary: ""
    }
};

/**
 * Авторизация перед отправкой заказа на сервер
 */
export const authorize = createAsyncThunk(
    "order/authorize",
    async (_, { rejectWithValue }) => {
        try {
            const response = await orderAPI.authorization();
            return response;
        } catch (error: any) {
            rejectWithValue(error);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).CartReducer.canAuthorize;
        }
    }
);

export const postOrder = createAsyncThunk(
    "order/post",
    async (arg: OrderData, { rejectWithValue }) => {
        try {
            const response = await orderAPI.postOrder(arg);
            return response;
        } catch (error: any) {
            rejectWithValue(error);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).CartReducer.canPostOrder;
        }
    }
);

export const postStatistics = createAsyncThunk(
    "order/postStatistics",
    async (arg: StatisticsForm, { rejectWithValue }) => {
        try {
            const response = await orderAPI.postStatistics(arg);
            return response;
        } catch (error: any) {
            rejectWithValue(error);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).CartReducer.canPostStatistics;
        }
    }
);

const slice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<CartItem[]>) {
            //@ts-ignore
            state.items = action.payload;
            state.cartTotal = state.items
                .reduce<number>((prev, _, i, arr) => {
                    return prev + Number(arr[i].price) * arr[i].amount;
                }, 0)
                .toString();
        },
        addItemToCart(state, action: PayloadAction<CartItem>) {
            const cartItem = state.items.find(
                (val) => val.alias === action.payload.alias
            );
            if (!!cartItem) cartItem.amount++;
            //@ts-ignore
            else state.items.push(action.payload);
            state.cartTotal = state.items
                .reduce<number>((prev, _, i, arr) => {
                    return prev + Number(arr[i].price) * arr[i].amount;
                }, 0)
                .toString();
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
            state.cartTotal = state.items
                .reduce<number>((prev, _, i, arr) => {
                    return prev + Number(arr[i].price) * arr[i].amount;
                }, 0)
                .toString();
        },
        deleteItemFromCart(state, action: PayloadAction<CartItem>) {
            const cartItemIndex = state.items.findIndex(
                (val) => val.alias === action.payload.alias
            );

            if (cartItemIndex === -1) return;
            else {
                state.items.splice(cartItemIndex, 1);
                state.cartTotal = state.items
                    .reduce<number>((prev, _, i, arr) => {
                        return prev + Number(arr[i].price) * arr[i].amount;
                    }, 0)
                    .toString();
            }
        },
        clearCart(state) {
            state.items = [];
            state.cartTotal = "0";
        },
        setCanAuthorize(state, action: PayloadAction<boolean>) {
            state.canAuthorize = action.payload;
        },
        setCanPostOrder(state, action: PayloadAction<boolean>) {
            state.canPostOrder = action.payload;
        },
        setCanPostStatistics(state, action: PayloadAction<boolean>) {
            state.canPostStatistics = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authorize.pending, (state) => {
            state.loading = true;
            state.canAuthorize = false;
            state.canPostOrder = false;
            state.canPostStatistics = false;
        });
        builder.addCase(authorize.fulfilled, (state) => {
            state.canPostOrder = true;
        });
        builder.addCase(authorize.rejected, (state) => {
            state.canAuthorize = true;
            state.loading = false;
        });

        builder.addCase(postOrder.pending, (state) => {
            state.loading = true;
            state.canAuthorize = false;
            state.canPostOrder = false;
            state.canPostStatistics = false;
        });
        builder.addCase(postOrder.fulfilled, (state, action) => {
            state.canPostStatistics = true;
            state.postedOrderId = action.payload?.appeal.id || "";
            // state.items = [];
        });
        builder.addCase(postOrder.rejected, (state) => {
            state.canAuthorize = true;
            state.canPostOrder = true;
            state.loading = false;
        });

        builder.addCase(postStatistics.pending, (state) => {
            state.loading = true;
            state.canAuthorize = false;
            state.canPostOrder = false;
            state.canPostStatistics = false;
        });
        builder.addCase(postStatistics.fulfilled, (state) => {
            state.canAuthorize = true;
            state.canPostOrder = true;
            state.canPostStatistics = true;

            state.loading = false;
        });
        builder.addCase(postStatistics.rejected, (state) => {
            state.canAuthorize = true;
            state.canPostOrder = true;
            state.canPostStatistics = true;
            state.loading = false;
        });
    }
});

export const CartReducer = slice.reducer;
export const {
    addItemToCart,
    deleteItemFromCart,
    clearCart,
    setCartItemAmount,
    setCart,
    setCanAuthorize,
    setCanPostOrder,
    setCanPostStatistics
} = slice.actions;
export const CartState = (state: RootState) => state.CartReducer;
