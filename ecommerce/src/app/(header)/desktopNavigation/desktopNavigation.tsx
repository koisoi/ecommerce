"use client";

import { useSearchParams } from "next/navigation";
import HeaderDesktopNavigationTemplate from "./desktopNavigation.template";
import { CategoryListItem } from "@/lib";

const HeaderDesktopNavigation = ({
    categories,
    onTabClick
}: {
    categories: CategoryListItem[];
    onTabClick: (path: string) => void;
}) => {
    const params = useSearchParams();

    return (
        <HeaderDesktopNavigationTemplate
            categories={categories}
            onTabClick={onTabClick}
            catalogPath={params.get("category")}
        />
    );
};

export default HeaderDesktopNavigation;
