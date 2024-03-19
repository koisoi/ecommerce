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
            fontSize: "1rem",
            textTransform: "capitalize",

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
        component: "a",
        // @ts-ignore
        href: path,

        value: path,

        sx: {
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            textTransform: "none",

            transition: "0.2s",
            height: "100%",

            ...((path === pathname || path + "/" === pathname) && {
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
