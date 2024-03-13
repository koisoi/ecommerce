import {
    Box,
    BoxProps,
    CircularProgress,
    PaperProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { CategoryItem, ProductCharacteristic } from "@/lib";
import CharacteristicsBox from "./characteristicsBox.template";
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
            display: { xs: "none", sm: "flex" }
        }
    };

    const mobileProductOfferBoxProps: PaperProps = {
        sx: {
            display: { xs: "flex", sm: "none" }
        }
    };

    const productOfferBoxProps: ProductOfferBoxProps = {
        categoryItem,
        cartItem,
        stock
    };

    const rightBoxProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "row-reverse", mlg: "column" },
        justifyContent: "space-between",
        gap: "2rem",

        flexGrow: 1,
        flexBasis: 0,

        order: { xs: "unset", sm: -1, mlg: "unset" }
    };

    return (
        <Box {...upperBoxProps}>
            <ProductOfferBox
                {...productOfferBoxProps}
                props={mobileProductOfferBoxProps}
            />
            <Box {...carouselBoxProps}>
                <DynamicImagesCarousel
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
