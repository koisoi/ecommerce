"use client";

import { Box, BoxProps } from "@mui/material";
import FooterTitle from "./title";
import FooterLink from "./link";

const UpperMenuBox = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Верхнее меню</FooterTitle>
            <FooterLink href="#">Ecomm другой цвет</FooterLink>
            <FooterLink href="#">Основная тема</FooterLink>
            <FooterLink href="#">Light версия</FooterLink>
            <FooterLink href="#">Как пользоваться темой?</FooterLink>
            <FooterLink href="#">О компании</FooterLink>
        </Box>
    );
};

export default UpperMenuBox;
