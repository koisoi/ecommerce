"use client";

import { Box, BoxProps } from "@mui/material";
import HeaderMobileNavigation from "./mobileNavigation.template";
import HeaderDesktopNavigation from "./desktopNavigation.template";
import { CSSProperties } from "react";

const HeaderNavigation = ({ mobile }: { mobile: boolean }) => {
    const navigationProps: { style: CSSProperties } = {
        style: {
            position: "sticky",
            top: "-1px",
            zIndex: 11
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
                {!mobile && <HeaderDesktopNavigation />}
            </Box>
        </nav>
    );
};

export default HeaderNavigation;
