"use client";

import {
    MouseEventHandler,
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from "react";
import HeaderMainContainerTemplate from "./mainContainer.template";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib";
import { setDesktopCartButtonRect } from "@/lib/slices/cartAnimation.slice";

const HeaderMainContainer = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const ref = useRef<HTMLButtonElement | null>(null);

    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    useLayoutEffect(() => {
        const button = document.getElementById("desktop-header-button");

        dispatch(setDesktopCartButtonRect(button?.getBoundingClientRect()));
    }, []);

    return <HeaderMainContainerTemplate onCartClick={handleCartClick} />;
};

export default HeaderMainContainer;
