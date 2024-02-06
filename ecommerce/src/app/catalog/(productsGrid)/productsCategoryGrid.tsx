"use client";

import ProductsGridTemplate from "./productsGrid.template";
import { categoryService } from "../../../lib/services/catalog.service";
import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
    ProductsCategoryGridState,
    setLoading,
    setProducts,
    setTotalAmount
} from "@/lib/slices/productsCategoryGrid.slice";

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

    const handlePageChange = (
        event: ChangeEvent<unknown>,
        page: number
    ): void => setPage(page);

    useEffect(() => {
        dispatch(setLoading(true));
        categoryService
            .getCategoryItems({
                category,
                series,
                productsPerPage,
                page
            })
            .then((val) => {
                console.log(val);
                dispatch(setTotalAmount(val.totalItemCount));
                dispatch(setProducts(val.list));
                setPagesCount(Math.trunc(val.totalItemCount / productsPerPage));

                dispatch(setLoading(false));
            });
    }, [page]);

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
