"use client";

import { CartState, useAppSelector } from "@/lib";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import { DesktopCartHeaderButtonTemplate } from "./desktopCartHeaderButtonTemplate";

const DesktopCartHeaderButton = () => {
    const { items } = useAppSelector(CartState);

    // const
    const router = useRouter();
    const amount = items.reduce<number>(
        (prev, _, i, arr) => prev + arr[i].amount,
        0
    );

    // handlers
    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    return (
        <DesktopCartHeaderButtonTemplate
            amount={amount}
            onCartClick={handleCartClick}
        />
    );
};

export default DesktopCartHeaderButton;
