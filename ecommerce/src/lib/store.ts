import { configureStore } from "@reduxjs/toolkit";
import {
    ProductPageReducer,
    // ProductsCategoryGridReducer,
    // CategoryPageReducer,
    BreadcrumbsReducer,
    CartReducer
} from ".";
import { GlobalReducer } from "./slices/global.slice";
import { BackCallReducer } from "./slices/backCall.slice";
import { SearchReducer } from "./slices/search.slice";
import { SearchPopoverReducer } from "./slices/searchPopover.slice";
import { MobileMenuReducer } from "./slices/mobileMenu.slice";
import { HomePageReducer } from "./slices/homePage.slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            // CategoryPageReducer,
            // ProductsCategoryGridReducer,
            ProductPageReducer,
            BreadcrumbsReducer,
            CartReducer,
            GlobalReducer,
            BackCallReducer,
            SearchReducer,
            SearchPopoverReducer,
            MobileMenuReducer,
            HomePageReducer
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
