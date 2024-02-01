import { Box, BoxProps } from "@mui/material";
import HeaderTopContainer from "./topContainer";
import HeaderMainContainer from "./mainContainer";
import HeaderNavigation from "./navigation";

const Header = () => {
    const wrapperProps: BoxProps = {
        boxSizing: "border-box",
        minWidth: "100%",

        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    };

    return (
        <>
            <header>
                <Box {...wrapperProps}>
                    <HeaderTopContainer />
                    <HeaderMainContainer />
                </Box>
            </header>
            <HeaderNavigation />
        </>
    );
};

export default Header;
