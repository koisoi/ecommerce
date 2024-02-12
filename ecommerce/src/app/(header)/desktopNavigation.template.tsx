"use client";

import { Menu } from "@mui/icons-material";
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Tab,
    TabProps,
    Tabs,
    TabsProps
} from "@mui/material";
import Link from "next/link";
import SlidingCartButton from "./slidingCartButton";
import { NextLinkProps } from "@/lib";

const HeaderDesktopNavigation = ({
    categories
}: {
    categories: { title: string; alias: string }[];
}) => {
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

    const tabsProps: TabsProps = {
        variant: "scrollable",

        value: false,

        sx: {
            color: "white"
        }
    };

    const tabProps: TabProps = {
        sx: {
            textTransform: "none"
        }
    };

    return (
        <Box {...innerWrapperProps}>
            <Button {...catalogButtonProps}>
                <Menu sx={{ marginRight: "6px" }} /> Каталог
            </Button>
            <Tabs {...tabsProps}>
                {categories.map((category, i) => (
                    <Tab
                        {...tabProps}
                        key={i}
                        label={
                            <Link
                                {...linksProps}
                                href={{
                                    pathname: "/catalog",
                                    query: { category: category.alias }
                                }}
                            >
                                {category.title}
                            </Link>
                        }
                    />
                ))}
            </Tabs>
            {/* <Link {...linksProps}>ECOMM другой цвет</Link>
            <Link {...linksProps}>Основная тема</Link>
            <Link {...linksProps}>Light версия</Link> */}
            <SlidingCartButton />
        </Box>
    );
};

export default HeaderDesktopNavigation;
