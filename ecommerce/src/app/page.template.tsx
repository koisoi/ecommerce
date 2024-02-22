import { Box, BoxProps, Tab, TabProps, Tabs, TabsProps } from "@mui/material";
import { CSSProperties } from "react";
import Carousel from "react-material-ui-carousel";
import { CarouselProps } from "react-material-ui-carousel/dist/components/types";
import Title from "./(shared)/text/title.template";
import { CategoryItem, CategoryListItem, ProductReview } from "@/lib";
import CategoryCard from "./(shared)/categoryCard.template";
import OurAdvantages from "./(shared)/ourAdvantages.template";
import SimliarProductsSlider from "./catalog/product/(lowerBox)/simliarProductsSlider";
import FeedbackBoxTemplate from "./catalog/product/(lowerBox)/feedbackBox.template";
import Loading from "./(shared)/loading.template";

const HomeTemplate = ({
    frameLinks,
    categories,
    categoryImagesLoading,
    popularProducts,
    popularProductsLoading,
    reviews,
    reviewsLoading
}: {
    frameLinks: string[];
    categories: CategoryListItem[];
    categoryImagesLoading: boolean;
    popularProducts: CategoryItem[];
    popularProductsLoading: boolean;
    reviews: ProductReview[];
    reviewsLoading: boolean;
}) => {
    const carouselProps: CarouselProps = {
        animation: "slide",
        autoPlay: true,
        swipe: true,

        sx: {
            width: "100%"
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

    const tabsProps: TabsProps = {
        variant: "scrollable",

        value: false,

        sx: {
            minHeight: "max-content"
        }
    };

    const tabProps: TabProps = {
        sx: {
            textTransform: "none",
            width: "240px",
            minHeight: "100%"
        }
    };

    return (
        <Box>
            <Carousel {...carouselProps}>
                {frameLinks.map((frameLink, i) => (
                    <Box key={i} {...imgBoxProps}>
                        <iframe src={frameLink} width="1200px" {...imgProps} />
                    </Box>
                ))}
            </Carousel>
            <Title>Категории</Title>
            <Tabs {...tabsProps}>
                {categories.map((category) => (
                    <Tab
                        key={category.path}
                        label={
                            <CategoryCard
                                category={category}
                                smallText
                                smallImage
                            />
                        }
                        {...tabProps}
                    />
                ))}
            </Tabs>
            <Title>Популярные товары</Title>
            {!!popularProductsLoading && <Loading>Загрузка товаров...</Loading>}
            {!popularProductsLoading && (
                <SimliarProductsSlider products={popularProducts} />
            )}
            <Title>Последние отзывы</Title>
            {!!popularProductsLoading && <Loading>Загрузка отзывов...</Loading>}
            {!popularProductsLoading && (
                <FeedbackBoxTemplate feedback={reviews} />
            )}
            <OurAdvantages props={{ marginTop: "40px" }} />
        </Box>
    );
};

export default HomeTemplate;
