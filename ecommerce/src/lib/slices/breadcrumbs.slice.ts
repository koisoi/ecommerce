import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState: {
    currentCategoryTitle: string | null;
    currentSeriesTitle: string | null;
    currentProductTitle: string | null;
    currentStaticPageTitle: string | null;
} = {
    currentCategoryTitle: null,
    currentSeriesTitle: null,
    currentProductTitle: null,
    currentStaticPageTitle: null
};

const slice = createSlice({
    name: "BreadcrumbsSlice",
    initialState,
    reducers: {
        setCurrentCategoryTitle(state, action: PayloadAction<string | null>) {
            state.currentCategoryTitle = action.payload;
        },
        setCurrentSeriesTitle(state, action: PayloadAction<string | null>) {
            state.currentSeriesTitle = action.payload;
        },
        setCurrentProductTitle(state, action: PayloadAction<string | null>) {
            state.currentProductTitle = action.payload;
        },
        setCurrentStaticPageTitle(state, action: PayloadAction<string | null>) {
            state.currentStaticPageTitle = action.payload;
        },
        resetBreadcrumbsState() {
            return initialState;
        }
    }
});

export const BreadcrumbsReducer = slice.reducer;
export const {
    setCurrentCategoryTitle,
    setCurrentProductTitle,
    setCurrentSeriesTitle,
    setCurrentStaticPageTitle,
    resetBreadcrumbsState
} = slice.actions;
export const BreadcrumbsState = (state: RootState) => state.BreadcrumbsReducer;
