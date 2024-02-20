import { configureStore } from "@reduxjs/toolkit";
import {
    ProductPageReducer,
    ProductsCategoryGridReducer,
    CategoryPageReducer,
    BreadcrumbsReducer,
    CartReducer
} from ".";
import { GlobalReducer } from "./slices/global.slice";
import { CartAnimationReducer } from "./slices/cartAnimation.slice";
import { BackCallReducer } from "./slices/backCall.slice";
import { SearchReducer } from "./slices/search.slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            CategoryPageReducer,
            ProductsCategoryGridReducer,
            ProductPageReducer,
            BreadcrumbsReducer,
            CartReducer,
            GlobalReducer,
            CartAnimationReducer,
            BackCallReducer,
            SearchReducer
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
