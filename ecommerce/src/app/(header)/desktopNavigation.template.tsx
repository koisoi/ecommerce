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
import SlidingCartButton from "./slidingCartButton/slidingCartButton";
import { CategoryListItem, NextLinkProps, useMediaQueries } from "@/lib";

const HeaderDesktopNavigation = ({
    categories
}: {
    categories: CategoryListItem[];
}) => {
    const screen = useMediaQueries();

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

        disableFocusRipple: true,
        disableRipple: true,

        sx: {
            height: "100%",
            maxHeight: "50px",
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
                <Link {...linksProps} href="/catalog">
                    Каталог
                </Link>
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
                                    query: { category: category.path }
                                }}
                            >
                                {category.title}
                            </Link>
                        }
                    />
                ))}
            </Tabs>
            <SlidingCartButton />
        </Box>
    );
};

export default HeaderDesktopNavigation;
