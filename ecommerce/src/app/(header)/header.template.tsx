"use client";

import { Box, BoxProps } from "@mui/material";
import HeaderTopContainer from "./topContainer.template";
import HeaderNavigation from "./navigation.template";
import { useMediaQueries } from "../../lib/hooks";
import HeaderMainContainer from "./mainContainer/mainContainer";
import { CategoryListItem } from "@/lib";

const HeaderTemplate = ({ categories }: { categories: CategoryListItem[] }) => {
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
            {!screen.md && (
                <HeaderNavigation mobile={true} categories={categories} />
            )}
            <header>
                <Box {...wrapperProps}>
                    <HeaderTopContainer />
                    <HeaderMainContainer />
                </Box>
            </header>
            {screen.md && (
                <HeaderNavigation mobile={false} categories={categories} />
            )}
        </>
    );
};

export default HeaderTemplate;
