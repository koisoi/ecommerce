"use client";

import { useEffect } from "react";
import ProductPageTemplate from "./page.template";
import {
    ProductPageState,
    fetchProduct,
    resetBreadcrumbsState,
    setCanFetchProduct,
    setCurrentCategoryTitle,
    setCurrentProductTitle,
    setCurrentSeriesTitle,
    setOpenedImgLink,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import { notFound, useSearchParams } from "next/navigation";

const ProductPage = () => {
    const searchParams = useSearchParams();
    const alias: string | null = searchParams.get("product");
    const category: string | null = searchParams.get("category");
    const series: string | null = searchParams.get("series");

    const dispatch = useAppDispatch();

    const {
        id,
        title,
        is_new,
        is_recommend,
        loading,
        openedImgLink,
        wrongProductQuery: wrongQuery
    } = useAppSelector(ProductPageState);

    const handleImgClose: (
        event: {},
        reason: "backdropClick" | "escapeKeyDown"
    ) => void = () => {
        dispatch(setOpenedImgLink(null));
    };

    useEffect(() => {
        dispatch(setCanFetchProduct(true));
        const promise = dispatch(fetchProduct({ alias, category }));
        promise
            .unwrap()
            .then((val) => {
                if (!val) return;

                dispatch(setCurrentCategoryTitle(val[0].category.title));
                dispatch(setCurrentSeriesTitle(val[0].series?.title || ""));
                dispatch(setCurrentProductTitle(title));
            })
            .catch((error) => console.error(error.message));

        return () => {
            promise.abort();
            dispatch(setCanFetchProduct(false));
            dispatch(resetBreadcrumbsState());
        };
    }, [alias, category, series]);

    if (wrongQuery || !alias || !category) {
        return notFound();
    }

    return (
        <ProductPageTemplate
            title={title}
            openedImgLink={openedImgLink}
            onImgClose={handleImgClose}
            loading={loading}
        />
    );
};

export default ProductPage;
