"use client";

import Carousel from "react-material-ui-carousel";
import {
    CarouselNavProps,
    CarouselProps
} from "react-material-ui-carousel/dist/components/types";
import { BannerData, useThemeColors } from "@/lib";
import Banner from "@/app/(shared)/banner.template";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, BoxProps } from "@mui/material";

const BannersCarousel = ({ banners }: { banners: BannerData[] }) => {
    // const
    const pathname = usePathname();
    const colors = useThemeColors();

    // states
    const [navOpacity, setNavOpacity] = useState<number>(0);
    const [carouselHeight, setCarouselHeight] = useState<number>(0);

    // functions
    const renderHeight = () => {
        let width: number =
            document
                .getElementById("mainPage-banners-carousel")
                ?.getBoundingClientRect().width || 0;
        width = width > 1900 ? 1900 : width < 320 ? 320 : width;

        let height = width * 0.5625; // 16:9
        height = height > 760 ? 760 : height < 300 ? 300 : height;

        setCarouselHeight(height);
    };

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
            marginTop: "-2rem",
            position: "relative",
            height: "3rem"
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
        changeOnFirstRender: true,
        cycleNavigation: true,
        stopAutoPlayOnHover: true,

        indicatorContainerProps,
        indicatorIconButtonProps,
        navButtonsProps,

        sx: {
            width: "100%",
            height: "100%",
            minHeight: `${carouselHeight}px`,
            aspectRatio: "16 / 9",
            maxHeight: carouselHeight
                ? `${carouselHeight}px !important`
                : "unset",

            div: {
                transform: "none !important",
                maxHeight: carouselHeight
                    ? `${carouselHeight}px !important`
                    : "unset"
            },

            ".css-1f8sh1y": {
                height: `${carouselHeight}px !important`
            }
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            renderHeight();
        }

        window.addEventListener("resize", () => {
            renderHeight();
        });

        return window.removeEventListener("resize", () => {
            renderHeight();
        });
    });

    // const bannerBoxProps = (banner: BannerData): BoxProps => ({
    //     component: "a",
    //     // @ts-ignore
    //     href: banner.url,
    //     width: "100%",

    //     display: "flex",
    //     justifyContent: "center",

    //     sx: {
    //         cursor: "grab"
    //     }
    // });

    if (pathname !== "/") return <></>;

    return (
        <Box {...wrapperProps} id="mainPage-banners-carousel">
            <Carousel {...carouselProps}>
                {banners.map((banner, i) => (
                    // <Box key={i} {...bannerBoxProps(banner)}>
                    <Banner
                        key={i}
                        banner={banner}
                        height={`${carouselHeight} px`}
                    />
                    // </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default BannersCarousel;
