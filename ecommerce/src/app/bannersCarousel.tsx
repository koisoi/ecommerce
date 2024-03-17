"use client";

import { Box, BoxProps } from "@mui/material";
import { CSSProperties } from "react";
import Carousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";
import {
    BannerData
} from "@/lib";
import Banner from "@/app/(shared)/banner.template";

const BannersCarousel = ({banners} : {banners: BannerData[]}) => {
    // props
    const carouselProps: CarouselProps = {
        animation: "slide",
        autoPlay: true,
        swipe: true,

        sx: {
            width: "100%",
            minHeight: "330px"
        }
    };

    return (
        <Carousel {...carouselProps}>
            {banners.map((banner, i) => (
                <Banner key={i} banner={banner} />
            ))}
        </Carousel>
    );
};

export default BannersCarousel;
