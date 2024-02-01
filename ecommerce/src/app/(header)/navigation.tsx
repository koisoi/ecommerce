import { Menu } from "@mui/icons-material";
import { Box, BoxProps, Button, ButtonProps, Typography } from "@mui/material";
import Link, { LinkProps } from "next/link";
import React from "react";

const HeaderNavigation = () => {
    const wrapperProps: BoxProps = {
        display: { xs: "none", md: "flex" },
        justifyContent: "center",

        width: "100vw",
        height: "52.5px",

        sx: {
            backgroundColor: "primary.main",
        },
    };

    const innerWrapperProps: BoxProps = {
        width: "100%",
        maxWidth: "1320px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
    };

    const catalogButtonProps: ButtonProps = {
        variant: "contained",
        color: "secondary",

        sx: {
            minHeight: "52.5px",
            borderRadius: "0px",
            boxShadow: "none",
            color: "white",
            fontWeight: "bold",
            paddingX: "30px",

            ":hover": {
                boxShadow: "none",
                backgroundColor: "secondary.main",
            },
        },
    };

    const linksProps: LinkProps & { style: React.CSSProperties } = {
        href: "#",

        style: {
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",
        },
    };

    return (
        <nav style={{ position: "sticky", top: "-1px" }}>
            <Box {...wrapperProps}>
                <Box {...innerWrapperProps}>
                    <Button {...catalogButtonProps}>
                        <Menu sx={{ marginRight: "6px" }} /> Каталог
                    </Button>
                    <Link {...linksProps}>ECOMM другой цвет</Link>
                    <Link {...linksProps}>Основная тема</Link>
                    <Link {...linksProps}>Light версия</Link>
                </Box>
            </Box>
        </nav>
    );
};

export default HeaderNavigation;
