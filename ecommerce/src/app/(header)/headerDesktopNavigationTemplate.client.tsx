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
import { PageData } from "@/lib";
import { CSSProperties } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const DynamicSlidingCartButton = dynamic(
    () => import("@/app/(header)/slidingCartButton/slidingCartButton.client"),
    {
        ssr: false
    }
);

export const HeaderDesktopNavigationTemplate = ({
    categories
}: {
    categories: PageData[];
}) => {
    const pathname = usePathname();

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
        component: "div",
        variant: "contained",
        color: "secondary",
        // @ts-ignore
        tabIndex: null,

        disableFocusRipple: true,
        disableRipple: true,

        sx: {
            height: "100%",
            maxHeight: "50px",
            borderRadius: "0px",
            boxShadow: "none",
            color: "primary.contrastText",
            fontWeight: "bold",
            paddingX: "30px",
            fontSize: "1rem",
            textTransform: "capitalize",
            backgroundColor: "primary.light",

            ":hover": {
                boxShadow: "none",
                backgroundColor: "primary.light"
            }
        }
    };

    const catalogBoxProps: BoxProps = {
        sx: {
            height: "100%",
            maxHeight: "50px",
            borderRadius: "0px",
            boxShadow: "none",
            color: "primary.contrastText",
            fontWeight: "bold",
            paddingX: "30px",
            fontSize: "1rem",
            textTransform: "capitalize",
            backgroundColor: "primary.light",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",

            ":hover": {
                boxShadow: "none",
                backgroundColor: "primary.light"
            }
        }
    };

    const linkStyle: CSSProperties = {
        height: "100%"
    };

    const tabsProps: TabsProps = {
        variant: "scrollable",

        value: false
    };

    const tabProps = (path: string): TabProps => ({
        component: "a",
        // @ts-ignore
        href: path,

        value: path,

        sx: {
            textDecoration: "none",
            color: "primary.contrastText",
            fontWeight: "bold",
            textTransform: "none",

            transition: "0.2s",
            height: "100%",

            ...((path === pathname || path + "/" === pathname) && {
                backgroundColor: "primary.light"
            })
        }
    });

    return (
        <Box {...innerWrapperProps}>
            <Link style={linkStyle} href="/catalog">
                <Box {...catalogBoxProps}>Каталог</Box>
            </Link>
            <Tabs {...tabsProps}>
                {categories.map((category, i) => (
                    <Tab
                        {...tabProps(category.url)}
                        key={i}
                        label={category.title}
                    />
                ))}
            </Tabs>
            <DynamicSlidingCartButton />
        </Box>
    );
};
