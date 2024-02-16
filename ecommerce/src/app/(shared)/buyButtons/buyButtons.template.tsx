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
    onClick: MouseEventHandler<HTMLButtonElement>;
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
    textProps
}: BuyButtonProps) => {
    const instantBuyButtonProps: ButtonProps = {
        ...buttonProps,
        color: "secondary",

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
        <Button {...instantBuyButtonProps}>
            <Typography {...buttonTextProps} {...textProps}>
                Быстрый заказ
            </Typography>
        </Button>
    );
};

export const ShoppingCartButtonTemplate = ({
    props,
    textProps,
    onClick
}: BuyButtonProps) => {
    const shoppingCartButtonProps: ButtonProps = {
        ...buttonProps,
        color: "primary",

        onClick,

        ...props,

        sx: {
            ...buttonProps.sx,

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

    return (
        <Button {...shoppingCartButtonProps}>
            <Typography {...cartButtonTextProps}>В корзину</Typography>
            <ShoppingCart {...shoppingCartIconProps} />
        </Button>
    );
};
