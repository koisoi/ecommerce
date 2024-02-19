"use client";

import FastOrderForm from "@/app/(fastOrderForm)/fastOrderForm";
import { CategoryItem } from "@/lib";
import { ShoppingCart } from "@mui/icons-material";
import {
    Button,
    ButtonProps,
    SvgIconProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { MouseEventHandler } from "react";

type BuyButtonProps = {
    props?: ButtonProps;
    textProps?: TypographyProps;
};

const buttonProps: ButtonProps = {
    size: "small",
    variant: "outlined",

    disableRipple: true,

    sx: {
        textTransform: "none",
        fontFamily: "inherit",

        boxShadow: "none"
    }
};

const buttonTextProps: TypographyProps = {
    fontSize: "0.82rem",
    noWrap: true
};

export const InstantBuyButtonTemplate = ({
    props,
    textProps,
    onInstantBuyClick,
    item
}: BuyButtonProps & {
    onInstantBuyClick: MouseEventHandler<HTMLButtonElement>;
    item?: CategoryItem;
}) => {
    const instantBuyButtonProps: ButtonProps = {
        ...buttonProps,
        color: "secondary",
        onClick: onInstantBuyClick,

        ...props,

        sx: {
            ...buttonProps.sx,
            color: props?.variant === "contained" ? "white" : undefined,

            ":hover": {
                backgroundColor:
                    props?.variant === "contained"
                        ? "secondary.dark"
                        : "secondary.main",
                color: "white",

                boxShadow: "none"
            },

            ...props?.sx
        }
    };

    return (
        <>
            <FastOrderForm item={item} />

            <Button {...instantBuyButtonProps}>
                <Typography {...buttonTextProps} {...textProps}>
                    Быстрый заказ
                </Typography>
            </Button>
        </>
    );
};

export const ShoppingCartButtonTemplate = ({
    props,
    textProps,
    onAddToCartClick: onClick,
    translateTo
}: BuyButtonProps & {
    onAddToCartClick: MouseEventHandler<HTMLButtonElement>;
    translateTo?: {
        x: number;
        y: number;
    };
}) => {
    const shoppingCartButtonProps: ButtonProps = {
        ...buttonProps,
        color: "primary",

        onClick,

        ...props,

        sx: {
            ...buttonProps.sx,

            position: "relative",

            ":hover": {
                backgroundColor:
                    props?.variant === "contained"
                        ? "primary.dark"
                        : "primary.main",
                color: "white",

                boxShadow: "none"
            },

            ...props?.sx
        }
    };

    const shoppingCartIconProps: SvgIconProps = {
        fontSize: "inherit",
        sx: {
            fontSize: "0.9rem"
        }
    };

    const cartButtonTextProps: TypographyProps = {
        ...buttonTextProps,
        paddingRight: "4px",
        ...textProps
    };

    const animationShoppingIconProps: SvgIconProps = {
        color: "primary",

        sx: {
            "@keyframes fly": {
                "0%": {
                    transform: "translate(0) scale(1)"
                },
                "100%": {
                    transform: `translate(${translateTo?.x || 0}px, ${
                        translateTo?.y || -1000
                    }px) scale(0)`
                }
            },

            zIndex: 100,
            position: "absolute",
            display: translateTo ? "block" : "none",
            ...(translateTo && {
                animationName: "fly",
                animationDuration: "1s",
                animationIterationCount: 1,
                animationTimingFunction: "ease",
                animationFillMode: "forwards"
            })
        }
    };

    return (
        <Button {...shoppingCartButtonProps}>
            <Typography {...cartButtonTextProps}>В корзину</Typography>
            <ShoppingCart {...animationShoppingIconProps} />
            <ShoppingCart {...shoppingCartIconProps} />
        </Button>
    );
};
