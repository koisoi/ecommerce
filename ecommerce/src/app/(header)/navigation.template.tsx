"use client";

import { Box, BoxProps } from "@mui/material";
import HeaderMobileNavigation from "./mobileNavigation/mobileNavigation";
import { PageData } from "@/lib";
import HeaderDesktopNavigation from "./desktopNavigation/desktopNavigation";
import { useRouter } from "next/navigation";
import MobileContactsBox from "./contactsBox/mobileContactsBox";
import { landingConfig } from "@/lib/data/config";

const HeaderNavigation = ({
    mobile,
    categories
}: {
    mobile: boolean;
    categories: PageData[];
}) => {
    // const
    const router = useRouter();

    // handlers
    const handleDesktopTabClick = (path: string): void => {
        router.push(path);
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
            {mobile && (
                <MobileContactsBox phoneNumber={landingConfig.phoneNumber} />
            )}
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
