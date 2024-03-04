import ProductCard from "@/app/(shared)/productCard/productCard.template";
import { Box, BoxProps, Typography } from "@mui/material";
import CategoryPagination from "./categoryPagination.template";
import { CategoryItemsResponse, getProductImageLink } from "@/lib";

export type ProductsGridTemplateProps = CategoryItemsResponse & {
    loading?: boolean;
    page: number;
    pagesCount: number;
    category: string;
    series?: string | null;
    search?: boolean;
};

const ProductsGridTemplate = ({
    list: products,
    totalItemCount: totalAmount,
    loading,
    page,
    pagesCount,
    category,
    series,
    search
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

    return (
        <>
            <Typography color="text.disabled" gutterBottom>
                Товаров {search ? "найдено" : "в категории"}: {totalAmount}
            </Typography>

            {loading && "Загрузка товаров..."}
            {!loading && (
                <>
                    {pagesCount > 1 && (
                        <CategoryPagination
                            page={page}
                            pagesCount={pagesCount}
                            category={category}
                            series={series}
                        />
                    )}
                    <Box {...cardsWrapperProps}>
                        {products.map((item) => (
                            <ProductCard
                                key={item.id}
                                newProduct={item.is_new}
                                recommended={item.is_recommend}
                                cartItem={{
                                    url: {
                                        pathname: "/catalog/product",
                                        query: {
                                            category: item.category.path,
                                            series: item.series?.alias,
                                            product: item.alias
                                        }
                                    },
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
