import { Box, BoxProps } from "@mui/material";
import Logo from "./logo";
import BackCallButton from "@/app/(shared)/backCallButton/backCallButton.client";
import MobileCartButton from "./mobileButtons/mobileCartButton.client";
import MobileMenuButton from "./mobileButtons/mobileMenuButton.client";
import MobileMenu from "./mobileMenu/mobileMenu.client";
import { landingConfig } from "@/lib";

const HeaderMobileNavigation = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        width: "100%",

        fontSize: "2rem",
        color: "white",

        boxSizing: "border-box"
    };

    const centerBoxProps: BoxProps = {
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center"
    };

    const backCallWrapperProps: BoxProps = {
        display: { xs: "none", sm: "flex" },
        alignItems: "center"
    };

    return (
        <>
            <MobileMenu categories={landingConfig.categories}>
                <Logo />
            </MobileMenu>

            <Box {...wrapperProps}>
                <MobileMenuButton />
                <Box {...centerBoxProps}>
                    <Logo mobile />
                    <Box {...backCallWrapperProps}>
                        <BackCallButton altColor />
                    </Box>
                </Box>
                <MobileCartButton />
            </Box>
        </>
    );
};

export default HeaderMobileNavigation;
