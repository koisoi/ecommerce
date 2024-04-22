import {
    ProductCharacteristics,
    ProductPageTabType,
    ProductReview
} from "@/lib";
import { Tab, TabProps, Tabs, TabsProps } from "@mui/material";
import { SyntheticEvent } from "react";

const ProductPageTabsTemplate = ({
    currentTab,
    fullCharasterictics,
    description,
    feedback,
    complectation,
    onTabChange
}: {
    currentTab: ProductPageTabType;
    fullCharasterictics?: ProductCharacteristics | null;
    description?: string | null;
    feedback?: ProductReview[] | null;
    complectation?: string | null;
    onTabChange: (event: SyntheticEvent<Element, Event>, value: any) => void;
}) => {
    const tabsProps: TabsProps = {
        value: currentTab,
        onChange: onTabChange,

        variant: "scrollable",

        sx: {
            borderBottom: "1px solid",
            borderColor: "divider"
        }
    };

    const tabProps: TabProps = {
        sx: {
            fontFamily: "inherit",
            fontSize: "1.5rem",
            textTransform: "none"
        }
    };

    return (
        <>
            {/*{!!(
                fullCharasterictics ||
                description ||
                complectation ||
                (feedback && feedback.length)
            ) && (*/}
            <Tabs {...tabsProps}>
                {fullCharasterictics && (
                    <Tab
                        value={"allCharasteristics"}
                        label={"Все характеристики"}
                        {...tabProps}
                    />
                )}
                {description && (
                    <Tab
                        value={"description"}
                        label={"Описание"}
                        {...tabProps}
                    />
                )}
                {complectation && (
                    <Tab
                        value={"complectation"}
                        label={"Комплектация"}
                        {...tabProps}
                    />
                )}
                <Tab value={"delivery"} label={"Доставка"} {...tabProps} />
            </Tabs>
            {/* )} */}
        </>
    );
};

export default ProductPageTabsTemplate;
