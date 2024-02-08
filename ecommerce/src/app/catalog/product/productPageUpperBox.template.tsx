import {
    Box,
    BoxProps,
    Paper,
    PaperProps,
    Typography,
    TypographyProps
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import StockIndicator, { StockIndicatorProps } from "./stockIndicator.template";
import {
    BuyButtonProps,
    InstantBuyButton,
    ShoppingCartButton
} from "@/app/(shared)/buyButtons.template";
import { CSSProperties, MouseEventHandler } from "react";
import { useMediaQueries, useThemeColors } from "@/lib/hooks";
import {
    CarouselNavProps,
    CarouselProps
} from "react-material-ui-carousel/dist/components/types";
import { backendTextRegExp } from "@/lib";
import Price, { PriceProps } from "@/app/(shared)/price.template";

export type ProductPageUpperBoxProps = {
    title: string;
    imageLinks: { url: string; id: number }[];
    articul: string;
    stock: boolean;
    price: string;
    characteristics: string;
    onImgClick: MouseEventHandler<HTMLImageElement>;
};

const ProductPageUpperBox = ({
    title,
    imageLinks,
    articul,
    stock,
    price,
    characteristics,
    onImgClick
}: ProductPageUpperBoxProps) => {
    const colors = useThemeColors();
    const screen = useMediaQueries();

    const upperBoxProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", mlg: "row" }
    };

    const carouselBoxProps: BoxProps = {
        flexGrow: 1,
        flexBasis: 0,
        marginBottom: "1rem"
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
        swipe: screen.md,

        sx: {
            position: "sticky",
            top: "60px"
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
            : undefined
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
        } as CSSProperties,

        onClick: onImgClick
    };

    const descriptionAndProductOfferBoxProps: BoxProps = {
        flexGrow: { xs: 1, xlg: 2 },
        flexBasis: 0,

        paddingX: "2rem",

        display: "flex",
        flexDirection: { xs: "column", xlg: "row" },
        gap: "20px",

        minHeight: "fit-content"
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

    const characteristicsTextProps: BoxProps = {
        color: "text.main",
        fontSize: "0.95rem",
        dangerouslySetInnerHTML: {
            __html: characteristics.replace(backendTextRegExp, "<br />")
        }
    };

    const productOfferBoxProps: PaperProps = {
        variant: "outlined",

        sx: {
            flexGrow: 1,
            flexBasis: 0,
            alignSelf: "start",

            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",

            position: { xs: "static", xlg: "sticky" },
            top: "60px",

            width: "100%",
            maxHeight: "fit-content"

            // fontFamily: "Main"
        }
    };

    const stockProps: StockIndicatorProps = {
        stock
    };

    const priceProps: PriceProps = {
        variant: screen.sm ? "large" : "medium",
        price
    };

    const buyButtonsProps: BuyButtonProps = {
        props: {
            disabled: !stock,

            variant: "contained",
            sx: {
                padding: "5px"
            }
        },

        textProps: {
            fontSize: "0.95rem"
        }
    };

    return (
        <Box {...upperBoxProps}>
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
            <Box {...descriptionAndProductOfferBoxProps}>
                <Box {...descriptionBoxProps}>
                    <Typography {...articulTextProps}>
                        Артикул: {articul}
                    </Typography>
                    <Box {...characteristicsTextProps} />
                </Box>
                <Paper {...productOfferBoxProps}>
                    <StockIndicator {...stockProps} />
                    <Price {...priceProps} />
                    <InstantBuyButton {...buyButtonsProps} />
                    <ShoppingCartButton {...buyButtonsProps} />
                </Paper>
            </Box>
        </Box>
    );
};

export default ProductPageUpperBox;
