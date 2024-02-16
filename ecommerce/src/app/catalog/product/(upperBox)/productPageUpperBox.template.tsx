import {
    Box,
    BoxProps,
    Divider,
    Paper,
    PaperProps,
    Typography,
    TypographyProps
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import StockIndicator, { StockIndicatorProps } from "./stockIndicator.template";
import { InstantBuyButtonTemplate } from "@/app/(shared)/buyButtons/buyButtons.template";
import { CSSProperties, DragEventHandler, MouseEventHandler } from "react";
import { useMediaQueries, useThemeColors } from "@/lib/hooks";
import {
    CarouselNavProps,
    CarouselProps
} from "react-material-ui-carousel/dist/components/types";
import { ProductCharacteristic, getProductImageLink } from "@/lib";
import Price, { PriceProps } from "@/app/(shared)/price.template";
import CharacteristicsBox from "./characteristicsBox.template";
import ShoppingCartButton, {
    BuyButtonProps
} from "@/app/(shared)/buyButtons/buyButtons";
import { CartItem } from "@/lib/types/cart";

export type ProductPageUpperBoxProps = {
    imageLinks: { url: string; id: number }[];
    stock: boolean;
    characteristics: ProductCharacteristic;
    cartItem: CartItem;
    onImgClick: MouseEventHandler<HTMLDivElement>;
    onDragStart: DragEventHandler<HTMLDivElement>;
    onDragStop: DragEventHandler<HTMLDivElement>;
};

const ProductPageUpperBoxTemplate = ({
    imageLinks,
    stock,
    characteristics,
    cartItem,
    onImgClick,
    onDragStart,
    onDragStop
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
            top: "60px"
        },

        IndicatorIcon: screen.lg
            ? imageLinks.map((imageLink, i) => (
                  <Box key={i} {...carouselIndicatorBoxProps}>
                      <img
                          src={getProductImageLink(imageLink.url)}
                          width="100%"
                      />
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
        height: { xs: "200px", sm: "400px" },

        display: "flex",
        justifyContent: "center",

        sx: {
            backgroundColor: "white",
            cursor: "grab"
        },

        onClick: onImgClick
    };

    const imgProps = {
        style: {
            maxWidth: "100%",
            objectFit: "contain"
            // pointerEvents: "none"
        } as CSSProperties,

        onDragStart,
        onDragEnd: onDragStop
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
        price: cartItem.price
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
        },

        item: cartItem
    };

    return (
        <Box {...upperBoxProps}>
            <Box {...carouselBoxProps}>
                <Carousel {...carouselProps}>
                    {imageLinks.map((imageLink, i) => (
                        <Box key={i} {...imgBoxProps}>
                            <img
                                src={getProductImageLink(imageLink.url)}
                                alt={cartItem.title}
                                {...imgProps}
                            />
                        </Box>
                    ))}
                </Carousel>
            </Box>
            <Box {...descriptionAndProductOfferBoxProps}>
                <Box {...descriptionBoxProps}>
                    <Typography {...articulTextProps}>
                        Артикул: {cartItem.articul}
                    </Typography>
                    <CharacteristicsBox characteristics={characteristics} />
                </Box>
                <Paper {...productOfferBoxProps}>
                    <StockIndicator {...stockProps} />
                    <Price {...priceProps} />
                    <InstantBuyButtonTemplate
                        {...buyButtonsProps}
                        onClick={() => {}}
                    />
                    <ShoppingCartButton {...buyButtonsProps} />
                </Paper>
            </Box>
        </Box>
    );
};

export default ProductPageUpperBoxTemplate;
