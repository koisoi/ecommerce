import Title from "./(shared)/text/title";
import OurAdvantages from "./(shared)/ourAdvantages.client";
import {
    CategoryItem,
    PageData,
    ProductReview,
    getImageLink,
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
    // let banners: BannerData[] = [];

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

        // banners = await backendAPI.getBanners();
    } catch (error) {
        console.error(error);
    }

    // const bannerBoxProps: BoxProps = {
    //     sx: { position: "absolute", left: 0, right: 0 }
    // };

    return (
        <SectionContainer>
            {/* {!!banners?.length && (
                <Box {...bannerBoxProps}>
                    <BannersCarousel banners={banners} />
                </Box>
            )} */}
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
