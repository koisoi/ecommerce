"use client";

import {
    setOpenedImgLink,
    useAppDispatch,
    useMediaQueries,
    useThemeColors
} from "@/lib";
import { Box, BoxProps } from "@mui/material";
import {
    CSSProperties,
    DragEventHandler,
    MouseEventHandler,
    useState
} from "react";
import Carousel from "react-material-ui-carousel";
import {
    CarouselNavProps,
    CarouselProps
} from "react-material-ui-carousel/dist/components/types";

const ImagesCarousel = ({
    imageLinks,
    title
}: {
    imageLinks: { url: string; id: number }[];
    title: string;
}) => {
    const colors = useThemeColors();
    const screen = useMediaQueries();
    const dispatch = useAppDispatch();

    const [canOpenImg, setCanOpenImg] = useState<boolean>(true);

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

    const carouselIndicatorButtonProps: CarouselNavProps = {
        style: {
            borderRadius: "3px",
            border: "1px solid",
            borderColor: colors.divider,
            margin: "5px"
        }
    };

    const carouselActiveIndicatorButtonProps: CarouselNavProps = {
        style: {
            borderColor: colors.primary
        }
    };

    const carouselIndicatorBoxProps: BoxProps = {
        width: "75px",
        height: "75px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        overflow: "hidden",
        borderRadius: "3px",

        zIndex: 2,

        sx: {
            backgroundColor: "white",
            transition: "300ms",

            ":hover": {
                boxShadow: "0 0 10px 1px " + colors.divider
            }
        }
    };

    const carouselProps: CarouselProps = {
        animation: "slide",
        autoPlay: false,
        swipe: true,

        sx: {
            position: "sticky",
            top: "60px",
            minHeight: { xs: "230px", sm: "430px" }
        },

        IndicatorIcon: screen.lg
            ? imageLinks.map((imageLink, i) => (
                  <Box key={i} {...carouselIndicatorBoxProps}>
                      <img src={imageLink.url} width="100%" />
                  </Box>
              ))
            : undefined,

        indicatorIconButtonProps: screen.lg
            ? carouselIndicatorButtonProps
            : undefined,
        activeIndicatorIconButtonProps: screen.lg
            ? carouselActiveIndicatorButtonProps
            : undefined,
        navButtonsWrapperProps: screen.lg
            ? {
                  style: {
                      height: "400px"
                  }
              }
            : undefined
    };

    const imgBoxProps: BoxProps = {
        width: "100%",
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
            objectFit: "contain"
            // pointerEvents: "none"
        } as CSSProperties,

        onDragStart: handleDragStart,
        onDragEnd: handleDragStop
    };

    return (
        <Carousel {...carouselProps}>
            {imageLinks.map((imageLink, i) => (
                <Box key={i} {...imgBoxProps}>
                    <img src={imageLink.url} alt={title} {...imgProps} />
                </Box>
            ))}
        </Carousel>
    );
};

export default ImagesCarousel;
