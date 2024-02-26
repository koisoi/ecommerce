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
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CategoriesMenu from "./(categoriesMenu)/categoriesMenu";
import Loading from "../(shared)/loading.template";

const CategoryFC = () => {
    const searchParams = useSearchParams();
    const dispatch = useAppDispatch();
    const category: string | null = searchParams.get("category");
    const series: string | null = searchParams.get("series");

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
        if (!category) return;

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
        if (!category) return;

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
        return <CategoriesMenu />;
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

const Category = () => {
    return (
        <Suspense fallback={<Loading>Загрузка...</Loading>}>
            <CategoryFC />
        </Suspense>
    );
};

export default Category;
