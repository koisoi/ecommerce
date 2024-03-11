import { Box, BoxProps } from "@mui/material";
import HeaderNavigation from "./navigation.template";
import { landingConfig } from "@/lib/data/config";
import HeaderTopContainer from "./topContainer.template";
import HeaderMainContainer from "./mainContainer/mainContainer.template";

const Header = ({ props }: { props?: BoxProps }) => {
    // props
    const wrapperProps: BoxProps = {
        component: "header",
        boxSizing: "border-box",
        width: "100%",

        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        ...props,

        marginTop: "0.5rem"
    };

    return (
        <>
            <HeaderNavigation
                mobile={true}
                categories={landingConfig.categories}
            />
            <Box {...wrapperProps}>
                <HeaderTopContainer />
                <HeaderMainContainer />
            </Box>
            <HeaderNavigation
                mobile={false}
                categories={landingConfig.categories}
            />
        </>
    );
};

export default Header;
