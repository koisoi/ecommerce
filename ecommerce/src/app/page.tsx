import Title from "./(shared)/text/title";
import OurAdvantages from "./(shared)/ourAdvantages.client";
import {
    CategoryItem,
    PageData,
    getLinkDomain,
    backendAPI,
    homePageAPI,
    categoryPathToAlias,
    SiteData
} from "@/lib";
import SimliarProductsSliderTemplate from "./(shared)/simliarProductsSliderTemplate";
import CategoriesMenuTemplate from "./catalog/[[...slug]]/categoriesMenuTemplate";
import SectionContainer from "./(shared)/sectionContainer";
import { Metadata } from "next";
import PageTitle from "./(shared)/text/pageTitle";

export async function generateMetadata(): Promise<Metadata> {
    let response: SiteData | null = null;
    try {
        response = await backendAPI.getSite();
    } catch (error) {
        console.error(error);
        return { title: "Главная" };
    }

    return {
        title: response?.page_title,
        description: response?.page_description,
        keywords: response?.page_keywords
    };
}

const Home = async () => {
    let siteInfo: SiteData | null = null;
    let popularProducts: CategoryItem[] = [];
    let pages: PageData[] = [];

    try {
        popularProducts = await homePageAPI.getPopularProducts();

        popularProducts.forEach(
            (val) =>
                (val.category.path = categoryPathToAlias(val.category.path)!)
        );

        const responsePage = await backendAPI.getPages({});

        pages = responsePage.map((el) => ({
            ...el,
            image: getLinkDomain(el.images[0]?.url || "") || ""
        }));

        siteInfo = await backendAPI.getSite();
    } catch (error) {
        console.error(error);
    }

    return (
        <SectionContainer>
            <>
                <PageTitle>{siteInfo?.page_title}</PageTitle>
                <CategoriesMenuTemplate pages={pages} />
            </>
            <>
                <Title>Популярные товары</Title>
                <SimliarProductsSliderTemplate products={popularProducts} />
            </>
            <OurAdvantages />
        </SectionContainer>
    );
};

export default Home;
