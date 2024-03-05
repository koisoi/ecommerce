"use client";

import { usePathname, useSearchParams } from "next/navigation";
import HeaderDesktopNavigationTemplate from "./desktopNavigation.template";
import { CategoryListItem } from "@/lib";

const HeaderDesktopNavigation = ({
    categories,
    onTabClick
}: {
    categories: CategoryListItem[];
    onTabClick: (path: string) => void;
}) => {
    const params = usePathname();

    return (
        <HeaderDesktopNavigationTemplate
            categories={categories}
            onTabClick={onTabClick}
            catalogPath={params}
        />
    );
};

export default HeaderDesktopNavigation;
