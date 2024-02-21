"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { orderAPI } from "../services/order.service";
import { AppealForm, RootState, StatisticsForm } from "..";

const initialState: {
    loading: boolean;
    canAuthorizeAppeal: boolean;
    canPostAppeal: boolean;
    canPostAppealStatistics: boolean;
    postedAppealId: string | null;
    appealSendingCompleted: boolean;
    backCallOpen: boolean;
} = {
    loading: false,
    canAuthorizeAppeal: true,
    canPostAppeal: false,
    canPostAppealStatistics: false,
    postedAppealId: null,
    appealSendingCompleted: false,
    backCallOpen: false
};

/**
 * Авторизация перед отправкой заказа на сервер
 */
export const authorizeAppeal = createAsyncThunk(
    "appeal/authorize",
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
            return (getState() as RootState).BackCallReducer.canAuthorizeAppeal;
        }
    }
);

export const postAppeal = createAsyncThunk(
    "appeal/post",
    async (arg: AppealForm, { rejectWithValue }) => {
        try {
            const response = await orderAPI.postAppeal(arg);
            return response;
        } catch (error: any) {
            rejectWithValue(error);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).BackCallReducer.canPostAppeal;
        }
    }
);

export const postAppealStatistics = createAsyncThunk(
    "appeal/postStatistics",
    async (arg: StatisticsForm, { rejectWithValue }) => {
        try {
            const response = await orderAPI.postStatistics(
                arg,
                "callback",
                true
            );
            return response;
        } catch (error: any) {
            rejectWithValue(error);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).BackCallReducer
                .canPostAppealStatistics;
        }
    }
);

const slice = createSlice({
    name: "BackCallSlice",
    initialState,
    reducers: {
        setCanAuthorizeAppeal(state, action: PayloadAction<boolean>) {
            state.canAuthorizeAppeal = action.payload;
        },
        setCanPostAppeal(state, action: PayloadAction<boolean>) {
            state.canPostAppeal = action.payload;
        },
        setCanPostAppealStatistics(state, action: PayloadAction<boolean>) {
            state.canPostAppealStatistics = action.payload;
        },
        setOrderLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        resetAppeal() {
            return initialState;
        },
        openBackCallModal(state) {
            state.backCallOpen = true;
        },
        closeBackCallModal(state) {
            state.backCallOpen = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authorizeAppeal.pending, (state) => {
            state.loading = true;
            state.canAuthorizeAppeal = false;
            state.canPostAppeal = false;
            state.canPostAppealStatistics = false;
        });
        builder.addCase(authorizeAppeal.fulfilled, (state) => {
            state.canPostAppeal = true;
        });
        builder.addCase(authorizeAppeal.rejected, (state) => {
            state.canAuthorizeAppeal = true;
            state.loading = false;
        });

        builder.addCase(postAppeal.pending, (state) => {
            state.loading = true;
            state.canAuthorizeAppeal = false;
            state.canPostAppeal = false;
            state.canPostAppealStatistics = false;
        });
        builder.addCase(postAppeal.fulfilled, (state, action) => {
            state.canPostAppealStatistics = true;
            state.postedAppealId = action.payload?.appeal.id || "";
            // state.items = [];
        });
        builder.addCase(postAppeal.rejected, (state) => {
            state.canAuthorizeAppeal = true;
            state.canPostAppeal = true;
            state.loading = false;
        });

        builder.addCase(postAppealStatistics.pending, (state) => {
            state.loading = true;
            state.canAuthorizeAppeal = false;
            state.canPostAppeal = false;
            state.canPostAppealStatistics = false;
        });
        builder.addCase(postAppealStatistics.fulfilled, (state) => {
            state.canAuthorizeAppeal = true;
            state.canPostAppeal = true;
            state.canPostAppealStatistics = true;
            state.appealSendingCompleted = true;

            state.loading = false;
        });
        builder.addCase(postAppealStatistics.rejected, (state) => {
            state.canAuthorizeAppeal = true;
            state.canPostAppeal = true;
            state.canPostAppealStatistics = true;
            state.loading = false;
        });
    }
});

export const BackCallReducer = slice.reducer;
export const {
    setCanAuthorizeAppeal,
    setCanPostAppeal,
    setCanPostAppealStatistics,
    setOrderLoading,
    resetAppeal,
    closeBackCallModal,
    openBackCallModal
} = slice.actions;
export const BackCallState = (state: RootState) => state.BackCallReducer;
