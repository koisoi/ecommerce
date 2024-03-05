import ProductCard from "@/app/(shared)/productCard/productCard.template";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import CategoryPagination from "./categoryPagination.template";
import { CategoryItemsResponse, getProductImageLink } from "@/lib";
import { getProductLink } from "@/lib/functions/getProductLink";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import Paragraph from "../text/paragraph.template";

export type ProductsGridTemplateProps = CategoryItemsResponse & {
    loading?: boolean;
    page: number;
    pagesCount: number;
    // category?: string;
    // series?: string | null;
    linkBeforeQuery: string;
    search?: boolean;
};

const ProductsGridTemplate = ({
    list: products,
    totalItemCount: totalAmount,
    loading,
    page,
    pagesCount,
    // category,
    // series,
    search,
    linkBeforeQuery
}: ProductsGridTemplateProps) => {
    const cardsWrapperProps: BoxProps = {
        width: "100%",

        display: "grid",
        gap: "20px",
        gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            mlg: "1fr 1fr 1fr 1fr"
        }
    };

    const foundTextProps: TypographyProps = {
        color: "text.disabled"
    };

    return (
        <>
            <Paragraph props={foundTextProps}>
                Товаров {search ? "найдено" : "в категории"}: {totalAmount}
            </Paragraph>

            {loading && "Загрузка товаров..."}
            {!loading && (
                <>
                    {pagesCount > 1 && (
                        <CategoryPagination
                            page={page}
                            pagesCount={pagesCount}
                            linkBeforeQuery={linkBeforeQuery}
                            // category={category}
                            // series={series}
                        />
                    )}
                    <Box {...cardsWrapperProps}>
                        {products.map((item) => (
                            <ProductCard
                                key={item.id}
                                newProduct={item.is_new}
                                recommended={item.is_recommend}
                                cartItem={{
                                    url: getProductLink(
                                        categoryPathToAlias(
                                            item.category.path
                                        )!,
                                        item.alias
                                    ) /*{
                                        pathname: "/catalog/product",
                                        query: {
                                            category: item.category.path,
                                            series: item.series?.alias,
                                            product: item.alias
                                        }
                                    }*/,
                                    alias: item.alias,
                                    title: item.title,
                                    imgLink: getProductImageLink(
                                        item.images[0].url
                                    ),
                                    price: item.price,
                                    amount: 1,
                                    articul: item.articul
                                }}
                                categoryItem={item}
                            />
                        ))}
                    </Box>
                </>
            )}
        </>
    );
};

export default ProductsGridTemplate;
