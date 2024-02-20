"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState, UTMParams } from "..";
import { setCookie } from "cookies-next";

const initialState: {
    landing: string;
    landing_id: number;
    start_url: string;
    referrer: string;
    ip: string;
    utm: UTMParams;
    geo: "rf" | "nn" | "msk" | "spb";
} = {
    landing: "iray",
    landing_id: 49,
    start_url: "",
    referrer: "",
    ip: "",
    utm: {},
    geo: "rf"
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

export const getGeo = createAsyncThunk(
    "global/getGeo",
    async (_, { getState, rejectWithValue, dispatch }) => {
        try {
            const { ip } = getState() as typeof initialState;
            if (!ip) await dispatch(getIp());
            const response = await fetch(
                `https://dev.telescope1.ru/geo/backend/locate?ip=${ip}&format=json`
            );
            return response.json();
        } catch (error: any) {
            rejectWithValue(error.responce.data);
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getIp.fulfilled, (state, action) => {
            state.ip = action.payload.ip;
        });

        builder.addCase(
            getGeo.fulfilled,
            (
                state,
                action: PayloadAction<{
                    location: {
                        data: {
                            city: string;
                        };
                    };
                }>
            ) => {
                switch (action.payload?.location.data.city) {
                    case "Нижний Новгород":
                        state.geo = "nn";
                        break;

                    case "Москва":
                        state.geo = "msk";
                        break;

                    case "Санкт-Петербург":
                        state.geo = "spb";
                        break;

                    default:
                        state.geo = "rf";
                        break;
                }

                setCookie("geo", state.geo, { maxAge: 604800 });
            }
        );
    }
});

export const GlobalReducer = slice.reducer;
export const { setReferrer, setStartUrl, setUTM } = slice.actions;
export const GlobalState = (state: RootState) => state.GlobalReducer;
