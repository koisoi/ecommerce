"use client";

import CategoryTemplate from "./page.template";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
    CategoryPageState,
    fetchCategory,
    setCanFetch
} from "@/lib/slices/categoryPage.slice";

const Category = () => {
    const dispatch = useAppDispatch();
    const category = "thermal_riflescopes";

    const { loading, title, page_description, series } =
        useAppSelector(CategoryPageState);

    useEffect(() => {
        dispatch(setCanFetch(true));
        const promise = dispatch(fetchCategory(category));
        promise.unwrap().catch((error) => console.error(error.message));

        return () => {
            promise.abort();
            dispatch(setCanFetch(false));
        };
    }, []);

    return (
        <CategoryTemplate
            loading={loading}
            category={category}
            title={title}
            page_description={page_description}
            series={series}
        />
    );
};

export default Category;
