import { configureStore } from "@reduxjs/toolkit";
import { CategoryPageReducer } from "./slices/categoryPage.slice";
import { ProductsCategoryGridReducer } from "./slices/productsCategoryGrid.slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            CategoryPageReducer,
            ProductsCategoryGridReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false })
    });
};

// Тип makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Типы`RootState и AppDispatch из стора
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
