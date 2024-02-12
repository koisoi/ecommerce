"use client";

import {
    CategoryPageState,
    fetchCategory,
    setCanFetchCategory,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import CategoryTemplate from "./page.template";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Category = () => {
    const searchParams = useSearchParams();
    const category: string | null = searchParams.get("category");
    const series: string | null = searchParams.get("series");

    const dispatch = useAppDispatch();

    const {
        loading,
        title,
        page_description,
        series: seriesArray
    } = useAppSelector(CategoryPageState);

    useEffect(() => {
        dispatch(setCanFetchCategory(true));
        const promise = dispatch(fetchCategory({ category, series }));
        promise.unwrap().catch((error) => console.error(error.message));

        return () => {
            promise.abort();
            dispatch(setCanFetchCategory(false));
        };
    }, [category, series]);

    // TODO: добавить меню каталога
    if (!category) return null;

    return (
        <CategoryTemplate
            loading={loading}
            alias={category}
            title={title}
            page_description={page_description}
            series={seriesArray}
            seriesAlias={series}
        />
    );
};

export default Category;
