"use client";

import ImageGallery, { ImageGalleryProps } from "@/app/(shared)/imageGallery";
import { setOpenedImgLink, useAppDispatch, useMediaQueries } from "@/lib";
import { Box, BoxProps } from "@mui/material";
import {
    CSSProperties,
    DragEventHandler,
    MouseEventHandler,
    SyntheticEvent,
    useState
} from "react";
import Carousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";

const ImagesCarousel = ({
    imageLinks,
    title
}: {
    imageLinks: { url: string; id: number }[];
    title: string;
}) => {
    // const colors = useThemeColors();
    const screen = useMediaQueries();
    const dispatch = useAppDispatch();

    const [canOpenImg, setCanOpenImg] = useState<boolean>(true);
    const [selectedImg, setSelectedImg] = useState<number>(0);

    imageLinks = imageLinks.map((el) => ({
        ...el,
        url: el.url.replaceAll("original", "middle")
    }));

    const handleImgClick: MouseEventHandler<HTMLDivElement> = (event) => {
        if (canOpenImg)
            dispatch(
                setOpenedImgLink(
                    event.currentTarget.getElementsByTagName("img")[0].src
                )
            );
        else setCanOpenImg(true);
    };

    const handleDragStart: DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        setCanOpenImg(false);
    };

    const handleDragStop: DragEventHandler<HTMLDivElement> = (event) => {
        event.preventDefault();
        setTimeout(() => setCanOpenImg(true), 300);
    };

    const handleImgTabChange: (
        event: SyntheticEvent<Element, Event>,
        value: any
    ) => void = (_, val) => {
        setSelectedImg(val);
    };

    const handleCarouselChange: (
        now?: number | undefined,
        previous?: number | undefined
    ) => any = (now) => {
        if (now === undefined) return;
        setSelectedImg(now);
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        alignItems: "stretch",

        gap: "1rem",
        maxHeight: "450px"
        // maxHeight: "100%"
    };

    const carouselProps: CarouselProps = {
        animation: "slide",
        autoPlay: false,
        swipe: true,
        changeOnFirstRender: true,

        onChange: handleCarouselChange,
        index: selectedImg,

        sx: {
            // width: "100%"
            height: "100%"
        },

        IndicatorIcon: screen.lg ? <></> : undefined
    };

    const imgBoxProps: BoxProps = {
        // width: "100%",
        height: "100%",
        minHeight: { xs: "200px", sm: "400px" },

        display: "flex",
        justifyContent: "center",

        sx: {
            backgroundColor: "white",
            cursor: "grab"
        },

        onClick: handleImgClick
    };

    const imgProps = {
        style: {
            maxWidth: "100%",
            height: "100%",
            objectFit: "contain",
            maxHeight: "400px"
        } as CSSProperties,

        onDragStart: handleDragStart,
        onDragEnd: handleDragStop
    };

    const imageGalleryProps: ImageGalleryProps = {
        imageLinks: imageLinks.map((el) => el.url),
        alt: title,
        onTabChange: handleImgTabChange,
        selectedTab: selectedImg
    };

    const carouselBoxProps: BoxProps = {
        flexGrow: 1
    };

    return (
        <Box {...wrapperProps}>
            {screen.lg && <ImageGallery {...imageGalleryProps} />}
            <Box {...carouselBoxProps}>
                <Carousel {...carouselProps}>
                    {imageLinks.map((imageLink, i) => (
                        <Box key={i} {...imgBoxProps}>
                            <img
                                src={imageLink.url}
                                alt={title}
                                {...imgProps}
                            />
                        </Box>
                    ))}
                </Carousel>
            </Box>
        </Box>
    );
};

export default ImagesCarousel;
