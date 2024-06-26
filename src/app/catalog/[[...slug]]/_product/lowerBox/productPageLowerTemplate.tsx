import Title from "@/app/_shared/text/title";
import {
    CategoryItem,
    ProductCharacteristics,
    ProductPageTabType,
    ProductReview,
    backendTextRegExp,
    innerHtmlStyles
} from "@/lib";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import SimliarProductsSliderTemplate from "../../../../_shared/simliarProductsSliderTemplate";
import AllCharacteristicsBoxTemplate from "./allCharacteristicsBoxTemplate";
import ProductPageTabs from "./productPageTabs/productPageTabs.client";
import SectionContainer from "@/app/_shared/sectionContainer";
import DeliveryWays from "@/app/_shared/deliveryWays";

export type ProductPageLowerTemplateProps = {
    searchParams: { page?: number; tab?: ProductPageTabType };
    fullCharasterictics?: ProductCharacteristics | null;
    description?: string | null;
    feedback?: ProductReview[] | null;
    simliarProducts: CategoryItem[];
    complectation?: string | null;
    product: string;
    category: string;
    series?: string;
};

const ProductPageLowerTemplate = ({
    searchParams,
    fullCharasterictics,
    description,
    feedback,
    simliarProducts,
    complectation,
    product,
    category,
    series
}: ProductPageLowerTemplateProps) => {
    const currentTab =
        searchParams.tab ||
        (fullCharasterictics
            ? "allCharasteristics"
            : description
            ? "description"
            : "delivery");

    const wrapperProps: BoxProps = {
        width: "100%"
    };

    const innerWrapperProps: BoxProps = {
        width: "100%",
        paddingY: "0.8rem"
    };

    const descriptionBoxProps: BoxProps = {
        dangerouslySetInnerHTML: description
            ? {
                  __html: description.replace(backendTextRegExp, "<br />")
              }
            : undefined,
        sx: innerHtmlStyles
    };

    const complectationBoxProps: BoxProps = {
        dangerouslySetInnerHTML: complectation
            ? {
                  __html: complectation.replace(backendTextRegExp, "<br />")
              }
            : undefined,
        sx: {
            fontSize: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",

            ul: {
                listStyle: "none",
                marginLeft: 0,
                paddingLeft: 0
            },

            li: {
                marginTop: "1rem",
                paddingLeft: "1em",
                textIndent: "-1em"
            },

            "li:before": {
                content: '"—"',
                paddingRight: "1rem",
                color: "text.primary"
            }
        }
    };

    const noTextProps: TypographyProps = {
        color: "text.disabled"
    };

    return (
        <Box {...wrapperProps}>
            <ProductPageTabs
                currentTab={currentTab}
                fullCharasterictics={fullCharasterictics}
                description={description}
                feedback={feedback}
                complectation={complectation}
                product={product}
                category={category}
                key={0}
            />
            <Box {...innerWrapperProps} key={1}>
                <SectionContainer>
                    <>
                        {currentTab === "allCharasteristics" && (
                            <AllCharacteristicsBoxTemplate
                                fullCharacteristics={fullCharasterictics}
                            />
                        )}
                        {currentTab === "description" && (
                            <>
                                {!description && (
                                    <Typography {...noTextProps}>
                                        У данного товара нет описания.
                                    </Typography>
                                )}
                                {!!description && (
                                    <Box {...descriptionBoxProps} />
                                )}
                            </>
                        )}
                        {currentTab === "complectation" && (
                            <>
                                {!complectation && (
                                    <Typography {...noTextProps}>
                                        Для данного товара не указана
                                        комплектация.
                                    </Typography>
                                )}
                                {complectation && (
                                    <Box {...complectationBoxProps} />
                                )}
                            </>
                        )}
                        {currentTab === "delivery" && (
                            <noindex>
                                <DeliveryWays />
                            </noindex>
                        )}
                    </>
                    {simliarProducts && !!simliarProducts.length && (
                        <>
                            <Title>Похожие товары</Title>
                            <SimliarProductsSliderTemplate
                                products={simliarProducts}
                            />
                        </>
                    )}
                </SectionContainer>
            </Box>
        </Box>
    );
};

export default ProductPageLowerTemplate;
