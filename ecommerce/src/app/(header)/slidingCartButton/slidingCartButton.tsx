"use client";

import { CartState, useAppSelector, useMediaQueries } from "@/lib";
import SlidingCartButtonTemplate from "./slidingCartButton.template";
import { MouseEventHandler, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const SlidingCartButton = () => {
    const screen = useMediaQueries();
    const path = usePathname();

    const [visible, setVisible] = useState<boolean>(false);
    const [cartAnchorEl, setCartAnchorEl] = useState<Element | null>(null);

    const { items } = useAppSelector(CartState);

    const amount = items.reduce<number>(
        (prev, _, i, arr) => prev + arr[i].amount,
        0
    );

    const toggleVisible = () => {
        if (!screen.md || path === "/cart" || path === "/cart/") {
            setVisible(false);
            return;
        }
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 500) {
            setVisible(true);
        } else if (scrolled <= 500) {
            setVisible(false);
            setCartAnchorEl(null);
        }
    };

    const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        setCartAnchorEl(event.currentTarget);
    };

    const handleCartClose = () => {
        setCartAnchorEl(null);
    };

    window.addEventListener("scroll", toggleVisible);

    useEffect(() => {
        return window.removeEventListener("scroll", toggleVisible);
    });

    return (
        <SlidingCartButtonTemplate
            amount={amount}
            visible={visible}
            cartPopoverAnchorEl={cartAnchorEl}
            onClick={handleClick}
            onCartClose={handleCartClose}
        />
    );
};

export default SlidingCartButton;