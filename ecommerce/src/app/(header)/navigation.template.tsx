"use client";

import { Box, BoxProps } from "@mui/material";
import HeaderMobileNavigation from "./mobileNavigation/mobileNavigation";
import { CategoryListItem } from "@/lib";
import HeaderDesktopNavigation from "./desktopNavigation/desktopNavigation";
import { useRouter } from "next/navigation";
import LoadingHeaderContactsBox from "./contactsBox/loadingContactsBox";
import dynamic from "next/dynamic";

const DynamicContactsBox = dynamic(
    () => import("@/app/(header)/contactsBox/realContactsBox"),
    {
        ssr: false
        // loading: () => <LoadingHeaderContactsBox />
    }
);

const HeaderNavigation = ({
    mobile,
    categories
}: {
    mobile: boolean;
    categories: CategoryListItem[];
}) => {
    // const
    const router = useRouter();

    // handlers
    const handleDesktopTabClick = (path: string): void => {
        router.push(`/catalog/${path}`);
    };

    const outerWrapperProps: BoxProps = {
        component: mobile ? "header" : "nav",

        position: "sticky",
        top: "-1px",
        zIndex: 11,
        boxSizing: "border-box",

        display: "flex",
        flexDirection: "column"
    };

    const wrapperProps: BoxProps = {
        justifyContent: { xs: "normal", md: "center" },

        width: "100%",
        minHeight: { xs: "45px", md: "50px" },
        display: { xs: mobile ? "flex" : "none", md: mobile ? "none" : "flex" },

        // ...boxProps,

        sx: {
            backgroundColor: "primary.main"

            // ...boxProps?.sx
        }
    };

    return (
        <Box {...outerWrapperProps}>
            {mobile && <DynamicContactsBox mobile />}
            <Box {...wrapperProps}>
                {mobile && <HeaderMobileNavigation />}
                {!mobile && (
                    <HeaderDesktopNavigation
                        categories={categories}
                        onTabClick={handleDesktopTabClick}
                    />
                )}
            </Box>
        </Box>
    );
};

export default HeaderNavigation;
