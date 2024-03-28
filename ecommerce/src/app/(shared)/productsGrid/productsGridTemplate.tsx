import ProductCardTemplate from "@/app/(shared)/productCardTemplate";
import { Box, BoxProps, CardProps, TypographyProps } from "@mui/material";
import CategoryPagination from "./categoryPagination/categoryPagination.client";
import {
    CategoryItemsResponse,
    categoryPathToAlias,
    getLinkDomain,
    getProductLink
} from "@/lib";
import Paragraph from "../text/paragraph";

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

    const subtleTextProps: TypographyProps = {
        color: "text.disabled"
    };

    const productCardProps: CardProps = {
        sx: {
            maxWidth: { xs: "unset", smd: "350px", md: "250px" } //smd?
        }
    };

    return (
        <>
            <Paragraph props={subtleTextProps}>
                Товаров {search ? "найдено" : "в категории"}: {totalAmount}
            </Paragraph>
            {page > 1 && (
                <Paragraph props={subtleTextProps}>Страница: {page}</Paragraph>
            )}

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
                                <ProductCardTemplate
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
                                        imgLink: getLinkDomain(
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
