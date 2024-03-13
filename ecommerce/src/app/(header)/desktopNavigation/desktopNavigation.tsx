"use client";

import { usePathname } from "next/navigation";
import HeaderDesktopNavigationTemplate from "./desktopNavigation.template";
import { PageData } from "@/lib";

const HeaderDesktopNavigation = ({
    categories,
    onTabClick
}: {
    categories: PageData[];
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
