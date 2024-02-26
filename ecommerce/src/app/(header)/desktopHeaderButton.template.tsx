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
    onClick?: MouseEventHandler<HTMLButtonElement>;
    id?: string;
};

const DesktopHeaderButton = ({
    children,
    text: upperText,
    onClick,
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

    const upperTextProps: TypographyProps = {
        fontSize: "0.9rem",
        lineHeight: "1.2",
        sx: {
            textTransform: "none"
        }
    };

    return (
        <Button {...wrapperProps} id={id}>
            {children}
            <Box {...textWrapperProps}>
                <Typography {...upperTextProps}>{upperText}</Typography>
            </Box>
        </Button>
    );
};

export default DesktopHeaderButton;
