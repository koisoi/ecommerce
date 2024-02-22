"use client";

import { useAppDispatch, useAppSelector } from "@/lib";
import MobileMenuTemplate from "./mobileMenu.template";
import {
    MobileMenuState,
    setMobileMenuOpen
} from "@/lib/slices/mobileMenu.slice";
import { GlobalState } from "@/lib/slices/global.slice";

const MobileMenu = () => {
    const dispatch = useAppDispatch();

    const { mobileMenuOpen } = useAppSelector(MobileMenuState);
    const { categories, phoneNumber, storeAddress } =
        useAppSelector(GlobalState);

    const handleMenuClose: (
        event: {},
        reason: "backdropClick" | "escapeKeyDown"
    ) => void = () => {
        dispatch(setMobileMenuOpen(false));
    };

    return (
        <MobileMenuTemplate
            open={mobileMenuOpen}
            onMenuClose={handleMenuClose}
            categories={categories}
            phone={phoneNumber}
            address={storeAddress}
        />
    );
};

export default MobileMenu;
