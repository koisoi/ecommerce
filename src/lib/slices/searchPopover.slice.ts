import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    SearchQuery,
    SearchResponse,
    searchAPI
} from "../services/search.service";
import { RootState } from "..";

const initialState: {
    loading: boolean;
    canSearchInPopover: boolean;
    response?: SearchResponse;
} = {
    loading: true,
    canSearchInPopover: true
};

export const searchPopover = createAsyncThunk(
    "search/fetch",
    async (arg: SearchQuery, { rejectWithValue }) => {
        try {
            const response = await searchAPI.search(arg);
            return response;
        } catch (error: any) {
            rejectWithValue(error);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).SearchPopoverReducer
                .canSearchInPopover;
        }
    }
);

const slice = createSlice({
    name: "SearchPopoverSlice",
    initialState,
    reducers: {
        setCanSearchInPopover(state, action: PayloadAction<boolean>) {
            state.canSearchInPopover = action.payload;
        },
        clearPopupSearchResponse(state) {
            state.response = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(searchPopover.pending, (state) => {
            state.loading = true;
            state.canSearchInPopover = false;
        });
        builder.addCase(searchPopover.fulfilled, (state, action) => {
            state.response = action.payload;
            state.loading = false;
            state.canSearchInPopover = true;
        });
        builder.addCase(searchPopover.rejected, (state) => {
            state.loading = false;
            state.canSearchInPopover = true;
        });
    }
});

export const SearchPopoverReducer = slice.reducer;
export const { setCanSearchInPopover, clearPopupSearchResponse } =
    slice.actions;
export const SearchPopoverState = (state: RootState) =>
    state.SearchPopoverReducer;
