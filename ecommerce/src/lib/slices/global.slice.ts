"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState, UTMParams } from "..";

const initialState: {
    start_url: string;
    referrer: string;
    ip: string;
    utm: UTMParams;
    logoSrc: string;
    logoMobileSrc: string;
} = {
    start_url: "",
    referrer: "",
    ip: "",
    utm: {},
    logoSrc: "",
    logoMobileSrc: ""
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
        },
        setUTM(state, action: PayloadAction<UTMParams>) {
            state.utm = action.payload;
        },
        setLogoSrc(state, action: PayloadAction<string>) {
            state.logoSrc = action.payload;
        },
        setMobileLogoSrc(state, action: PayloadAction<string>) {
            state.logoMobileSrc = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getIp.fulfilled, (state, action) => {
            state.ip = action.payload.ip;
        });
    }
});

export const GlobalReducer = slice.reducer;
export const {
    setReferrer,
    setStartUrl,
    setUTM,
    setLogoSrc,
    setMobileLogoSrc
} = slice.actions;
export const GlobalState = (state: RootState) => state.GlobalReducer;
