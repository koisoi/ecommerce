"use client";

import { landingConfig } from "../config";
import CategoriesMenuTemplate from "./categoriesMenu.template";

const CategoriesMenu = () => {
    // const { categoryImagesLoading, categories } = useAppSelector(GlobalState);

    return (
        <CategoriesMenuTemplate
            // loading={categoryImagesLoading}
            categories={landingConfig.categories}
        />
    );
};

export default CategoriesMenu;
