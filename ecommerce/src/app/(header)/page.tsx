import { Box, BoxProps } from "@mui/material";
import HeaderTopContainer from "./topContainer";
import HeaderMainContainer from "./mainContainer";

const Header = () => {
    const wrapperProps: BoxProps = {
        boxSizing: "border-box",
        minWidth: "100%",

        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
    };

    return (
        <Box {...wrapperProps}>
            <HeaderTopContainer />
            <HeaderMainContainer />
        </Box>
    );
};

export default Header;
