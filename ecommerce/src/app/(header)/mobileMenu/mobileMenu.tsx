"use client";

import { useAppDispatch, useAppSelector } from "@/lib";
import MobileMenuTemplate from "./mobileMenu.template";
import {
    MobileMenuState,
    setMobileMenuOpen
} from "@/lib/slices/mobileMenu.slice";
import { usePathname } from "next/navigation";
import { landingConfig } from "@/lib/data/config";
import { ReactNode } from "react";

const MobileMenu = ({
    children
}: // logoImgLink
{
    // logoImgLink: string;
    children: ReactNode;
}) => {
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
            categories={landingConfig.categories}
            phone={landingConfig.phoneNumber}
            path={path}
            // logoImgLink={logoImgLink}
        >
            {children}
        </MobileMenuTemplate>
    );
};

export default MobileMenu;
