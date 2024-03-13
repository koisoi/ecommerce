// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";
// import { categoryAPI } from "../services/catalog.service";
// import { fetchCategory } from "./categoryPage.slice";
// import { CategoryItemsRequest, CategoryItemsResponse } from "../types/category";

// const initialState: CategoryItemsResponse & {
//     loading: boolean;
//     canFetchCategoryItems: boolean;
// } = {
//     totalItemCount: 0,
//     list: [],
//     loading: true,
//     canFetchCategoryItems: true
// };

// /**
//  * Получение товаров в категории
//  * @param arg объект параметров
//  * @param category alias категории
//  * @param series необязательный, alias серии
//  * @param productsPerPage карточек на страницу
//  * @param page страница
//  */
// export const fetchCategoryItems = createAsyncThunk(
//     "category/fetchItems",
//     async (arg: CategoryItemsRequest, { rejectWithValue }) => {
//         try {
//             const response = await categoryAPI.getCategoryItems(arg);
//             return response;
//         } catch (error: any) {
//             rejectWithValue(error.response.data);
//         }
//     },
//     {
//         condition: (_, { getState }) => {
//             return (getState() as RootState).ProductsCategoryGridReducer
//                 .canFetchCategoryItems;
//         }
//     }
// );

// const slice = createSlice({
//     name: "ProductsCategoryGridSlice",
//     initialState,
//     reducers: {
//         setCanFetchCategoryItems(state, action: PayloadAction<boolean>) {
//             state.canFetchCategoryItems = action.payload;
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchCategoryItems.pending, (state) => {
//             state.loading = true;
//             state.canFetchCategoryItems = false;
//         });
//         builder.addCase(fetchCategoryItems.fulfilled, (state, action) => {
//             state.totalItemCount = action.payload?.totalItemCount || 0;
//             state.list = action.payload?.list || [];

//             state.loading = false;
//             state.canFetchCategoryItems = true;
//         });
//         builder.addCase(fetchCategory.rejected, (state) => {
//             state.loading = false;
//             state.canFetchCategoryItems = true;
//         });
//     }
// });

// export const ProductsCategoryGridReducer = slice.reducer;
// export const { setCanFetchCategoryItems } = slice.actions;
// export const ProductsCategoryGridState = (state: RootState) =>
//     state.ProductsCategoryGridReducer;
