import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
    SearchQuery,
    SearchResponse,
    searchAPI
} from "../services/search.service";

const initialState: {
    loading: boolean;
    canSearch: boolean;
    response?: SearchResponse;
} = {
    loading: true,
    canSearch: true
};

export const search = createAsyncThunk(
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
            return (getState() as RootState).SearchReducer.canSearch;
        }
    }
);

const slice = createSlice({
    name: "SearchSlice",
    initialState,
    reducers: {
        setCanSearch(state, action: PayloadAction<boolean>) {
            state.canSearch = action.payload;
        },
        resetSearch() {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(search.pending, (state) => {
            state.loading = true;
            state.canSearch = false;
        });
        builder.addCase(search.fulfilled, (state, action) => {
            state.response = action.payload;
            state.loading = false;
            state.canSearch = true;
        });
        builder.addCase(search.rejected, (state) => {
            state.loading = false;
            state.canSearch = true;
        });
    }
});

export const SearchReducer = slice.reducer;
export const { setCanSearch, resetSearch } = slice.actions;
export const SearchState = (state: RootState) => state.SearchReducer;
