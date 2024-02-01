"use client";

import { Box, LinkProps, Link as MUILink, Typography } from "@mui/material";
import Link from "next/link";

const CatalogNavigation = () => {
    // TODO: переделать под переиспользуемый с usePath()

    const navLinkProps: LinkProps = {
        color: "primary.main",

        sx: {
            textDecoration: "none",

            ":hover": {
                color: "primary.dark",
            },
        },
    };

    const locationLinkProps: LinkProps = {
        color: "text.disabled",

        sx: {
            textDecoration: "none",
        },
    };

    return (
        <Box>
            <Typography fontSize="15px">
                <Link href="#" style={{ textDecoration: "none" }}>
                    <MUILink {...navLinkProps}>Главная</MUILink>
                </Link>{" "}
                /{" "}
                <Link href="#" style={{ textDecoration: "none" }}>
                    <MUILink {...locationLinkProps}>Электроника</MUILink>
                </Link>
            </Typography>
        </Box>
    );
};

export default CatalogNavigation;
