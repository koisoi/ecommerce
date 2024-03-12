import Title from "@/app/(shared)/text/title.template";
import {
    CategoryItem,
    ProductCharacteristics,
    ProductPageTabType,
    ProductReview,
    backendTextRegExp
} from "@/lib";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import SimliarProductsSlider from "../../../../(shared)/simliarProductsSlider";
import AllCharacteristicsBox from "./allCharacteristicsBox.template";
import FeedbackBoxTemplate from "../../../../(shared)/feedbackBox.template";
import ProductPageTabs from "./productPageTabs";
import SectionContainer from "@/app/(shared)/section.template";

export type ProductPageLowerBoxProps = {
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

const ProductPageLowerBox = ({
    searchParams,
    fullCharasterictics,
    description,
    feedback,
    simliarProducts,
    complectation,
    product,
    category,
    series
}: ProductPageLowerBoxProps) => {
    const currentTab =
        searchParams.tab ||
        (fullCharasterictics ? "allCharasteristics" : "description");

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
        sx: {
            fontSize: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            strong: {
                color: "primary.main",
                fontWeight: "bold",
                paddingTop: "10px",
                fontSize: "1.3rem"
            }
        }
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
            gap: "10px",

            ul: {
                listStyle: "none",
                marginLeft: 0,
                paddingLeft: 0
            },

            li: {
                marginTop: "10px",
                paddingLeft: "1em",
                textIndent: "-1em"
            },

            "li:before": {
                content: '"—"',
                paddingRight: "10px",
                color: "text.primary"
            }
        }
    };

    // const simliarTitleProps: TypographyProps = {
    //     sx: {
    //         marginTop: "20px"
    //     }
    // };

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
                series={series}
                key={0}
            />
            <Box {...innerWrapperProps} key={1}>
                <SectionContainer>
                    <>
                        {currentTab === "allCharasteristics" && (
                            <AllCharacteristicsBox
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
                        {currentTab === "feedback" && (
                            <>
                                {!feedback ||
                                    (!feedback.length && (
                                        <Typography {...noTextProps}>
                                            У данного товара нет отзывов.
                                        </Typography>
                                    ))}
                                {feedback && !!feedback.length && (
                                    <FeedbackBoxTemplate feedback={feedback} />
                                )}
                            </>
                        )}
                    </>
                    {simliarProducts && !!simliarProducts.length && (
                        <>
                            <Title>Похожие товары</Title>
                            <SimliarProductsSlider products={simliarProducts} />
                        </>
                    )}
                </SectionContainer>
            </Box>
        </Box>
    );
};

export default ProductPageLowerBox;
