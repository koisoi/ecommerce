import { configureStore } from "@reduxjs/toolkit";
import {
    ProductPageReducer,
    ProductsCategoryGridReducer,
    CategoryPageReducer,
    BreadcrumbsReducer,
    CartReducer
} from ".";

export const makeStore = () => {
    return configureStore({
        reducer: {
            CategoryPageReducer,
            ProductsCategoryGridReducer,
            ProductPageReducer,
            BreadcrumbsReducer,
            CartReducer
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
