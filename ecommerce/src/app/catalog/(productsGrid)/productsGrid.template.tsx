import ProductCard from "@/app/(shared)/productCard/productCard.template";
import { Box, BoxProps, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import CategoryPagination from "./categoryPagination.template";
import { CategoryItemsResponse } from "@/lib";

const ProductsGridTemplate = ({
    list: products,
    totalItemCount: totalAmount,
    loading,
    page,
    pagesCount,
    onPageChange,
    category,
    series
}: CategoryItemsResponse & {
    loading: boolean;
    page: number;
    pagesCount: number;
    onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
    category: string;
    series?: string | null;
}) => {
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

    return (
        <>
            <Typography color="text.disabled" gutterBottom>
                Товаров в категории: {totalAmount}
            </Typography>

            {loading && "Загрузка товаров..."}
            {!loading && (
                <>
                    {pagesCount > 1 && (
                        <CategoryPagination
                            page={page}
                            pagesCount={pagesCount}
                            onPageChange={onPageChange}
                        />
                    )}
                    <Box {...cardsWrapperProps}>
                        {products.map((item) => (
                            <ProductCard
                                key={item.id}
                                imageLink={item.images[0].url}
                                title={item.title}
                                articul={item.articul}
                                price={item.price}
                                newProduct={item.is_new}
                                // sale={item.sale}
                                recommended={item.is_recommend}
                                productLink={{
                                    pathname: "/catalog/product",
                                    query: {
                                        category: item.category.path,
                                        series: item.series?.alias,
                                        product: item.alias
                                    }
                                }}
                            />
                        ))}
                    </Box>
                </>
            )}
        </>
    );
};

export default ProductsGridTemplate;
