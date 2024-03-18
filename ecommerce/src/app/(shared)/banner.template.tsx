import { Box, BoxProps } from "@mui/material";
import { BannerData } from "@/lib";

const Banner = ({ banner }: { banner: BannerData }) => {
    const bannerBoxProps: BoxProps = {
        component: "a",
        width: "100%",

        display: "flex",
        justifyContent: "center",

        sx: {
            cursor: "grab",
            href: banner.url
        }
    };

    return (
        <Box {...bannerBoxProps}>
            <iframe
                src={banner.src}
                width={banner.width}
                height={banner.height}
            />
        </Box>
    );
};

export default Banner;
