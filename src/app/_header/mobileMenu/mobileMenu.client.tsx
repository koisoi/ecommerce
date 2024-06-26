"use client";

import {
    MobileMenuState,
    PageData,
    landingConfig,
    setMobileMenuOpen,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import { MobileMenuTemplate } from "./mobileMenuTemplate";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const MobileMenu = ({
    children,
    categories
}: {
    children?: ReactNode;
    categories: PageData[];
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
            categories={categories}
            phone={landingConfig.phoneNumber}
            path={path}
        >
            {children}
        </MobileMenuTemplate>
    );
};
