import ProductCard from "@/app/(shared)/productCard/productCard.template";
import { Box, BoxProps, CardProps, TypographyProps } from "@mui/material";
import CategoryPagination from "./categoryPagination.template";
import { CategoryItemsResponse, getProductImageLink } from "@/lib";
import { getProductLink } from "@/lib/functions/getProductLink";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import Paragraph from "../text/paragraph.template";

export type ProductsGridTemplateProps = CategoryItemsResponse & {
    loading?: boolean;
    page: number;
    pagesCount: number;
    url: string;
    search?: boolean;
};

const ProductsGridTemplate = ({
    list: products,
    totalItemCount: totalAmount,
    loading,
    page,
    pagesCount,
    search,
    url
}: ProductsGridTemplateProps) => {
    const cardsWrapperProps: BoxProps = {
        width: "100%",

        display: "flex",
        gap: "1rem",
        justifyContent: "flex-start",

        sx: {
            flexFlow: "row wrap"
        }
    };

    const foundTextProps: TypographyProps = {
        color: "text.disabled"
    };

    const productCardProps: CardProps = {
        sx: {
            maxWidth: { xs: "unset", smd: "350px", md: "250px" } //smd?
        }
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
                            url={url}
                        />
                    )}
                    <Box {...cardsWrapperProps}>
                        {products.map((item) => {
                            return (
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
                                        ),
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
                                    initialCardProps={productCardProps}
                                />
                            );
                        })}
                    </Box>
                    {pagesCount > 1 && (
                        <CategoryPagination
                            page={page}
                            pagesCount={pagesCount}
                            url={url}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default ProductsGridTemplate;
