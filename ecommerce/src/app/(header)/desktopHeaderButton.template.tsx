"use client";

import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    IconButton,
    IconButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { MouseEventHandler, ReactNode, RefObject } from "react";

export type DesktopHeaderButtonProps = {
    children?: ReactNode;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    ref?: RefObject<HTMLButtonElement>;
    id?: string;
};

const DesktopHeaderButton = ({
    children,
    text: upperText,
    onClick,
    ref,
    id
}: DesktopHeaderButtonProps) => {
    const wrapperProps: ButtonProps = {
        sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            minWidth: "max-content",
            height: "min-content"
        },

        onClick
    };

    const textWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",

        marginLeft: "5px"
    };

    // const iconWrapperProps: IconButtonProps = {
    //     disableFocusRipple: true,
    //     disableRipple: true,

    //     sx: {
    //         color: "text.disabled",
    //         marginRight: "10px",
    //         height: "24px",
    //         width: "24px",
    //         transition: "0.2s",

    //         ":hover": {
    //             color: "primary.main",
    //             cursor: "pointer"
    //         }
    //     },

    //     onClick
    // };

    const upperTextProps: TypographyProps = {
        fontSize: "0.9rem",
        lineHeight: "1.2",
        sx: {
            textTransform: "none"
        }
    };

    return (
        <Button {...wrapperProps} ref={ref} id={id}>
            {children}
            <Box {...textWrapperProps}>
                <Typography {...upperTextProps}>{upperText}</Typography>
            </Box>
        </Button>
    );
};

export default DesktopHeaderButton;
