"use client";

import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";

const HeaderButton = ({
    icon,
    upperText,
    lowerText
}: {
    icon: JSX.Element /**unknown? */;
    upperText: string;
    lowerText: string;
}) => {
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

    const iconWrapperProps: BoxProps = {
        marginRight: "10px",
        height: "24px",
        color: "text.disabled",

        sx: {
            ":hover": {
                color: "primary.main",
                cursor: "pointer"
            }
        }
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
            <Box {...iconWrapperProps}>{icon}</Box>
            <Box {...textWrapperProps}>
                <Typography {...upperTextProps}>{upperText}</Typography>
                <Typography {...lowerTextProps}>{lowerText}</Typography>
            </Box>
        </Box>
    );
};

export default HeaderButton;
