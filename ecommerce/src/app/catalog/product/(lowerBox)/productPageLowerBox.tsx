import { SyntheticEvent, useState } from "react";
import ProductPageLowerBoxTemplate from "./productPageLowerBox.template";
import { ProductPageState, ProductPageTabType, useAppSelector } from "@/lib";

const ProductPageLowerBox = () => {
    const {
        complectation,
        fullCharacteristics,
        reviews,
        siblings,
        loading,
        text
    } = useAppSelector(ProductPageState);

    const [currentTab, setCurrentTab] =
        useState<ProductPageTabType>("allCharasteristics");

    const handleTabChange: (
        event: SyntheticEvent<Element, Event>,
        value: ProductPageTabType
    ) => void = (_, value) => {
        setCurrentTab(value);
    };

    return (
        <ProductPageLowerBoxTemplate
            currentTab={currentTab}
            onTabChange={handleTabChange}
            fullCharasterictics={fullCharacteristics}
            description={text}
            feedback={reviews}
            complectation={complectation}
            simliarProducts={siblings}
        />
    );
};

export default ProductPageLowerBox;
