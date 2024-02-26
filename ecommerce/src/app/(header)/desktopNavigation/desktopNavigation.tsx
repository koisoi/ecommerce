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
    const params = useSearchParams();
    // const [selectedCategory, setSelectedCategory] = useState<string | false>(
    //     false
    // );

    // const handleCategoryChange: (
    //     event: SyntheticEvent<Element, Event>,
    //     value: any
    // ) => void = (_, value) => {
    //     setSelectedCategory(value);
    // };

    return (
        <HeaderDesktopNavigationTemplate
            categories={categories}
            onTabClick={onTabClick}
            catalogPath={params.get("category")}
        />
    );
};

export default HeaderDesktopNavigation;
