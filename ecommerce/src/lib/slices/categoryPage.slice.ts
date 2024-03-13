// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";
// import { categoryAPI } from "../services/catalog.service";
// import { CategoryInfo } from "../types/category";

// const initialState: CategoryInfo & {
//     loading: boolean;
//     seriesSiblingsLoading: boolean;
//     canFetchCategory: boolean;
//     canFetchSeriesSiblings: boolean;
//     wrongCategoryQuery: boolean;
// } = {
//     title: "",
//     series: [],
//     alias: "",
//     parent_class: "",
//     loading: true,
//     seriesSiblingsLoading: true,
//     canFetchCategory: true,
//     canFetchSeriesSiblings: true,
//     wrongCategoryQuery: false
// };

// /**
//  * Получение информации о категории
//  * @param arg alias категории
//  */
// export const fetchCategory = createAsyncThunk(
//     "category/fetchCategory",
//     async (
//         arg: { category: string | null; series: string | null },
//         { rejectWithValue }
//     ) => {
//         try {
//             const response = await categoryAPI.getCategory(arg);
//             return response;
//         } catch (error: any) {
//             rejectWithValue(error.response.data);
//         }
//     },
//     {
//         condition: (_, { getState }) => {
//             return (getState() as RootState).CategoryPageReducer
//                 .canFetchCategory;
//         }
//     }
// );

// export const fetchSeriesSiblings = createAsyncThunk(
//     "category/fetchSeriesSiblings",
//     async (
//         arg: { category: string | null; series: string | null },
//         { rejectWithValue }
//     ) => {
//         try {
//             const response = await categoryAPI.getSeriesSiblings(arg);
//             return response;
//         } catch (error: any) {
//             rejectWithValue(error.response.data);
//         }
//     },
//     {
//         condition: (_, { getState }) => {
//             return (
//                 !(getState() as RootState).CategoryPageReducer.series.length &&
//                 (getState() as RootState).CategoryPageReducer.parent_class ===
//                     "Catalog_Model_ProductSeries" &&
//                 (getState() as RootState).CategoryPageReducer
//                     .canFetchSeriesSiblings
//             );
//         }
//     }
// );

// const slice = createSlice({
//     name: "CategoryPageSlice",
//     initialState,
//     reducers: {
//         setCanFetchCategory(state, action: PayloadAction<boolean>) {
//             state.canFetchCategory = action.payload;
//         },
//         setCanFetchSeriesSiblings(state, action: PayloadAction<boolean>) {
//             state.canFetchSeriesSiblings = action.payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchCategory.pending, (state) => {
//             state.loading = true;
//             state.canFetchCategory = false;
//             state.wrongCategoryQuery = false;
//         });
//         builder.addCase(fetchCategory.fulfilled, (state, action) => {
//             state.title = action.payload?.title || "";
//             state.page_description = action.payload?.page_description || "";
//             state.series = action.payload?.series || state.series;
//             state.category = action.payload?.category;

//             state.loading = false;
//             state.canFetchCategory = true;
//         });
//         builder.addCase(fetchCategory.rejected, (state, action) => {
//             if ((action.payload as { status: number })?.status === 404)
//                 state.wrongCategoryQuery = true;
//             state.loading = false;
//             state.canFetchCategory = true;
//         });

//         builder.addCase(fetchSeriesSiblings.pending, (state) => {
//             state.seriesSiblingsLoading = true;
//             state.canFetchSeriesSiblings = false;
//         });
//         builder.addCase(fetchSeriesSiblings.fulfilled, (state, action) => {
//             state.series = action.payload || state.series;
//             state.seriesSiblingsLoading = false;
//             state.canFetchSeriesSiblings = true;
//         });
//         builder.addCase(fetchSeriesSiblings.rejected, (state) => {
//             state.loading = false;
//             state.canFetchSeriesSiblings = true;
//         });
//     }
// });

// export const CategoryPageReducer = slice.reducer;
// export const { setCanFetchCategory, setCanFetchSeriesSiblings } = slice.actions;
// export const CategoryPageState = (state: RootState) =>
//     state.CategoryPageReducer;
