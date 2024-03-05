import { SyntheticEvent, useState } from "react";
import ProductPageLowerBox from "./productPageLowerBox";
import { ProductPageState, ProductPageTabType, useAppSelector } from "@/lib";

const ProductPageLowerBoxFC = () => {
    const {
        complectation,
        fullCharacteristics,
        reviews,
        siblings,
        loading,
        text
    } = useAppSelector(ProductPageState);

    const [currentTab, setCurrentTab] = useState<ProductPageTabType>(
        fullCharacteristics ? "allCharasteristics" : "description"
    );

    const handleTabChange: (
        event: SyntheticEvent<Element, Event>,
        value: ProductPageTabType
    ) => void = (_, value) => {
        setCurrentTab(value);
    };

    return (
        <ProductPageLowerBox
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

export default ProductPageLowerBoxFC;
