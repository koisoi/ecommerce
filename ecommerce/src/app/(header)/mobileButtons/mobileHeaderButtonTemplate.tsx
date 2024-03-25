import { Menu, ShoppingCart } from "@mui/icons-material";
import {
    Box,
    BoxProps,
    IconButton,
    IconButtonProps,
    SvgIconProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { MouseEventHandler } from "react";

const MobileHeaderButtonTemplate = ({
    variant,
    amount,
    onClick,
    id
}: {
    variant: "menu" | "shoppingCart";
    amount?: number;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    id?: string;
}) => {
    const iconButtonsProps: IconButtonProps = {
        disableRipple: true,
        disableFocusRipple: true,

        sx: {
            fontSize: "inherit",
            color: "inherit",

            position: "relative",

            zIndex: 12
        },

        onClick
    };

    const iconsProps: SvgIconProps = {
        fontSize: "inherit"
    };

    const amountBadgeProps: BoxProps = {
        position: "absolute",
        bottom: "10%",
        right: "10%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: "25%",
        height: "25%",
        padding: "3px",

        borderRadius: "100%",

        color: "secondary.contrastText",
        sx: {
            backgroundColor: "secondary.main"
        }
    };

    const textProps: TypographyProps = {
        fontSize: "0.8rem"
    };

    return (
        <IconButton {...iconButtonsProps} id={id}>
            {variant === "shoppingCart" ? (
                <ShoppingCart {...iconsProps} />
            ) : (
                <Menu {...iconsProps} />
            )}
            {!!amount && (
                <Box {...amountBadgeProps}>
                    <Typography {...textProps}>{amount}</Typography>
                </Box>
            )}
        </IconButton>
    );
};

export default MobileHeaderButtonTemplate;
