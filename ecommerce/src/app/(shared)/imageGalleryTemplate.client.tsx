"use client";

import { Box, BoxProps, Tab, TabProps, Tabs, TabsProps } from "@mui/material";
import { Map } from "@mui/icons-material";
import { SyntheticEvent } from "react";
import { useMediaQueries } from "@/lib";

export type ImageGalleryProps = {
    onTabChange: (event: SyntheticEvent<Element, Event>, value: any) => void;
    mapElement?: string;
    imageLinks: string[];
    selectedTab: number | "map";
    alt: string;
};

const ImageGalleryTemplate = ({
    onTabChange,
    mapElement,
    imageLinks,
    selectedTab,
    alt
}: ImageGalleryProps) => {
    const screen = useMediaQueries();

    const tabsProps: TabsProps = {
        orientation: screen.sm ? "vertical" : "horizontal",
        variant: "scrollable",
        value: false,
        onChange: onTabChange
    };

    const tabProps: TabProps = {
        component: "div",
        sx: {
            textTransform: "none"
        }
    };

    const tabBoxProps = (selected: boolean): BoxProps => ({
        width: "150px",
        height: "100px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        border: "1px solid",
        borderColor: selected ? "primary.main" : "divider",

        sx: {
            backgroundColor: "background.default",
            overflow: "hidden"
        }
    });

    return (
        <Tabs {...tabsProps}>
            {!!mapElement && (
                <Tab
                    {...tabProps}
                    label={
                        <Box {...tabBoxProps(selectedTab === "map")}>
                            <Map sx={{ marginRight: "5px" }} /> Карта
                        </Box>
                    }
                    value="map"
                />
            )}
            {imageLinks.map((image, i) => (
                <Tab
                    {...tabProps}
                    key={i}
                    label={
                        <Box {...tabBoxProps(selectedTab === i)}>
                            <img
                                alt={alt}
                                src={image}
                                style={{ width: "100%" }}
                            />
                        </Box>
                    }
                    value={i}
                />
            ))}
        </Tabs>
    );
};

export default ImageGalleryTemplate;
