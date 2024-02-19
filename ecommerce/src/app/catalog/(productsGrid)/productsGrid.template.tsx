import ProductCard from "@/app/(shared)/productCard/productCard.template";
import { Box, BoxProps, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import CategoryPagination from "./categoryPagination.template";
import {
    CategoryItem,
    CategoryItemsResponse,
    getProductImageLink
} from "@/lib";
import FastOrderForm from "@/app/(fastOrderForm)/fastOrderForm";

const ProductsGridTemplate = ({
    list: products,
    totalItemCount: totalAmount,
    loading,
    page,
    pagesCount,
    onPageChange,
    category,
    series,
    fastOrderItem
}: CategoryItemsResponse & {
    loading: boolean;
    page: number;
    pagesCount: number;
    onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
    category: string;
    series?: string | null;
    fastOrderItem?: CategoryItem;
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
            <FastOrderForm item={fastOrderItem} />

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
                                newProduct={item.is_new}
                                // sale={item.sale}
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
