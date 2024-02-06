"use client";

import { NextLinkProps } from "@/lib/types";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import Link from "next/link";

const Breadcrumbs = () => {
    // TODO: переделать под переиспользуемый с usePath()

    const wrapperProps: BoxProps = {
        fontSize: "15px"
    };

    const linkProps: Partial<NextLinkProps> = {
        style: {
            textDecoration: "none"
        }
    };

    const textProps: TypographyProps = {
        display: "inline",

        sx: {
            textDecoration: "none"
        }
    };

    const navTextProps: TypographyProps = {
        ...textProps,
        color: "primary.main",

        sx: {
            ...textProps.sx,

            ":hover": {
                color: "primary.dark"
            }
        }
    };

    const locationTextProps: TypographyProps = {
        ...textProps,
        color: "text.disabled"
    };

    return (
        <Box {...wrapperProps}>
            <Link href="#" {...linkProps}>
                <Typography {...navTextProps}>Главная</Typography>
            </Link>{" "}
            / <Typography {...locationTextProps}>Электроника</Typography>
        </Box>
    );
};

export default Breadcrumbs;
