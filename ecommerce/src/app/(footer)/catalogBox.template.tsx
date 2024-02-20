"use client";

import { Box, BoxProps } from "@mui/material";
import FooterTitle from "./title.template";
import AppLink from "../(shared)/text/appLink.template";

const CatalogBox = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px",

        fontSize: "0.95rem"
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Каталог</FooterTitle>
            <AppLink href="#" footer>
                Электроника
            </AppLink>
            <AppLink href="#" footer>
                Мебель
            </AppLink>
            <AppLink href="#" footer>
                Одежда
            </AppLink>
            <AppLink href="#" footer>
                Правильное питание
            </AppLink>
        </Box>
    );
};

export default CatalogBox;
