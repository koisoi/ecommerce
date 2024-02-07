import { ShoppingCart } from "@mui/icons-material";
import {
    Button,
    ButtonProps,
    SvgIconProps,
    Typography,
    TypographyProps
} from "@mui/material";

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
    fontSize: "0.82rem"
};

export const InstantBuyButton = ({
    props,
    textProps
}: {
    props?: ButtonProps;
    textProps?: TypographyProps;
}) => {
    const instantBuyButtonProps: ButtonProps = {
        ...buttonProps,
        ...props,
        color: "secondary",

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

export const ShoppingCartButton = ({
    props,
    textProps
}: {
    props?: ButtonProps;
    textProps?: TypographyProps;
}) => {
    const shoppingCartButtonProps: ButtonProps = {
        ...buttonProps,
        ...props,
        color: "primary",

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
