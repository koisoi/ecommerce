"use client";

import { useAppSelector } from "@/lib";
import { GlobalState } from "@/lib/slices/global.slice";
import CategoriesMenuTemplate from "./categoriesMenu.template";

const CategoriesMenu = () => {
    const { categoryImagesLoading, categories } = useAppSelector(GlobalState);

    return (
        <CategoriesMenuTemplate
            loading={categoryImagesLoading}
            categories={categories}
        />
    );
};

export default CategoriesMenu;
