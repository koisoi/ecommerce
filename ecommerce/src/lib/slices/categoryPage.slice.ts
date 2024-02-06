import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryInfo, SeriesInfo } from "../types";
import { RootState } from "../store";

const initialState: CategoryInfo & {
    loading: boolean;
} = {
    title: "",
    series: [],
    loading: true
};

const slice = createSlice({
    name: "CategoryPageSlice",
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
        },
        setPageDesciprtion(state, action: PayloadAction<string | undefined>) {
            state.page_description = action.payload;
        },
        setSeries(state, action: PayloadAction<SeriesInfo[]>) {
            state.series = action.payload;
        }
    }
});

export const CategoryPageReducer = slice.reducer;
export const { setLoading, setSeries, setPageDesciprtion, setTitle } =
    slice.actions;
export const CategoryPageState = (state: RootState) =>
    state.CategoryPageReducer;
