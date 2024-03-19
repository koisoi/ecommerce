"use client";

import { CartState, useAppSelector } from "@/lib";
import { MouseEventHandler, useMemo } from "react";
import MobileHeaderButtonTemplate from "./mobileHeaderButtonTemplate";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const DynamicHeaderButton = dynamic(
    () => import("@/app/(header)/mobileButtons/mobileHeaderButtonTemplate"),
    {
        ssr: false,
        loading: () => (
            <MobileHeaderButtonTemplate
                variant="shoppingCart"
                id="mobile-shopping-cart-button"
            />
        )
    }
);

const MobileCartButton = () => {
    const router = useRouter();

    const { items } = useAppSelector(CartState);

    const amount = useMemo(
        () =>
            items.reduce<number>((prev, _, i, arr) => prev + arr[i].amount, 0),
        [items]
    );

    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    return (
        <DynamicHeaderButton
            variant="shoppingCart"
            onClick={handleCartClick}
            id="mobile-shopping-cart-button"
            amount={amount}
        />
    );
};

export default MobileCartButton;
