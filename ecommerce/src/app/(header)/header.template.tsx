"use client";

import { Box, BoxProps } from "@mui/material";
import HeaderTopContainer from "./topContainer.template";
import HeaderMainContainer from "./mainContainer.template";
import HeaderNavigation from "./navigation.template";
import { useMediaQueries } from "../(shared)/functions/hooks";

const Header = () => {
    const screen = useMediaQueries();

    const wrapperProps: BoxProps = {
        boxSizing: "border-box",
        minWidth: "100%",

        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    };

    return (
        <>
            {!screen.md && <HeaderNavigation mobile={true} />}
            <header>
                <Box {...wrapperProps}>
                    <HeaderTopContainer />
                    <HeaderMainContainer />
                </Box>
            </header>
            {screen.md && <HeaderNavigation mobile={false} />}
        </>
    );
};

export default Header;
