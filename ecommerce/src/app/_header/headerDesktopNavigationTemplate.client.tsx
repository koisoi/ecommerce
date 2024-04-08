"use client";

import { Box, BoxProps, Tab, TabProps, Tabs, TabsProps } from "@mui/material";
import Link from "next/link";
import { PageData } from "@/lib";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const DynamicSlidingCartButton = dynamic(
    () => import("@/app/_header/slidingCartButton/slidingCartButton.client"),
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

    const tabsProps: TabsProps = {
        variant: "scrollable",

        value: false
    };

    const tabProps = (path: string): TabProps => ({
        component: Link,
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
