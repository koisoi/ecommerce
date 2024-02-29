"use client";

import { setCart } from "@/lib";
import {
    getGeo,
    setGeo,
    setReferrer,
    setStartUrl,
    setUTM
} from "@/lib/slices/global.slice";
import { AppStore, makeStore } from "@/lib/store";
import { getCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
import { Provider } from "react-redux";

// export let store: ReturnType<typeof makeStore>;

export default function StoreProvider({
    children,
    referer
}: // url
{
    children: ReactNode;
    referer?: string | null;
    // url: string;
}) {
    const params = useSearchParams();

    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");
    const content = params.get("utm_content");
    const term = params.get("utm_term");

    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        // Создание экземпляра стора первый раз, как этот компонент рендерится
        storeRef.current = makeStore();

        storeRef.current.dispatch(
            setUTM({
                source: source || undefined,
                medium: medium || undefined,
                campaign: campaign || undefined,
                content: content || undefined,
                term: term || undefined
            })
        );
        storeRef.current.dispatch(setReferrer(referer || ""));

        const geo = getCookie("geo");
        if (!geo) storeRef.current.dispatch(getGeo());
        else {
            storeRef.current.dispatch(
                setGeo(geo as "rf" | "nn" | "msk" | "spb")
            );
        }

        if (getCookie("cart")) storeRef.current.dispatch(setCart([]));
    }

    useEffect(() => {
        storeRef.current?.dispatch(setStartUrl(document.URL));
    }, []);

    // if (!store) {
    //     store = makeStore();
    // }

    return <Provider store={storeRef.current}>{children}</Provider>;
}
