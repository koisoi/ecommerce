"use client";

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
import SlidingCartButton from "../slidingCartButton/slidingCartButton";
import { CategoryListItem } from "@/lib";
import { CSSProperties } from "react";

const HeaderDesktopNavigationTemplate = ({
    categories,
    onTabClick,
    catalogPath
}: {
    categories: CategoryListItem[];
    onTabClick: (path: string) => void;
    catalogPath: string | null;
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

    const linkStyle: CSSProperties = {
        height: "100%"
    };

    const tabsProps: TabsProps = {
        variant: "scrollable",

        value: false,

        sx: {
            color: "white"
        }
    };

    const tabProps = (path: string): TabProps => ({
        sx: {
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",

            transition: "0.2s",
            height: "100%",

            ...(path === catalogPath && {
                backgroundColor: "secondary.main"
            })
        }
    });

    return (
        <Box {...innerWrapperProps}>
            <Link style={linkStyle} href="/catalog">
                <Button {...catalogButtonProps}>Каталог</Button>
            </Link>
            <Tabs {...tabsProps}>
                {categories.map((category, i) => (
                    <Tab
                        {...tabProps(category.path)}
                        key={i}
                        onClick={() => onTabClick(category.path)}
                        label={category.title}
                    />
                ))}
            </Tabs>
            <SlidingCartButton />
        </Box>
    );
};

export default HeaderDesktopNavigationTemplate;
