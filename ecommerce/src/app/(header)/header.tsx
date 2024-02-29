import { Box, BoxProps } from "@mui/material";
import HeaderNavigation from "./navigation.template";
import { landingConfig } from "@/lib/data/config";
import HeaderTopContainer from "./topContainer.template";
import HeaderMainContainer from "./mainContainer/mainContainer";

const Header = () => {
    // props
    const wrapperProps: BoxProps = {
        boxSizing: "border-box",
        minWidth: "100%",

        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    };

    const mobileHeaderProps: BoxProps = {
        display: { xs: "flex", md: "none" }
    };

    const desktopHeaderProps: BoxProps = {
        display: { xs: "none", md: "flex" }
    };

    return (
        <>
            <HeaderNavigation
                mobile={true}
                categories={landingConfig.categories}
                boxProps={mobileHeaderProps}
            />
            <header>
                <Box {...wrapperProps}>
                    <HeaderTopContainer />
                    <HeaderMainContainer />
                </Box>
            </header>
            <HeaderNavigation
                mobile={false}
                categories={landingConfig.categories}
                boxProps={desktopHeaderProps}
            />
        </>
    );
};

export default Header;
