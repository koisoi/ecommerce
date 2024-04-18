import ImgModal from "./imgModal.client";
import {
    Breadcrumb,
    CategoryItem,
    MainProductInfo,
    ProductCharacteristic,
    ProductCharacteristics,
    ProductPageTabType,
    ProductReview,
    catalogPageBreadcrumb,
    categoryPathToAlias,
    getLinkDomain,
    getProductLink,
    getProductTitle,
    landingConfig,
    productAPI
} from "@/lib";
import ProductPageUpperTemplate from "./upperBox/productPageUpperTemplate";
import { notFound } from "next/navigation";
import ProductPageLowerTemplate from "./lowerBox/productPageLowerTemplate";
import BreadcrumbsTemplate from "@/app/_shared/breadcrumbsTemplate";
import PageTitle from "@/app/_shared/text/pageTitle";
import SectionContainer from "@/app/_shared/sectionContainer";
import OurAdvantages from "@/app/_shared/ourAdvantages.client";
import { Product, WithContext } from "schema-dts";
import Script from "next/script";

const ProductPage = async ({
    product,
    category,
    series,
    searchParams
}: {
    product: string;
    category: string;
    series?: string;
    searchParams: { page?: number; tab?: ProductPageTabType };
}) => {
    let productMainInfo: MainProductInfo | null = null;
    let productShortCharacteristics: ProductCharacteristic | null = null;
    let productFullCharacteristics: ProductCharacteristics | null = null;
    let productReviews: ProductReview[] = [];
    let productSiblings: CategoryItem[] = [];

    try {
        productMainInfo = await productAPI.getProductMainInfo({
            alias: product,
            category
        });
        productShortCharacteristics =
            await productAPI.getProductShortCharacteristics({ alias: product });
        productFullCharacteristics =
            await productAPI.getProductFullCharacteristics({ alias: product });
        // productReviews = await productAPI.getProductReviews({ alias: product });
        productSiblings = await productAPI.getProductSiblings({
            alias: product
        });

        productMainInfo.category.path = categoryPathToAlias(
            productMainInfo.category.path
        )!;
    } catch (error) {
        console.error(error);
        return notFound();
    }

    if (!productMainInfo) return notFound();

    const schema: WithContext<Product> = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: productMainInfo.category.title_single
            ? `${productMainInfo.category.title_single} ${productMainInfo.title}`
            : productMainInfo.title,
        image: productMainInfo.images.map(
            (image) => landingConfig.url + image.url
        ),
        sku: productMainInfo.articul,
        brand: {
            "@type": "Brand",
            name: landingConfig.landing_title
        },
        offers: {
            "@type": "Offer",
            url: `${landingConfig.url}/catalog/${category}/${product}`,
            priceCurrency: "RUR",
            price: productMainInfo.price,
            priceValidUntil: new Date().toISOString().substring(0, 10),
            itemCondition: "NewCondition",
            availability:
                productMainInfo.availability === "в наличии"
                    ? "InStock"
                    : "SoldOut",
            seller: landingConfig.organizationSchema
        }
    };

    const breadcrumbs: Breadcrumb[] = [
        ...catalogPageBreadcrumb,
        {
            link: `/catalog/${productMainInfo.category.path}`,
            title: productMainInfo.category.title
        }
    ];

    if (productMainInfo.series)
        breadcrumbs.push({
            link: `/catalog/${categoryPathToAlias(
                productMainInfo.series.path
            )}`,
            title: productMainInfo.series.title
        });

    return (
        <>
            <Script
                id={`product-ld-json-${productMainInfo.alias}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema)
                }}
            />

            <BreadcrumbsTemplate linksArray={breadcrumbs} lastLink />

            <ImgModal title={productMainInfo?.title || ""} />

            <PageTitle noDivider>{getProductTitle(productMainInfo)}</PageTitle>
            <SectionContainer>
                <ProductPageUpperTemplate
                    imageLinks={
                        productMainInfo.images.map((el) => ({
                            id: el.id,
                            url: getLinkDomain(el.url)
                        })) || []
                    }
                    stock={productMainInfo.availability === "в наличии"}
                    characteristics={productShortCharacteristics}
                    cartItem={{
                        url: getProductLink(category, product),
                        alias: product,
                        title: productMainInfo.title,
                        imgLink: getLinkDomain(productMainInfo.images[0].url),
                        price: productMainInfo.price,
                        amount: 1,
                        articul: productMainInfo.articul
                    }}
                    categoryItem={{
                        id: productMainInfo.id,
                        articul: productMainInfo.articul,
                        images: productMainInfo.images,
                        title: productMainInfo.title,
                        price: productMainInfo.price,
                        alias: productMainInfo.alias,
                        is_new: productMainInfo.is_new,
                        is_recommend: productMainInfo.is_recommend,
                        category: productMainInfo.category,
                        prefix: productMainInfo.prefix
                    }}
                />
                <ProductPageLowerTemplate
                    searchParams={searchParams}
                    simliarProducts={productSiblings}
                    fullCharasterictics={productFullCharacteristics}
                    description={productMainInfo.text}
                    feedback={productReviews}
                    complectation={productMainInfo.complectation}
                    product={product}
                    series={series}
                    category={category}
                />
                <OurAdvantages />
            </SectionContainer>
        </>
    );
};

export default ProductPage;
