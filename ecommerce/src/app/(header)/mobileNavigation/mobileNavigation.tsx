"use client";

import { MouseEventHandler, useMemo } from "react";
import { useRouter } from "next/navigation";
import HeaderMobileNavigationTemplate from "./mobileNavigation.template";
import { CartState, useAppDispatch, useAppSelector } from "@/lib";
import { setMobileMenuOpen } from "@/lib/slices/mobileMenu.slice";

const HeaderMobileNavigation = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { items } = useAppSelector(CartState);

    const amount = useMemo(
        () =>
            items.reduce<number>((prev, _, i, arr) => prev + arr[i].amount, 0),
        [items]
    );

    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(setMobileMenuOpen(true));
    };

    return (
        <HeaderMobileNavigationTemplate
            onCartClick={handleCartClick}
            cartAmount={amount}
            onMenuOpen={handleMenuOpen}
        />
    );
};

export default HeaderMobileNavigation;
