"use client";

import { NextLinkProps } from "@/lib/types";
import { Menu, ShoppingCart } from "@mui/icons-material";
import { Box, BoxProps, Button, ButtonProps } from "@mui/material";
import Link from "next/link";
import SlidingCartButtonTemplate from "./slidingCartButton.template";
import SlidingCartButton from "./slidingCartButton";

const HeaderDesktopNavigation = () => {
    const innerWrapperProps: BoxProps = {
        position: "relative",

        width: "100%",
        maxWidth: "1320px",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px"
    };

    const catalogButtonProps: ButtonProps = {
        variant: "contained",
        color: "secondary",

        sx: {
            minHeight: "100%",
            borderRadius: "0px",
            boxShadow: "none",
            color: "white",
            fontWeight: "bold",
            paddingX: "30px",
            fontSize: "16px",

            ":hover": {
                boxShadow: "none",
                backgroundColor: "secondary.main"
            }
        }
    };

    const linksProps: NextLinkProps = {
        href: "#",

        style: {
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase"
        }
    };

    return (
        <Box {...innerWrapperProps}>
            <Button {...catalogButtonProps}>
                <Menu sx={{ marginRight: "6px" }} /> Каталог
            </Button>
            <Link {...linksProps}>ECOMM другой цвет</Link>
            <Link {...linksProps}>Основная тема</Link>
            <Link {...linksProps}>Light версия</Link>
            <SlidingCartButton />
        </Box>
    );
};

export default HeaderDesktopNavigation;
