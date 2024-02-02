"use client";

import { NextLinkProps } from "@/types";
import { Box, Typography, TypographyProps } from "@mui/material";
import Link from "next/link";

const CatalogNavigation = () => {
    // TODO: переделать под переиспользуемый с usePath()

    const linkProps: Partial<NextLinkProps> = {
        style: {
            textDecoration: "none"
        }
    };

    const locationLinkProps: NextLinkProps = {
        ...linkProps,
        href: "#"
    };

    const navTextProps: TypographyProps = {
        color: "primary.main",

        sx: {
            textDecoration: "none",

            ":hover": {
                color: "primary.dark"
            }
        }
    };

    const locationTextProps: TypographyProps = {
        color: "text.disabled",

        sx: {
            textDecoration: "none"
        }
    };

    return (
        <Box>
            <Typography fontSize="15px">
                <Link href="#" {...linkProps}>
                    <Typography {...navTextProps}>Главная</Typography>
                </Link>{" "}
                /{" "}
                <Link {...locationLinkProps}>
                    <Typography {...locationTextProps}>Электроника</Typography>
                </Link>
            </Typography>
        </Box>
    );
};

export default CatalogNavigation;
