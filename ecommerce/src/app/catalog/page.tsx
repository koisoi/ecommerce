"use client";

import {
    CategoryPageState,
    fetchCategory,
    fetchSeriesSiblings,
    resetBreadcrumbsState,
    setCanFetchCategory,
    setCanFetchSeriesSiblings,
    setCurrentCategoryTitle,
    setCurrentSeriesTitle,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import CategoryTemplate from "./page.template";
import { useEffect } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { headers } from "next/headers";

const Category = () => {
    const searchParams = useSearchParams();
    const category: string | null = searchParams.get("category");
    const series: string | null = searchParams.get("series");

    const dispatch = useAppDispatch();

    const {
        loading,
        title,
        page_description,
        series: seriesArray,
        category: currentCategory,
        parent_class
    } = useAppSelector(CategoryPageState);

    useEffect(() => {
        dispatch(setCanFetchCategory(true));
        dispatch(setCanFetchSeriesSiblings(true));

        return () => {
            dispatch(setCanFetchCategory(false));
            dispatch(setCanFetchSeriesSiblings(false));
            dispatch(resetBreadcrumbsState());
        };
    }, []);

    useEffect(() => {
        const promise = dispatch(fetchCategory({ category, series }));
        promise
            .unwrap()
            .then((val) => {
                if (!val || !val.category) return;

                dispatch(setCurrentCategoryTitle(val.category.title));
                dispatch(setCurrentSeriesTitle(series ? val.title : null));
            })
            .catch((error) => console.error(error.message));

        return () => {
            promise.abort();
        };
    }, [category, series]);

    useEffect(() => {
        const seriesSiblingsPromise = dispatch(
            fetchSeriesSiblings({ category, series })
        );
        seriesSiblingsPromise
            .unwrap()
            .catch((error) => console.error(error.message));

        return () => {
            seriesSiblingsPromise.abort();
        };
    }, [parent_class]);

    // TODO: добавить меню каталога
    if (!category) {
        return notFound();
    }

    return (
        <CategoryTemplate
            loading={loading}
            alias={category}
            title={series ? title : currentCategory?.title || ""}
            page_description={page_description}
            series={seriesArray}
            seriesAlias={series}
            parent_class={parent_class}
        />
    );
};

export default Category;
