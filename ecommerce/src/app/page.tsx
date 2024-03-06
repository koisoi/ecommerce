import { Box, Tab, TabProps, Tabs, TabsProps } from "@mui/material";
import Title from "./(shared)/text/title.template";
import CategoryCard from "./(shared)/categoryCard.template";
import OurAdvantages from "./(shared)/ourAdvantages.template";
import { landingConfig } from "@/lib/data/config";
import { homePageAPI } from "@/lib/services/homePage.service";
import MainPageCarousel from "./mainPageCarousel";
import { CategoryItem, ProductReview } from "@/lib";
import SimliarProductsSlider from "./(shared)/simliarProductsSlider";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import { Breadcrumb } from "@/lib/types/breadcrumbs";
import CategoriesMenuTemplate from "./catalog/[[...slug]]/categoriesMenu.template";

const Home = async () => {
    // async
    let popularProducts: CategoryItem[] = [];
    let reviews: ProductReview[] = [];
    try {
        popularProducts = await homePageAPI.getPopularProducts();
        reviews = await homePageAPI.getLastReviews();

        popularProducts.forEach(
            (val) =>
                (val.category.path = categoryPathToAlias(val.category.path)!)
        );
    } catch (error) {
        console.error(error);
    }

    // props
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
            <MainPageCarousel />
            <Title>Категории</Title>
            <CategoriesMenuTemplate />
            {/* <Tabs {...tabsProps}>
                {landingConfig.categories.map((category) => (
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
            </Tabs> */}
            <Title>Популярные товары</Title>
            <SimliarProductsSlider products={popularProducts} />
            {/* <Title>Последние отзывы</Title>
            <FeedbackBoxTemplate feedback={reviews} /> */}
            <OurAdvantages props={{ marginTop: "40px" }} />
        </Box>
    );
};

export default Home;
