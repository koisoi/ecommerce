import { Box, BoxProps } from "@mui/material";
import { BannerData } from "@/lib";
import { CSSProperties } from "react";

export const BannerTemplate = ({
    banner,
    height
}: {
    banner: BannerData;
    height?: string;
}) => {
    const bannerBoxProps: BoxProps = {
        component: "a",
        // @ts-ignore
        href: banner.url,
        width: "100%",

        display: "flex",
        justifyContent: "center"
    };

    const blockerProps: BoxProps = {
        position: "absolute",
        height: "100%",
        width: "100%",
        zIndex: 1
    };

    const iframeStyle: CSSProperties = {
        width: banner.width,
        height
    };

    return (
        <Box {...bannerBoxProps}>
            <Box {...blockerProps} />
            <iframe
                src={banner.src}
                style={iframeStyle}
                // width={banner.width}
                // height={height}
            />
        </Box>
    );
};
