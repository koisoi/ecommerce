"use client";

import { Box, BoxProps } from "@mui/material";
import HeaderDesktopNavigation from "./desktopNavigation.template";
import { CSSProperties } from "react";
import HeaderMobileNavigation from "./mobileNavigation/mobileNavigation";
import { CategoryListItem } from "@/lib";

const HeaderNavigation = ({
    mobile,
    categories
}: {
    mobile: boolean;
    categories: CategoryListItem[];
}) => {
    const navigationProps: { style: CSSProperties } = {
        style: {
            position: "sticky",
            top: "-1px",
            zIndex: 11,
            boxSizing: "border-box"
        }
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        justifyContent: { xs: "normal", md: "center" },

        width: { xs: "unset", md: "100vw" },
        height: { xs: "45px", md: "50px" },
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
