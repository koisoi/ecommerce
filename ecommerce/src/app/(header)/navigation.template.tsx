"use client";

import { Box, BoxProps } from "@mui/material";
import HeaderDesktopNavigation from "./desktopNavigation.template";
import { CSSProperties } from "react";
import HeaderMobileNavigation from "./mobileNavigation/mobileNavigation";
import { CategoryListItem, useMediaQueries } from "@/lib";

const HeaderNavigation = ({
    mobile,
    categories
}: {
    mobile: boolean;
    categories: CategoryListItem[];
}) => {
    const screen = useMediaQueries();

    const navigationProps: { style: CSSProperties } = {
        style: {
            position: "sticky",
            top: "-1px",
            zIndex: 11,
            boxSizing: "border-box",
            minHeight: screen.md ? "50px" : "45px"
        }
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        justifyContent: { xs: "normal", md: "center" },

        width: { xs: "unset", md: "100vw" },
        minHeight: { xs: "45px", md: "50px" },
        paddingX: { xs: "15px", md: "0" },

        sx: {
            backgroundColor: "primary.main"
        }
    };

    return (
        <nav {...navigationProps}>
            <Box {...wrapperProps}>
                {mobile && <HeaderMobileNavigation />}
                {!mobile && <HeaderDesktopNavigation categories={categories} />}
            </Box>
        </nav>
    );
};

export default HeaderNavigation;
