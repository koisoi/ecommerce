"use client";

import { SyntheticEvent, useState } from "react";
import ImageSwitcherTemplate from "./imageSwicther.template";
import { BoxProps } from "@mui/material";

const ImageSwitcher = ({
    mapElement,
    imageLinks,
    alt,
    wrapperProps
}: {
    mapElement?: string;
    imageLinks: string[];
    alt: string;
    wrapperProps?: BoxProps;
}) => {
    const [selectedTab, setSelectedTab] = useState<"map" | number>(
        mapElement ? "map" : 0
    );

    const handleTabChange = (
        _: SyntheticEvent<Element, Event>,
        value: any
    ): void => {
        setSelectedTab(value);
    };

    return (
        <ImageSwitcherTemplate
            mapElement={mapElement}
            imageLinks={imageLinks}
            alt={alt}
            selectedTab={selectedTab}
            wrapperProps={wrapperProps}
            onTabChange={handleTabChange}
        />
    );
};

export default ImageSwitcher;
