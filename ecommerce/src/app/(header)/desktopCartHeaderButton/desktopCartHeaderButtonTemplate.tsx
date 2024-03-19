"use client";

import { ShoppingCart } from "@mui/icons-material";
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { MouseEventHandler } from "react";

export type DesktopHeaderButtonProps = {
    id?: string;
};

const DesktopCartHeaderButtonTemplate = ({
    onCartClick,
    amount
}: {
    onCartClick: MouseEventHandler<HTMLButtonElement>;
    amount: number;
}) => {
    const wrapperProps: ButtonProps = {
        sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            minWidth: "max-content",
            height: "min-content"
        },

        onClick: onCartClick
    };

    const textWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

        marginLeft: "5px"
    };

    const upperTextProps: TypographyProps = {
        fontSize: "1rem",
        lineHeight: "1.2",
        sx: {
            textTransform: "none"
        }
    };

    const lowerTextProps: TypographyProps = {
        fontSize: "0.9rem",
        textTransform: "none"
    };

    return (
        <Button {...wrapperProps}>
            <ShoppingCart fontSize="large" id="desktop-header-button" />
            <Box {...textWrapperProps}>
                <Typography {...upperTextProps}>Корзина</Typography>
                <Typography {...lowerTextProps}>Товаров: {amount}</Typography>
            </Box>
        </Button>
    );
};

export default DesktopCartHeaderButtonTemplate;
