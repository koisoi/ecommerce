"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: {
    landing: string;
    landing_id: number;
    start_url: string;
    referrer: string;
    ip: string;
} = {
    landing: "iray",
    landing_id: 49,
    start_url: "",
    referrer: "",
    ip: ""
};

export const getIp = createAsyncThunk(
    "global/getIp",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://api.ipify.org/?format=json`);
            return response.json();
        } catch (error: any) {
            rejectWithValue(error.response.data);
        }
    }
);

const slice = createSlice({
    name: "globalSlice",
    initialState,
    reducers: {
        setStartUrl(state, action: PayloadAction<string>) {
            state.start_url = action.payload;
        },
        setReferrer(state, action: PayloadAction<string>) {
            state.referrer = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getIp.fulfilled, (state, action) => {
            state.ip = action.payload.ip;
        });
    }
});

export const GlobalReducer = slice.reducer;
export const { setReferrer, setStartUrl } = slice.actions;
export const GlobalState = (state: RootState) => state.GlobalReducer;
