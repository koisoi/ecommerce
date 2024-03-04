"use client";

import { Box, BoxProps } from "@mui/material";
import { CSSProperties } from "react";
import Carousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

const MainPageCarousel = () => {
    // const
    const frameLinks = [
        "https://telescope1.ru/img/banners/pulsar-telos-lrf-xp50/index.html",
        "https://telescope1.ru/img/banners/nikon-sale/index.html",
        "https://telescope1.ru/img/banners/club-price-auth/index.html",
        "https://telescope1.ru/img/banners/vector-optics/index.html",
        "https://telescope1.ru/img/banners/delivery/index.html"
    ];

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

    const imgBoxProps: BoxProps = {
        width: "100%",
        height: "300px",

        display: "flex",
        justifyContent: "center",

        sx: {
            backgroundColor: "white",
            cursor: "grab"
        }
    };

    const imgProps = {
        style: {
            maxWidth: "100%"
        } as CSSProperties
    };

    return (
        <Carousel {...carouselProps}>
            {frameLinks.map((frameLink, i) => (
                <Box key={i} {...imgBoxProps}>
                    <iframe src={frameLink} width="1200px" {...imgProps} />
                </Box>
            ))}
        </Carousel>
    );
};

export default MainPageCarousel;
