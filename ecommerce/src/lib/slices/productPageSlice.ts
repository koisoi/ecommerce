import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productAPI } from "../services/product.service";
import { Product, ProductRequest, RootState } from "..";

const initialState: Product & { loading: boolean; canFetchProduct: boolean } = {
    id: 0,
    articul: "",
    images: [],
    title: "",
    price: "",
    alias: "",
    is_new: false,
    is_recommend: false,
    shortCharacteristics: "",
    fullCharacteristics: "",
    description: "",
    simliarProducts: [],

    loading: true,
    canFetchProduct: true
};

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async (arg: ProductRequest, { rejectWithValue }) => {
        try {
            const response = await productAPI.getCategoryItem(arg);
            return response;
        } catch (error: any) {
            rejectWithValue(error.response.data);
        }
    },
    {
        condition: (_, { getState }) => {
            return (getState() as RootState).ProductPageReducer.canFetchProduct;
        }
    }
);

const slice = createSlice({
    name: "ProductPageSlice",
    initialState,
    reducers: {
        setCanFetchProduct(state, action: PayloadAction<boolean>) {
            state.canFetchProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
            state.canFetchProduct = false;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.alias = action.payload?.alias || "";
            state.articul = action.payload?.articul || "";
            state.description = action.payload?.description || "";
            state.feedback = action.payload?.feedback;
            state.fullCharacteristics =
                action.payload?.fullCharacteristics || "";
            state.id = action.payload?.id || 0;
            state.images = action.payload?.images || [];
            state.is_available = action.payload?.is_available;
            state.is_new = action.payload?.is_new || false;
            state.is_recommend = action.payload?.is_recommend || false;
            state.price = action.payload?.price || "0";
            state.shortCharacteristics =
                action.payload?.shortCharacteristics || "";
            state.simliarProducts = action.payload?.simliarProducts || [];
            state.title = action.payload?.title || "";

            state.loading = false;
            state.canFetchProduct = true;
        });
        builder.addCase(fetchProduct.rejected, (state) => {
            state.loading = false;
            state.canFetchProduct = true;
        });
    }
});

export const ProductPageReducer = slice.reducer;
export const { setCanFetchProduct } = slice.actions;
export const ProductPageState = (state: RootState) => state.ProductPageReducer;
