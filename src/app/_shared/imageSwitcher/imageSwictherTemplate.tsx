import { Box, BoxProps } from "@mui/material";
import { CSSProperties, SyntheticEvent } from "react";
import ImageGalleryTemplate, {
    ImageGalleryProps
} from "../imageGalleryTemplate.client";

const ImageSwitcherTemplate = ({
    mapElement,
    imageLinks,
    selectedTab,
    alt,
    maxHeight,
    wrapperProps,
    onTabChange
}: {
    mapElement?: string;
    imageLinks: string[];
    selectedTab: number | "map";
    alt: string;
    maxHeight?: string;
    wrapperProps?: BoxProps;
    onTabChange: (event: SyntheticEvent<Element, Event>, value: any) => void;
}) => {
    const initialWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",

        maxHeight: { xs: undefined, sm: maxHeight || "400px" },
        ...wrapperProps
    };

    const mainBoxProps: BoxProps = {
        flexGrow: 1
    };

    const mapBoxProps: BoxProps = {
        dangerouslySetInnerHTML: mapElement
            ? {
                  __html: mapElement
              }
            : undefined,

        position: "relative",
        overflow: "hidden"
    };

    const imgBoxProps: BoxProps = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: { xs: undefined, sm: maxHeight || "400px" }
    };

    const imgStyle: CSSProperties = {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain"
    };

    const imageGalleryProps: ImageGalleryProps = {
        onTabChange,
        mapElement,
        imageLinks,
        selectedTab,
        alt
    };

    return (
        <Box {...initialWrapperProps}>
            <Box {...mainBoxProps}>
                {mapElement && selectedTab === "map" && (
                    <Box {...mapBoxProps}></Box>
                )}
                {selectedTab != "map" && (
                    <Box {...imgBoxProps}>
                        <img
                            src={imageLinks[selectedTab]}
                            alt={alt}
                            style={imgStyle}
                        />
                    </Box>
                )}
            </Box>
            <ImageGalleryTemplate {...imageGalleryProps} />
        </Box>
    );
};

export default ImageSwitcherTemplate;
