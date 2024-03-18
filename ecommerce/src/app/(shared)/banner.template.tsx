import { Box, BoxProps } from "@mui/material";
import { BannerData } from "@/lib";

const Banner = ({
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

    return (
        <Box {...bannerBoxProps}>
            <Box {...blockerProps} />
            <iframe
                src={banner.src}
                width={banner.width}
                // height={banner.height}
                height={height}
            />
        </Box>
    );
};

export default Banner;
