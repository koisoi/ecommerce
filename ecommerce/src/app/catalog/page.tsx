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

const Category = () => {
    const dispatch = useAppDispatch();
    const category = "thermal_riflescopes";

    const { loading, title, page_description, series } =
        useAppSelector(CategoryPageState);

    useEffect(() => {
        dispatch(setCanFetchCategory(true));
        const promise = dispatch(fetchCategory(category));
        promise.unwrap().catch((error) => console.error(error.message));

        return () => {
            promise.abort();
            dispatch(setCanFetchCategory(false));
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
