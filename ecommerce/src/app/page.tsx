import Title from "./(shared)/text/title";
import OurAdvantages from "./(shared)/ourAdvantages.client";
import {
    CategoryItem,
    PageData,
    ProductReview,
    getLinkDomain,
    backendAPI,
    homePageAPI,
    categoryPathToAlias
} from "@/lib";
import SimliarProductsSliderTemplate from "./(shared)/simliarProductsSliderTemplate";
import CategoriesMenuTemplate from "./catalog/[[...slug]]/categoriesMenuTemplate";
import SectionContainer from "./(shared)/sectionContainer";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const response = await backendAPI.getSite();

    return {
        title: response.page_title,
        description: response.page_description,
        keywords: response.page_keywords
    };
}

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

        const responsePage = await backendAPI.getPages({});

        pages = responsePage.map((el) => ({
            ...el,
            image: getLinkDomain(el.images[0]?.url || "") || ""
        }));
    } catch (error) {
        console.error(error);
    }

    return (
        <SectionContainer>
            <CategoriesMenuTemplate pages={pages} />
            <>
                <Title>Популярные товары</Title>
                <SimliarProductsSliderTemplate products={popularProducts} />
            </>
            <OurAdvantages />
        </SectionContainer>
    );
};

export default Home;
