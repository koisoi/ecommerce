"use client";

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    CategoryListItem,
    RootState,
    UTMParams,
    categoryAPI,
    getProductImageLink
} from "..";
import { setCookie } from "cookies-next";

const initialState: {
    landing: string;
    landing_id: number;
    logoImgLink: string;
    start_url: string;
    referrer: string;
    ip: string;
    utm: UTMParams;
    geo: "rf" | "nn" | "msk" | "spb";
    storeAddress: string;
    phoneNumber: string;
    categories: CategoryListItem[];
    categoryImagesLoading: boolean;
    colors: {
        primary: {
            main: string;
            dark: string;
            light: string;
        };
        secondary: {
            main: string;
            dark: string;
            light: string;
        };
    };
} = {
    landing: "iray",
    landing_id: 49,
    logoImgLink:
        "https://telescope1.ru/data/upload/Catalog_Model_Brands/45855_original.svg",
    start_url: "",
    referrer: "",
    ip: "",
    utm: {},
    geo: "rf",
    storeAddress: "Доставка в пункт самовывоза",
    phoneNumber: "88007078195",
    categories: [
        {
            title: "Дальномеры",
            path: "TOP.range_finders"
        },
        {
            title: "Тепловизоры",
            path: "TOP.termovisors"
        },
        {
            title: "Тепловизионные прицелы",
            path: "TOP.thermal_riflescopes"
        },
        {
            title: "Ночные прицелы",
            path: "TOP.night_vision_riflescopes"
        },
        {
            title: "Тепловизионные насадки",
            path: "TOP.nv_thermal_attachments"
        }
    ],
    categoryImagesLoading: false,
    colors: {
        primary: {
            main: "#bd2126",
            dark: "#7a1619",
            light: "#ff757a"
        },
        secondary: {
            main: "#e3666a",
            dark: "#b04d51",
            light: "#ffb3b5"
        }
    }
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
            await dispatch(getIp());
            const { ip } = (getState() as RootState).GlobalReducer;
            const response = await fetch(
                `https://dev.telescope1.ru/geo/backend/locate?ip=${ip}&format=json`,
                {
                    method: "GET",
                    credentials: "include",
                    mode: "cors",
                    headers: new Headers({
                        Authorization: "Basic " + btoa("fr123:123qwe"),
                        "Content-Type": "application/json"
                    })
                }
            );
            return response.json();
        } catch (error: any) {
            rejectWithValue(error.response.data);
        }
    }
);

export const getCategoryImages = createAsyncThunk(
    "global/getCategoryImages",
    async (_, { getState, rejectWithValue }) => {
        const { categories } = (getState() as RootState).GlobalReducer;
        const response = Promise.all(
            categories.map((el) =>
                categoryAPI.getCategory({ category: el.path })
            )
        ).catch((error) => rejectWithValue(error));
        return response;
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
        setGeo(state, action: PayloadAction<"rf" | "nn" | "msk" | "spb">) {
            state.geo = action.payload;

            switch (state.geo) {
                case "nn":
                    state.storeAddress = "Пункт выдачи: ул. Саврасова, 32";
                    state.phoneNumber = "+78312156667";
                    break;

                case "msk":
                    state.storeAddress = "ул. Сокольническая Слободка, д. 10";
                    state.phoneNumber = "+74951510900";
                    break;

                case "spb":
                    state.storeAddress = "Пункт выдачи: ул. Заозерная, д. 3к2";
                    state.phoneNumber = "+78127010115";
                    break;

                default:
                    break;
            }
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

                switch (state.geo) {
                    case "nn":
                        state.storeAddress = "Пункт выдачи: ул. Саврасова, 32";
                        state.phoneNumber = "+78312156667";
                        break;

                    case "msk":
                        state.storeAddress =
                            "ул. Сокольническая Слободка, д. 10";
                        state.phoneNumber = "+74951510900";
                        break;

                    case "spb":
                        state.storeAddress =
                            "Пункт выдачи: ул. Заозерная, д. 3к2";
                        state.phoneNumber = "+78127010115";
                        break;

                    default:
                        break;
                }

                setCookie("geo", state.geo, { maxAge: 604800 });
            }
        );

        builder.addCase(getCategoryImages.pending, (state) => {
            state.categoryImagesLoading = true;
        });
        builder.addCase(getCategoryImages.fulfilled, (state, action) => {
            if (!action.payload) {
                return;
            }

            state.categories.forEach((el, i) => {
                if (!action.payload[i].category) return;
                el.image = getProductImageLink(
                    action.payload[i].category!.images[0].url
                );
            });

            state.categoryImagesLoading = false;
        });
        builder.addCase(getCategoryImages.rejected, (state) => {
            state.categoryImagesLoading = false;
        });
    }
});

export const GlobalReducer = slice.reducer;
export const { setReferrer, setStartUrl, setUTM, setGeo } = slice.actions;
export const GlobalState = (state: RootState) => state.GlobalReducer;
