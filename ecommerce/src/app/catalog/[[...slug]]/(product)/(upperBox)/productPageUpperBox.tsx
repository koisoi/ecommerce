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
import ProductOfferBox, { ProductOfferBoxProps } from "./productOfferBox";
import ImagesCarousel from "@/app/catalog/[[...slug]]/(product)/(upperBox)/imagesCarousel";

const DynamicImagesCarousel = dynamic(
    () =>
        import("@/app/catalog/[[...slug]]/(product)/(upperBox)/imagesCarousel"),
    {
        // ssr: false,
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
        flexGrow: 2,
        flexBasis: 0
    };

    const descriptionBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    };

    const articulTextProps: TypographyProps = {
        color: "text.disabled"
    };

    const desktopProductOfferBoxProps: PaperProps = {
        sx: {
            display: { xs: "none", mlg: "flex" }
        }
    };

    const mobileProductOfferBoxProps: PaperProps = {
        sx: {
            display: { xs: "flex", mlg: "none" }
        }
    };

    const productOfferBoxProps: ProductOfferBoxProps = {
        categoryItem,
        cartItem,
        stock
    };

    const rightBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        flexGrow: 1,
        flexBasis: 0
    };

    return (
        <Box {...upperBoxProps}>
            <ProductOfferBox
                {...productOfferBoxProps}
                props={mobileProductOfferBoxProps}
            />
            <Box {...carouselBoxProps}>
                <ImagesCarousel
                    imageLinks={imageLinks}
                    title={cartItem.title}
                />
            </Box>
            <Box {...rightBoxProps}>
                <Box {...descriptionBoxProps}>
                    <Typography {...articulTextProps}>
                        Артикул: {cartItem.articul}
                    </Typography>
                    <CharacteristicsBox characteristics={characteristics} />
                </Box>
                <ProductOfferBox
                    {...productOfferBoxProps}
                    props={desktopProductOfferBoxProps}
                />
            </Box>
        </Box>
    );
};

export default ProductPageUpperBox;
