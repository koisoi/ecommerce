import FastOrderForm from "@/app/(shared)/fastOrderForm/fastOrderForm.client";
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

        boxShadow: "none",
        margin: "0 !important"
    }
};

const buttonTextProps: TypographyProps = {
    fontSize: "1rem",
    noWrap: true,
    color: "inherit"
};

export const InstantBuyButtonTemplate = ({
    props,
    textProps,
    onInstantBuyClick,
    item,
    open,
    onClose
}: BuyButtonProps & {
    onInstantBuyClick: MouseEventHandler<HTMLButtonElement>;
    onClose: MouseEventHandler<HTMLButtonElement>;
    item: CategoryItem;
    open: boolean;
}) => {
    const instantBuyButtonProps: ButtonProps = {
        ...buttonProps,
        color: "primary",
        onClick: onInstantBuyClick,

        ...props,

        sx: {
            ...buttonProps.sx,

            color:
                props?.variant === "contained"
                    ? "primary.contrastText"
                    : "primary.main",
            ":hover": {
                backgroundColor:
                    props?.variant === "contained"
                        ? "primary.main"
                        : "primary.main",
                color: "accentAlt.contrastText",

                boxShadow: "none"
            },

            ...props?.sx
        }
    };

    return (
        <>
            {open && (
                <FastOrderForm item={item} open={open} onClose={onClose} />
            )}

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
        color: props?.variant === "contained" ? "accent" : "primary",

        onClick,

        ...props,

        sx: {
            ...buttonProps.sx,

            position: "relative",

            ":hover": {
                backgroundColor:
                    props?.variant === "contained"
                        ? "accent.main"
                        : "primary.main",
                color: props?.variant === "contained" ? "accent.contrastText" : "primary.contrastText",

                boxShadow: "none"
            },

            ...props?.sx
        }
    };

    const shoppingCartIconProps: SvgIconProps = {
        fontSize: "inherit"
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
                    }px) scale(0.5)`
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
        <Button {...shoppingCartButtonProps} id="shopping-cart-button">
            <Typography {...cartButtonTextProps}>В корзину</Typography>
            <ShoppingCart {...animationShoppingIconProps} />
            <ShoppingCart {...shoppingCartIconProps} />
        </Button>
    );
};
