"use client";

import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { MouseEventHandler, ReactNode, RefObject } from "react";

export type DesktopHeaderButtonProps = {
    children?: ReactNode;
    text: string;
    lowerText?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    id?: string;
};

const DesktopHeaderButton = ({
    children,
    text: upperText,
    onClick,
    id,
    lowerText
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
        alignItems: "flex-start",

        marginLeft: "5px"
    };

    const upperTextProps: TypographyProps = {
        fontSize: "0.9rem",
        lineHeight: "1.2",
        sx: {
            textTransform: "none"
        }
    };

    const lowerTextProps: TypographyProps = {
        fontSize: "0.7rem",
        textTransform: "none"
    };

    return (
        <Button {...wrapperProps} id={id}>
            {children}
            <Box {...textWrapperProps}>
                <Typography {...upperTextProps}>{upperText}</Typography>
                {lowerText && (
                    <Typography {...lowerTextProps}>{lowerText}</Typography>
                )}
            </Box>
        </Button>
    );
};

export default DesktopHeaderButton;
