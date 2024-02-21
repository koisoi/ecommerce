"use client";

import {
    ChangeEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    useLayoutEffect,
    useState
} from "react";
import HeaderMainContainerTemplate from "./mainContainer.template";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib";
import { setDesktopCartButtonRect } from "@/lib/slices/cartAnimation.slice";
import { GlobalState } from "@/lib/slices/global.slice";

const HeaderMainContainer = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { storeAddress, phoneNumber } = useAppSelector(GlobalState);

    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    useLayoutEffect(() => {
        const button = document.getElementById("desktop-header-button");

        dispatch(setDesktopCartButtonRect(button?.getBoundingClientRect()));
    }, []);

    return (
        <HeaderMainContainerTemplate
            onCartClick={handleCartClick}
            storeAddress={storeAddress}
            phone={phoneNumber}
        />
    );
};

export default HeaderMainContainer;
