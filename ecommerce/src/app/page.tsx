import { Box } from "@mui/material";
import Title from "./(shared)/text/title.template";
import OurAdvantages from "./(shared)/ourAdvantages.template";
import { homePageAPI } from "@/lib/services/homePage.service";
import MainPageCarousel from "./mainPageCarousel";
import { CategoryItem, ProductReview } from "@/lib";
import SimliarProductsSlider from "./(shared)/simliarProductsSlider";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
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

    return (
        <Box>
            <MainPageCarousel />
            <Title>Категории</Title>
            <CategoriesMenuTemplate />
            <Title>Популярные товары</Title>
            <SimliarProductsSlider products={popularProducts} />
            <OurAdvantages props={{ marginTop: "40px" }} />
        </Box>
    );
};

export default Home;
