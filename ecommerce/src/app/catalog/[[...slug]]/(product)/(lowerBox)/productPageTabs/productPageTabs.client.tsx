"use client";

import {
    ProductCharacteristics,
    ProductPageTabType,
    ProductReview,
    getProductLink
} from "@/lib";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";
import ProductPageTabsTemplate from "./productPageTabsTemplate";

const ProductPageTabs = ({
    currentTab,
    fullCharasterictics,
    description,
    feedback,
    complectation,
    product,
    category
}: {
    currentTab: ProductPageTabType;
    fullCharasterictics?: ProductCharacteristics | null;
    description?: string | null;
    feedback?: ProductReview[] | null;
    complectation?: string | null;
    product: string;
    category: string;
}) => {
    const router = useRouter();

    const handleTabChange = (_: SyntheticEvent<Element, Event>, value: any) => {
        router.replace(getProductLink(category, product) + `?tab=${value}`, {
            scroll: false
        });
    };

    return (
        <ProductPageTabsTemplate
            currentTab={currentTab}
            fullCharasterictics={fullCharasterictics}
            description={description}
            feedback={feedback}
            complectation={complectation}
            onTabChange={handleTabChange}
        />
    );
};

export default ProductPageTabs;
