"use client";

import { MouseEventHandler, useEffect, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import HeaderMobileNavigationTemplate from "./mobileNavigation.template";
import { useAppDispatch } from "@/lib";
import { setMobileCartButtonRect } from "@/lib/slices/cartAnimation.slice";

const HeaderMobileNavigation = () => {
    const router = useRouter();
    const ref = useRef<HTMLButtonElement>(null);
    const dispatch = useAppDispatch();

    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    useLayoutEffect(() => {
        const button = document.getElementById("mobile-shopping-cart-button");

        dispatch(setMobileCartButtonRect(button?.getBoundingClientRect()));
    }, []);

    return <HeaderMobileNavigationTemplate onCartClick={handleCartClick} />;
};

export default HeaderMobileNavigation;
