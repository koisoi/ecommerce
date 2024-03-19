import { Box, BoxProps } from "@mui/material";
import HeaderMobileNavigation from "./headerMobileNavigation";
import { landingConfig } from "@/lib";
import MobileContactsBoxTemplate from "./mobileContactsBoxTemplate";
import HeaderDesktopNavigationTemplate from "./headerDesktopNavigationTemplate.client";

const HeaderNavigation = ({
    mobile
}: // categories
{
    mobile?: boolean;
    // categories: PageData[];
}) => {
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

        sx: {
            backgroundColor: "primary.main"
        }
    };

    return (
        <Box {...outerWrapperProps}>
            {mobile && (
                <MobileContactsBoxTemplate
                    phoneNumber={landingConfig.phoneNumber}
                />
            )}
            <Box {...wrapperProps}>
                {mobile && <HeaderMobileNavigation />}
                {!mobile && (
                    <HeaderDesktopNavigationTemplate
                        categories={landingConfig.categories}
                    />
                )}
            </Box>
        </Box>
    );
};

export default HeaderNavigation;
