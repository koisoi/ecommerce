import { Box, BoxProps, Tab, TabProps, Tabs, TabsProps } from "@mui/material";
import { Map } from "@mui/icons-material";
import { CSSProperties, SyntheticEvent } from "react";
import { useMediaQueries } from "@/lib";

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
    const screen = useMediaQueries();

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

    const tabsProps: TabsProps = {
        orientation: screen.sm ? "vertical" : "horizontal",
        variant: "scrollable",
        value: false,
        onChange: onTabChange
    };

    const tabProps: TabProps = {
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
            backgroundColor: "background.default"
        }
    });

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
                                <img alt={alt} src={image} width="100%" />
                            </Box>
                        }
                        value={i}
                    />
                ))}
            </Tabs>
        </Box>
    );
};

export default ImageSwitcherTemplate;
