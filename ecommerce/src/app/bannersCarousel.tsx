"use client";

import Carousel from "react-material-ui-carousel";
import {
    CarouselNavProps,
    CarouselProps
} from "react-material-ui-carousel/dist/components/types";
import { BannerData, useThemeColors } from "@/lib";
import Banner from "@/app/(shared)/banner.template";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Box, BoxProps } from "@mui/material";

const BannersCarousel = ({ banners }: { banners: BannerData[] }) => {
    const pathname = usePathname();
    const colors = useThemeColors();

    // state
    const [navOpacity, setNavOpacity] = useState<number>(0);

    // props
    const wrapperProps: BoxProps = {
        onMouseEnter: () => {
            setNavOpacity(1);
        },

        onMouseLeave: () => {
            setNavOpacity(0);
        }
    };

    const indicatorContainerProps: CarouselNavProps = {
        style: {
            zIndex: 1,
            marginTop: "-30px",
            position: "relative"
        }
    };

    const indicatorIconButtonProps: CarouselNavProps = {
        style: {
            color: colors.textDisabled
        }
    };

    const navButtonsProps: CarouselNavProps = {
        style: {
            opacity: Number(navOpacity)
        }
    };

    const carouselProps: CarouselProps = {
        animation: "slide",
        autoPlay: true,
        swipe: true,
        cycleNavigation: true,
        stopAutoPlayOnHover: true,

        indicatorContainerProps,
        indicatorIconButtonProps,
        navButtonsProps,

        sx: {
            width: "100%",
            minHeight: "760px",

            div: {
                transform: "none !important"
            }
        }
    };

    if (pathname !== "/") return <></>;

    return (
        <Box {...wrapperProps}>
            <Carousel {...carouselProps}>
                {banners.map((banner, i) => (
                    <Banner key={i} banner={banner} />
                ))}
            </Carousel>
        </Box>
    );
};

export default BannersCarousel;
