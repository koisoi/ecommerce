"use client";

import { setMobileMenuOpen, useAppDispatch } from "@/lib";
import { MouseEventHandler } from "react";
import MobileHeaderButtonTemplate from "./mobileHeaderButtonTemplate";

export const MobileMenuButton = () => {
    const dispatch = useAppDispatch();

    const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(setMobileMenuOpen(true));
    };

    return (
        <MobileHeaderButtonTemplate variant="menu" onClick={handleMenuOpen} />
    );
};
