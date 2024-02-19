"use client";

import {
    CartState,
    useAppDispatch,
    useAppSelector,
    useMediaQueries
} from "@/lib";
import SlidingCartButtonTemplate from "./slidingCartButton.template";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { setDesktopSlidingCartButtonRect } from "@/lib/slices/cartAnimation.slice";

const SlidingCartButton = () => {
    const screen = useMediaQueries();
    const path = usePathname();
    const ref = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();

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

        dispatch(
            setDesktopSlidingCartButtonRect(
                ref.current?.getBoundingClientRect()
            )
        );

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

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        dispatch(
            setDesktopSlidingCartButtonRect(
                ref.current?.getBoundingClientRect()
            )
        );

        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    return (
        <SlidingCartButtonTemplate
            amount={amount}
            visible={visible}
            cartPopoverAnchorEl={cartAnchorEl}
            onClick={handleClick}
            onCartClose={handleCartClose}
            buttonRef={ref}
        />
    );
};

export default SlidingCartButton;
