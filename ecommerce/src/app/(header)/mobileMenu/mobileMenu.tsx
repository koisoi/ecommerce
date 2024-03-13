"use client";

import { useAppDispatch, useAppSelector } from "@/lib";
import MobileMenuTemplate from "./mobileMenu.template";
import {
    MobileMenuState,
    setMobileMenuOpen
} from "@/lib/slices/mobileMenu.slice";
import { GlobalState } from "@/lib/slices/global.slice";
import { usePathname, useSearchParams } from "next/navigation";
import { landingConfig } from "@/lib/data/config";

const MobileMenu = () => {
    const dispatch = useAppDispatch();
    const path = usePathname();

    const { mobileMenuOpen } = useAppSelector(MobileMenuState);

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
            categories={Object.values(landingConfig.categories)}
            phone={landingConfig.phoneNumber}
            path={path}
        />
    );
};

export default MobileMenu;
