"use client";

import {
    ProductsCategoryGridState,
    fetchCategoryItems,
    setCanFetchCategoryItems,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import ProductsGridTemplate from "./productsGrid.template";
import { ChangeEvent, useEffect, useState } from "react";

const ProductsCategoryGrid = ({
    category,
    series
}: {
    category: string;
    series?: string;
}) => {
    const dispatch = useAppDispatch();
    const productsPerPage = 12;

    const [page, setPage] = useState<number>(1);
    const [pagesCount, setPagesCount] = useState<number>(0);

    const {
        loading,
        totalItemCount: totalAmount,
        list: products
    } = useAppSelector(ProductsCategoryGridState);

    const handlePageChange = (_: ChangeEvent<unknown>, page: number): void =>
        setPage(page);

    useEffect(() => {
        dispatch(setCanFetchCategoryItems(true));
        const promise = dispatch(
            fetchCategoryItems({
                category,
                series,
                productsPerPage,
                page
            })
        );
        promise.catch((error) => console.error(error.message));

        return () => {
            promise.abort();
            dispatch(setCanFetchCategoryItems(false));
        };
    }, [page, category, series]);

    useEffect(() => {
        setPagesCount(Math.ceil(totalAmount / productsPerPage));
    }, [totalAmount]);

    return (
        <ProductsGridTemplate
            list={products}
            totalItemCount={totalAmount}
            loading={loading}
            page={page}
            pagesCount={pagesCount}
            onPageChange={handlePageChange}
        />
    );
};

export default ProductsCategoryGrid;
