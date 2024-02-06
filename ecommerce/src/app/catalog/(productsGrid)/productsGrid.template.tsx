import ProductCard from "@/app/(shared)/productCard/productCard.template";
import { CategoryItemsResponse } from "@/lib/types";
import {
    Box,
    BoxProps,
    Pagination,
    PaginationProps,
    Typography
} from "@mui/material";
import { ChangeEvent } from "react";
import CategoryPagination from "./categoryPagination";

const ProductsGridTemplate = ({
    list: products,
    totalItemCount: totalAmount,
    loading,
    page,
    pagesCount,
    onPageChange
}: CategoryItemsResponse & {
    loading: boolean;
    page: number;
    pagesCount: number;
    onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
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
                    <CategoryPagination
                        page={page}
                        pagesCount={pagesCount}
                        onPageChange={onPageChange}
                    />
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
                            />
                        ))}
                    </Box>
                </>
            )}
        </>
    );
};

export default ProductsGridTemplate;
