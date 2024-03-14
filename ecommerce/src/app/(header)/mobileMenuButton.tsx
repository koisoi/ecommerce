"use client";

import { useAppDispatch } from "@/lib";
import { setMobileMenuOpen } from "@/lib/slices/mobileMenu.slice";
import { MouseEventHandler } from "react";
import MobileHeaderButton from "./mobileHeaderButton.template";

const MobileMenuButton = () => {
    const dispatch = useAppDispatch();

    const handleMenuOpen: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(setMobileMenuOpen(true));
    };

    return <MobileHeaderButton variant="menu" onClick={handleMenuOpen} />;
};

export default MobileMenuButton;
