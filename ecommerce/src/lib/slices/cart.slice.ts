"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../types/cart";
import { OrderData, OrderForm, RootState, StatisticsForm } from "..";
import { orderAPI } from "../services/order.service";
import { changeCart, deleteCart, getCart } from "../functions/cartCookie";

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
    loading: false,
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
    async (
        { arg, fastOrder }: { arg: StatisticsForm; fastOrder?: boolean },
        { rejectWithValue }
    ) => {
        try {
            const response = await orderAPI.postStatistics(
                arg,
                fastOrder ? "fast" : "main"
            );
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

const calculateCartTotal = (items: CartItem[]) => {
    return items
        .reduce<number>((prev, _, i, arr) => {
            return prev + Number(arr[i].price) * arr[i].amount;
        }, 0)
        .toString();
};

const slice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<CartItem[]>) {
            const cart = JSON.parse(getCart() || "[]");
            const items: CartItem[] = [...cart, ...action.payload];
            //@ts-ignore
            state.items = items;
            state.cartTotal = calculateCartTotal(state.items);
            changeCart(items);
        },
        addItemToCart(state, action: PayloadAction<CartItem>) {
            const cart = JSON.parse(getCart() || "[]");
            const items: CartItem[] = [...cart];
            const cartItem = items.find(
                (val) => val.alias === action.payload.alias
            );
            if (!!cartItem) cartItem.amount++;
            else {
                items.push(action.payload);
            }
            //@ts-ignore
            state.items = items;
            state.cartTotal = calculateCartTotal(state.items);
            changeCart(items);
        },
        setCartItemAmount(
            state,
            action: PayloadAction<{ item: CartItem; amount: number }>
        ) {
            const cart = JSON.parse(getCart() || "[]");
            const items: CartItem[] = [...cart];
            const cartItem = items.find(
                (val) => val.alias === action.payload.item.alias
            );
            if (!cartItem) return;
            else cartItem.amount = action.payload.amount;
            //@ts-ignore
            state.items = items;
            state.cartTotal = calculateCartTotal(state.items);
            changeCart(items);
        },
        deleteItemFromCart(state, action: PayloadAction<CartItem>) {
            const cart = JSON.parse(getCart() || "[]");
            const items: CartItem[] = [...cart];
            const cartItemIndex = items.findIndex(
                (val) => val.alias === action.payload.alias
            );

            if (cartItemIndex === -1) return;
            else {
                items.splice(cartItemIndex, 1);
                //@ts-ignore
                state.items = items;
                state.cartTotal = calculateCartTotal(state.items);
                changeCart(items);
            }
        },
        clearCart(state) {
            state.items = [];
            state.cartTotal = "0";
            deleteCart();
        },
        clearOrder() {
            return initialState;
        },
        setCanAuthorize(state, action: PayloadAction<boolean>) {
            state.canAuthorize = action.payload;
        },
        setCanPostOrder(state, action: PayloadAction<boolean>) {
            state.canPostOrder = action.payload;
        },
        setCanPostStatistics(state, action: PayloadAction<boolean>) {
            state.canPostStatistics = action.payload;
        },
        setCompletedOrderInfo(state, action: PayloadAction<OrderForm>) {
            state.completedOrderForm = action.payload;
        },

        setCartOrderLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
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
    setCanPostStatistics,
    setCompletedOrderInfo,
    clearOrder,
    setCartOrderLoading
} = slice.actions;
export const CartState = (state: RootState) => state.CartReducer;
