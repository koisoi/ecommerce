import Title from "./(shared)/text/title.template";
import OurAdvantages from "./(shared)/ourAdvantages.template";
import { homePageAPI } from "@/lib/services/homePage.service";
import {
    CategoryItem,
    PageData,
    ProductReview,
    getImageLink,
    backendAPI
} from "@/lib";
import SimliarProductsSlider from "./(shared)/simliarProductsSlider";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import CategoriesMenuTemplate from "./catalog/[[...slug]]/categoriesMenu.template";
import SectionContainer from "./(shared)/section.template";
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
            image: getImageLink(el.images[0]?.url || "") || ""
        }));
    } catch (error) {
        console.error(error);
    }

    return (
        <SectionContainer>
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
