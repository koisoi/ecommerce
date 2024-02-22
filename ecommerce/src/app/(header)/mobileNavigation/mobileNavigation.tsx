"use client";

import {
    MouseEventHandler,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef
} from "react";
import { useRouter } from "next/navigation";
import HeaderMobileNavigationTemplate from "./mobileNavigation.template";
import { CartState, useAppDispatch, useAppSelector } from "@/lib";
import { setMobileCartButtonRect } from "@/lib/slices/cartAnimation.slice";
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

    useLayoutEffect(() => {
        const button = document.getElementById("mobile-shopping-cart-button");

        dispatch(setMobileCartButtonRect(button?.getBoundingClientRect()));
    }, []);

    return (
        <HeaderMobileNavigationTemplate
            onCartClick={handleCartClick}
            cartAmount={amount}
            onMenuOpen={handleMenuOpen}
        />
    );
};

export default HeaderMobileNavigation;
