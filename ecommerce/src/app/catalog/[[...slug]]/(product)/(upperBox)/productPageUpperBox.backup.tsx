import ProductPageUpperBox from "./productPageUpperBox";
import { ProductPageState, getProductImageLink, useAppSelector } from "@/lib";
import { getProductLink } from "@/lib/functions/getProductLink";

const ProductPageUpperBoxFC = () => {
    const {
        id,
        articul,
        images,
        title,
        price,
        is_new,
        is_recommend,
        is_available,
        shortCharacteristics,
        loading,
        alias,
        category,
        series
    } = useAppSelector(ProductPageState);

    return (
        <ProductPageUpperBox
            imageLinks={images.map((el) => ({
                id: el.id,
                url: getProductImageLink(el.url)
            }))}
            stock={is_available || false}
            characteristics={shortCharacteristics}
            cartItem={{
                url: getProductLink(category.path, alias) /*{
                    pathname: "/catalog/product",
                    query: {
                        category: category.path,
                        series: series?.alias,
                        product: alias
                    }
                }*/,
                alias,
                title,
                imgLink: getProductImageLink(images[0].url),
                price,
                amount: 1,
                articul
            }}
            categoryItem={{
                id,
                articul,
                images,
                title,
                price,
                alias,
                is_new,
                is_recommend,
                category
            }}
        />
    );
};

export default ProductPageUpperBoxFC;
