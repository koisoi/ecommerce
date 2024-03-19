"use client";

import { CartState, useAppSelector } from "@/lib";
import { ShoppingCart } from "@mui/icons-material";
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode } from "react";

export type DesktopHeaderButtonProps = {
    id?: string;
};

const DesktopCartHeaderButton = () => {
    const { items } = useAppSelector(CartState);

    // const
    const router = useRouter();
    const amount = items.reduce<number>(
        (prev, _, i, arr) => prev + arr[i].amount,
        0
    );

    // handlers
    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    // props
    const wrapperProps: ButtonProps = {
        sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            minWidth: "max-content",
            height: "min-content"
        },

        onClick: handleCartClick
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

export default DesktopCartHeaderButton;