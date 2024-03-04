"use client";

import { Box, BoxProps } from "@mui/material";
import HeaderMobileNavigation from "./mobileNavigation/mobileNavigation";
import { CategoryListItem } from "@/lib";
import HeaderDesktopNavigation from "./desktopNavigation/desktopNavigation";
import { useRouter } from "next/navigation";

const HeaderNavigation = ({
    mobile,
    categories,
    boxProps
}: {
    mobile: boolean;
    categories: CategoryListItem[];
    boxProps?: BoxProps;
}) => {
    // const
    const router = useRouter();

    // handlers
    const handleDesktopTabClick = (path: string): void => {
        router.push(`/catalog/${path}`);
    };

    const wrapperProps: BoxProps = {
        component: "nav",

        display: "flex",
        justifyContent: { xs: "normal", md: "center" },

        width: { xs: "unset", md: "100vw" },
        minHeight: { xs: "45px", md: "50px" },
        paddingX: { xs: "15px", md: "0" },

        position: "sticky",
        top: "-1px",
        zIndex: 11,
        boxSizing: "border-box",

        ...boxProps,

        sx: {
            backgroundColor: "primary.main",

            ...boxProps?.sx
        }
    };

    return (
        <Box {...wrapperProps}>
            {mobile && <HeaderMobileNavigation />}
            {!mobile && (
                <HeaderDesktopNavigation
                    categories={categories}
                    onTabClick={handleDesktopTabClick}
                />
            )}
        </Box>
    );
};

export default HeaderNavigation;
