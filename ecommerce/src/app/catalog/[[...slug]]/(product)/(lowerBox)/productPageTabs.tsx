"use client";

import {
    ProductCharacteristics,
    ProductPageTabType,
    ProductReview
} from "@/lib";
import { getProductLink } from "@/lib/functions/getProductLink";
import { Tab, TabProps, Tabs, TabsProps } from "@mui/material";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";

const ProductPageTabs = ({
    currentTab,
    fullCharasterictics,
    description,
    feedback,
    complectation,
    product,
    category,
    series
}: {
    currentTab: ProductPageTabType;
    fullCharasterictics?: ProductCharacteristics | null;
    description?: string | null;
    feedback?: ProductReview[] | null;
    complectation?: string | null;
    product: string;
    category: string;
    series?: string;
}) => {
    const router = useRouter();

    const handleTabChange = (_: SyntheticEvent<Element, Event>, value: any) => {
        // router.replace({
        //     pathname: router.pathname,
        //     query: {
        //         ...router.query,
        //         tab: value
        //     }
        // });
        router.replace(getProductLink(category, product) + `?tab=${value}`, {
            scroll: false
        });
    };

    const tabsProps: TabsProps = {
        value: currentTab,
        onChange: handleTabChange,

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
            {(fullCharasterictics ||
                description ||
                complectation ||
                (feedback && feedback.length)) && (
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
                    {/* {feedback && feedback.length && (
                        <Tab
                            value={"feedback"}
                            label={"Отзывы"}
                            {...tabProps}
                        />
                    )} */}
                </Tabs>
            )}
        </>
    );
};

export default ProductPageTabs;
