"use client";

import { Box, BoxProps } from "@mui/material";
import FooterTitle from "./title.template";
import AppLink from "../(shared)/text/appLink.template";

const UpperMenuBox = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px",

        fontSize: "0.95rem"
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Верхнее меню</FooterTitle>
            <AppLink href="/delivery" footer>
                Доставка и оплата
            </AppLink>
            <AppLink href="/warranty" footer>
                Гарантия и возврат
            </AppLink>
            <AppLink href="/contacts" footer>
                Контактная информация
            </AppLink>
        </Box>
    );
};

export default UpperMenuBox;
