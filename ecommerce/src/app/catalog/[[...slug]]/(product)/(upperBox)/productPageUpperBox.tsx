import {
    Box,
    BoxProps,
    CircularProgress,
    Paper,
    PaperProps,
    Typography,
    TypographyProps
} from "@mui/material";
import StockIndicator, { StockIndicatorProps } from "./stockIndicator.template";
import { CategoryItem, ProductCharacteristic } from "@/lib";
import Price, { PriceProps } from "@/app/(shared)/text/price.template";
import CharacteristicsBox from "./characteristicsBox.template";
import {
    BuyButtonProps,
    InstantBuyButton,
    ShoppingCartButton
} from "@/app/(shared)/buyButtons/buyButtons";
import { CartItem } from "@/lib/types/cart";
import dynamic from "next/dynamic";

const DynamicImagesCarousel = dynamic(
    () =>
        import("@/app/catalog/[[...slug]]/(product)/(upperBox)/imagesCarousel"),
    {
        ssr: false,
        loading: () => (
            <Box
                minHeight={{ xs: "230px", sm: "430px" }}
                minWidth={{ xs: "230px", sm: "430px" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <CircularProgress size="7rem" />
            </Box>
        )
    }
);

export type ProductPageUpperBoxProps = {
    imageLinks: { url: string; id: number }[];
    stock: boolean;
    characteristics?: ProductCharacteristic | null;
    cartItem: CartItem;
    categoryItem: CategoryItem;
};

const ProductPageUpperBox = ({
    imageLinks,
    stock,
    characteristics,
    cartItem,
    categoryItem
}: ProductPageUpperBoxProps) => {
    const upperBoxProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", mlg: "row" },
        gap: "20px"
    };

    const carouselBoxProps: BoxProps = {
        flexGrow: 1,
        flexBasis: 0,
        marginBottom: "1rem"
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
        flexGrow: 1,
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
            gap: "5px",
            padding: "1rem",

            position: { xs: "static", xlg: "sticky" },
            top: "60px",

            width: "100%",
            maxHeight: "fit-content",
            maxWidth: { xs: "100vw", xsm: "320px" },

            order: { xs: -1, mlg: "unset" }

            // fontFamily: "Main"
        }
    };

    const stockProps: StockIndicatorProps = {
        stock
    };

    const priceProps: PriceProps = {
        price: cartItem.price,
        autoScaleLarge: true
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
                <DynamicImagesCarousel
                    imageLinks={imageLinks}
                    title={cartItem.title}
                />
            </Box>
            {/* <Box {...descriptionAndProductOfferBoxProps}> */}
            <Box {...descriptionBoxProps}>
                <Typography {...articulTextProps}>
                    Артикул: {cartItem.articul}
                </Typography>
                <CharacteristicsBox characteristics={characteristics} />
            </Box>
            <Paper {...productOfferBoxProps}>
                <StockIndicator {...stockProps} />
                <Price {...priceProps} />
                <InstantBuyButton {...buyButtonsProps} item={categoryItem} />
                <ShoppingCartButton {...buyButtonsProps} />
            </Paper>
            {/* </Box> */}
        </Box>
    );
};

export default ProductPageUpperBox;
