import Title from "@/app/(shared)/text/title.template";
import ImgModal from "./imgModal";
import {
    CategoryItem,
    MainProductInfo,
    ProductCharacteristic,
    ProductCharacteristics,
    ProductPageTabType,
    ProductReview,
    catalogPageBreadcrumb,
    getProductImageLink,
    productAPI
} from "@/lib";
import ProductPageUpperBox from "./(upperBox)/productPageUpperBox";
import { notFound } from "next/navigation";
import ProductPageLowerBox from "./(lowerBox)/productPageLowerBox";
import { getProductLink } from "@/lib/functions/getProductLink";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import { Breadcrumb } from "@/lib/types/breadcrumbs";
import AppBreadcrumbs from "@/app/(shared)/breadcrumbs/breadcrumbs.template";

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
    breadcrumbs: Breadcrumb[];
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
        productReviews = await productAPI.getProductReviews({ alias: product });
        productSiblings = await productAPI.getProductSiblings({
            alias: product
        });

        productMainInfo.category.path = categoryPathToAlias(
            productMainInfo.category.path
        )!;
    } catch (error) {
        console.error(error);
    }

    if (!productMainInfo) return notFound();

    const breadcrumbs: Breadcrumb[] = [
        ...catalogPageBreadcrumb,
        {
            link: `/catalog/${productMainInfo.category.path}`,
            title: productMainInfo.category.title
        }
    ];
    if (productMainInfo.series)
        breadcrumbs.push({
            link: `/catalog/${productMainInfo.category.path}/${productMainInfo.series.alias}`,
            title: productMainInfo.series.title
        });
    // console.log(breadcrumbs);

    return (
        <>
            <AppBreadcrumbs linksArray={breadcrumbs} lastLink />
            <ImgModal title={productMainInfo?.title || ""} />

            <Title>{productMainInfo?.title || ""}</Title>
            <ProductPageUpperBox
                imageLinks={
                    productMainInfo.images.map((el) => ({
                        id: el.id,
                        url: getProductImageLink(el.url)
                    })) || []
                }
                stock={productMainInfo.is_available || false}
                characteristics={productShortCharacteristics}
                cartItem={{
                    url: getProductLink(category, product),
                    alias: product,
                    title: productMainInfo.title,
                    imgLink: getProductImageLink(productMainInfo.images[0].url),
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
                    category: productMainInfo.category
                }}
            />
            <ProductPageLowerBox
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
        </>
    );
};

export default ProductPage;
