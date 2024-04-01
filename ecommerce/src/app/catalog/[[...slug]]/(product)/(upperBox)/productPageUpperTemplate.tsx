import {
    Box,
    BoxProps,
    CircularProgress,
    PaperProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { CartItem, CategoryItem, ProductCharacteristic } from "@/lib";
import CharacteristicsBoxTemplate from "./characteristicsBoxTemplate";
import dynamic from "next/dynamic";
import ProductOfferBoxTemplate, {
    ProductOfferBoxProps
} from "./productOfferBoxTemplate";

const DynamicImagesCarousel = dynamic(
    () =>
        import(
            "@/app/catalog/[[...slug]]/(product)/(upperBox)/imagesCarousel.client"
        ),
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

export type ProductPageUpperTemplateProps = {
    imageLinks: { url: string; id: number }[];
    stock: boolean;
    characteristics?: ProductCharacteristic | null;
    cartItem: CartItem;
    categoryItem: CategoryItem;
};

const ProductPageUpperTemplate = ({
    imageLinks,
    stock,
    characteristics,
    cartItem,
    categoryItem
}: ProductPageUpperTemplateProps) => {
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
        flexDirection: { xs: "row", mlg: "column" },
        justifyContent: { xs: "space-between", mlg: "flex-start" },
        gap: "2rem",

        flexGrow: 1,
        flexBasis: 0,

        order: { xs: "unset", sm: -1, mlg: "unset" }
    };

    return (
        <Box {...upperBoxProps}>
            <ProductOfferBoxTemplate
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
                <ProductOfferBoxTemplate
                    {...productOfferBoxProps}
                    props={desktopProductOfferBoxProps}
                />
                <Box {...descriptionBoxProps}>
                    <noscript>
                        <Typography {...articulTextProps}>
                            Артикул: {cartItem.articul}
                        </Typography>
                    </noscript>
                    <CharacteristicsBoxTemplate
                        characteristics={characteristics}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ProductPageUpperTemplate;
