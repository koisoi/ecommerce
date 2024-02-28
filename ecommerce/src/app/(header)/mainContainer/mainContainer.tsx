"use client";

import { MouseEventHandler } from "react";
import HeaderMainContainerTemplate from "./mainContainer.template";
import { useRouter } from "next/navigation";
import { CartState, useAppSelector } from "@/lib";
import { GlobalState } from "@/lib/slices/global.slice";

const HeaderMainContainer = () => {
    const router = useRouter();

    const { storeAddress, phoneNumber } = useAppSelector(GlobalState);
    const { items } = useAppSelector(CartState);

    const amount = items.reduce<number>(
        (prev, _, i, arr) => prev + arr[i].amount,
        0
    );

    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    return (
        <HeaderMainContainerTemplate
            onCartClick={handleCartClick}
            storeAddress={storeAddress}
            phone={phoneNumber}
            cartAmount={amount}
        />
    );
};

export default HeaderMainContainer;
