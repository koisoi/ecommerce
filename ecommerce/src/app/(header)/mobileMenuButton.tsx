"use client";

import { setMobileMenuOpen, useAppDispatch } from "@/lib";
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
