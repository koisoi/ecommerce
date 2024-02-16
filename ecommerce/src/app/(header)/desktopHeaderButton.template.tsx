"use client";

import {
    Box,
    BoxProps,
    IconButton,
    IconButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";

export type DesktopHeaderButtonProps = {
    children?: ReactNode;
    upperText: string;
    lowerText: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const DesktopHeaderButton = ({
    children,
    upperText,
    lowerText,
    onClick
}: DesktopHeaderButtonProps) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        minWidth: "max-content",
        height: "min-content"
    };

    const textWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column"
    };

    const iconWrapperProps: IconButtonProps = {
        sx: {
            color: "text.disabled",
            marginRight: "10px",
            height: "24px",
            width: "24px",

            ":hover": {
                color: "primary.main",
                cursor: "pointer"
            }
        },

        onClick
    };

    const upperTextProps: TypographyProps = {
        color: "text.disabled",
        fontSize: "12px",
        lineHeight: "1.2"
    };

    const lowerTextProps: TypographyProps = {
        fontSize: "15px",
        lineHeight: "1.2"
    };

    return (
        <Box {...wrapperProps}>
            <IconButton {...iconWrapperProps}>{children}</IconButton>
            <Box {...textWrapperProps}>
                <Typography {...upperTextProps}>{upperText}</Typography>
                <Typography {...lowerTextProps}>{lowerText}</Typography>
            </Box>
        </Box>
    );
};

export default DesktopHeaderButton;
