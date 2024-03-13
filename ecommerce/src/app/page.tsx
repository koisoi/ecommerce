import Title from "./(shared)/text/title.template";
import OurAdvantages from "./(shared)/ourAdvantages.template";
import { homePageAPI } from "@/lib/services/homePage.service";
import MainPageCarousel from "./mainPageCarousel";
import {
    CategoryItem,
    PageData,
    ProductReview,
    getProductImageLink,
    pagesAPI
} from "@/lib";
import SimliarProductsSlider from "./(shared)/simliarProductsSlider";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import CategoriesMenuTemplate from "./catalog/[[...slug]]/categoriesMenu.template";
import SectionContainer from "./(shared)/section.template";
import { Metadata } from "next";
import { landingConfig } from "@/lib/data/config";

export const metadata: Metadata = {
    title: landingConfig.landing_title
};

const Home = async () => {
    let popularProducts: CategoryItem[] = [];
    let reviews: ProductReview[] = [];
    let pages: PageData[] = [];

    try {
        popularProducts = await homePageAPI.getPopularProducts();
        reviews = await homePageAPI.getLastReviews();

        popularProducts.forEach(
            (val) =>
                (val.category.path = categoryPathToAlias(val.category.path)!)
        );

        const responsePage = await pagesAPI.getPages({});

        pages = responsePage.map((el) => ({
            ...el,
            image: getProductImageLink(el.images[0]?.url || "") || ""
        }));
    } catch (error) {
        console.error(error);
    }

    return (
        <SectionContainer>
            <MainPageCarousel />
            <CategoriesMenuTemplate pages={pages} />
            <>
                <Title>Популярные товары</Title>
                <SimliarProductsSlider products={popularProducts} />
            </>
            <OurAdvantages />
        </SectionContainer>
    );
};

export default Home;
