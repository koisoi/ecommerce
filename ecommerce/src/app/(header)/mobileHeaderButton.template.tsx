import {
    AccountCircle,
    Favorite,
    Menu,
    ShoppingCart
} from "@mui/icons-material";
import {
    Box,
    BoxProps,
    IconButton,
    IconButtonProps,
    SvgIconProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { ReactNode } from "react";

const MobileHeaderButton = ({
    variant,
    amount
}: {
    variant: "menu" | "favorite" | "shoppingCart" | "accountCircle";
    amount?: number;
}) => {
    const iconButtonsProps: IconButtonProps = {
        disableRipple: true,
        disableFocusRipple: true,

        sx: {
            fontSize: "inherit",
            color: "inherit",

            position: "relative"
        }
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

        color: "white",
        sx: {
            backgroundColor: "secondary.main"
        }
    };

    const textProps: TypographyProps = {
        fontSize: "0.8rem"
    };

    let child: ReactNode | null = null;

    switch (variant) {
        case "accountCircle":
            child = <AccountCircle {...iconsProps} />;
            break;

        case "favorite":
            child = <Favorite {...iconsProps} />;
            break;

        case "shoppingCart":
            child = <ShoppingCart {...iconsProps} />;
            break;

        case "menu":
            child = <Menu {...iconsProps} />;
            break;

        default:
            break;
    }

    if (child === null) return <></>;

    return (
        <IconButton {...iconButtonsProps}>
            {child}
            {amount && (
                <Box {...amountBadgeProps}>
                    <Typography {...textProps}>{amount}</Typography>
                </Box>
            )}
        </IconButton>
    );
};

export default MobileHeaderButton;
