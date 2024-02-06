"use client";

import CategoryTemplate from "./page.template";
import { categoryService } from "../../lib/services/catalog.service";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
    CategoryPageState,
    setLoading,
    setSeries,
    setPageDesciprtion,
    setTitle
} from "@/lib/slices/categoryPage.slice";

const Category = () => {
    const dispatch = useAppDispatch();
    const category = "thermal_riflescopes";

    const { loading, title, page_description, series } =
        useAppSelector(CategoryPageState);

    useEffect(() => {
        categoryService
            .getCategory(category)
            .then((val) => {
                dispatch(setTitle(val.title));
                dispatch(setPageDesciprtion(val.page_description));
                dispatch(setSeries(val.series));

                dispatch(setLoading(false));
            })
            .catch((error) => console.log(error.message));
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
