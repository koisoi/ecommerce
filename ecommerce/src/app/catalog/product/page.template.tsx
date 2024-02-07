"use client";

import Price from "@/app/(shared)/price.template";
import { Instagram, YouTube } from "@mui/icons-material";
import {
    Box,
    BoxProps,
    ButtonProps,
    Paper,
    PaperProps,
    Typography,
    TypographyProps
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import {
    CarouselNavProps,
    CarouselProps
} from "react-material-ui-carousel/dist/components/types";
import StockIndicator from "./stockIndicator.template";
import {
    InstantBuyButton,
    ShoppingCartButton
} from "@/app/(shared)/buyButtons.template";
import { CSSProperties } from "react";
import { useThemeColors } from "@/lib/hooks";

const ProductPageTemplate = ({
    title,
    imageLinks,
    articul,
    stock,
    price,
    characteristics
}: {
    title: string;
    imageLinks: string[];
    articul: string;
    stock: boolean;
    price: string;
    characteristics: string;
}) => {
    const colors = useThemeColors();

    const productTitleProps: TypographyProps = {
        fontSize: "2rem",
        fontWeight: "bold",
        paddingY: "0.5rem",

        color: "text.primary"
    };

    const upperBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "row"
    };

    const carouselBoxProps: BoxProps = {
        flexGrow: 1,
        flexBasis: 0
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

        sx: {
            backgroundColor: "white",
            transition: "300ms",

            ":hover": {
                boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.25)"
            }
        }
    };

    const carouselProps: CarouselProps = {
        animation: "slide",
        autoPlay: false,

        sx: {
            position: "sticky",
            top: "60px"
        },

        IndicatorIcon: imageLinks.map((imageLink, i) => (
            <Box key={i} {...carouselIndicatorBoxProps}>
                <img src={imageLink} width="100%" />
            </Box>
        )),

        indicatorIconButtonProps: carouselIndicatorButtonProps,
        activeIndicatorIconButtonProps: carouselActiveIndicatorButtonProps

        // indicatorContainerProps: {
        //     style: {
        //         zIndex: 100,
        //         // marginTop: "-10px",
        //         position: "relative",
        //         top: "10px"
        //     }
        // }
    };

    const imgBoxProps: BoxProps = {
        width: "100%",
        height: "400px",

        display: "flex",
        justifyContent: "center",

        sx: {
            backgroundColor: "white"
        }
    };

    const imgProps = {
        style: {
            maxWidth: "100%",
            objectFit: "contain"
        } as CSSProperties
    };

    const descriptionAndProductOfferBoxProps: BoxProps = {
        flexGrow: 2,
        flexBasis: 0,

        paddingX: "2rem",

        display: "flex",
        flexDirection: "row",
        gap: "20px",

        minHeight: "300px"
    };

    const descriptionBoxProps: BoxProps = {
        flexGrow: 2,
        flexBasis: 0,

        display: "flex",
        flexDirection: "column",
        gap: "20px"
    };

    const articulTextProps: TypographyProps = {
        color: "text.disabled"
    };

    const characteristicsTextProps: TypographyProps = {
        color: "text.main",
        fontSize: "0.95rem"
    };

    const productOfferBoxProps: PaperProps = {
        variant: "outlined",
        elevation: 3,

        sx: {
            flexGrow: 1,
            flexBasis: 0,
            alignSelf: "start",

            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",

            position: "sticky",
            top: "60px",

            maxWidth: "100%",
            maxHeight: "fit-content"

            // fontFamily: "Main"
        }
    };

    const buttonProps: ButtonProps = {
        disabled: !stock,

        variant: "contained",
        sx: {
            padding: "5px"
        }
    };

    const buttonTextProps: TypographyProps = {
        fontSize: "0.95rem"
    };

    return (
        <>
            <Typography {...productTitleProps}>{title}</Typography>
            <Box {...upperBoxProps}>
                <Box {...carouselBoxProps}>
                    <Carousel {...carouselProps}>
                        {imageLinks.map((imageLink, i) => (
                            <Box key={i} {...imgBoxProps}>
                                <img
                                    src={imageLink}
                                    alt={title}
                                    {...imgProps}
                                />
                            </Box>
                        ))}
                    </Carousel>
                </Box>
                <Box {...descriptionAndProductOfferBoxProps}>
                    <Box {...descriptionBoxProps}>
                        <Typography {...articulTextProps}>
                            Артикул: {articul}
                        </Typography>
                        <Typography {...characteristicsTextProps}>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: characteristics.replace(
                                        /\\r\\n\\t|\\r\\n|\\r|\\n|\\t/g,
                                        "<br />"
                                    )
                                }}
                            />
                        </Typography>
                    </Box>
                    <Paper {...productOfferBoxProps}>
                        <StockIndicator stock={stock} />
                        <Price variant="large" price={price} />
                        <InstantBuyButton
                            props={buttonProps}
                            textProps={buttonTextProps}
                        />
                        <ShoppingCartButton
                            props={buttonProps}
                            textProps={buttonTextProps}
                        />
                    </Paper>
                </Box>
            </Box>
        </>
    );
};

export default ProductPageTemplate;
