import { configureStore } from "@reduxjs/toolkit";
import { ProductPageReducer, CartReducer } from ".";
import { GlobalReducer } from "./slices/global.slice";
import { BackCallReducer } from "./slices/backCall.slice";
import { SearchReducer } from "./slices/search.slice";
import { SearchPopoverReducer } from "./slices/searchPopover.slice";
import { MobileMenuReducer } from "./slices/mobileMenu.slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            ProductPageReducer,
            CartReducer,
            GlobalReducer,
            BackCallReducer,
            SearchReducer,
            SearchPopoverReducer,
            MobileMenuReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false })
    });
};

// Тип makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Типы RootState и AppDispatch из стора
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
