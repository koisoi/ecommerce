"use client";

import { AppStore, makeStore } from "@/lib/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export let store: ReturnType<typeof makeStore>;

export default function StoreProvider({
    children
}: {
    children: React.ReactNode;
}) {
    // const storeRef = useRef<AppStore>();
    // if (!storeRef.current) {
    // Создание экземпляра стора первый раз, как этот компонент рендерится
    //     storeRef.current = makeStore();
    // }

    if (!store) {
        store = makeStore();
    }

    return <Provider store={store}>{children}</Provider>;
}
