import Title from "@/app/(shared)/text/title.template";
import {
    CategoryItem,
    ProductCharacteristics,
    ProductPageTabType,
    ProductReview,
    backendTextRegExp
} from "@/lib";
import {
    Box,
    BoxProps,
    Tab,
    TabProps,
    Tabs,
    TabsProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { SyntheticEvent } from "react";
import SimliarProductsSlider from "./simliarProductsSlider";
import OurAdvantages from "@/app/(shared)/ourAdvantages.template";
import AllCharacteristicsBox from "./allCharacteristicsBox.template";
import FeedbackBoxTemplate from "./feedbackBox.template";

export type ProductPageLowerBoxProps = {
    currentTab: ProductPageTabType;
    onTabChange: (
        event: SyntheticEvent<Element, Event>,
        value: ProductPageTabType
    ) => void;
    fullCharasterictics?: ProductCharacteristics;
    description?: string;
    feedback?: ProductReview[];
    simliarProducts: CategoryItem[];
    complectation?: string;
};

const ProductPageLowerBoxTemplate = ({
    currentTab,
    onTabChange,
    fullCharasterictics,
    description,
    feedback,
    simliarProducts,
    complectation
}: ProductPageLowerBoxProps) => {
    const wrapperProps: BoxProps = {
        width: "100%",
        marginTop: "15px"
    };

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

    const innerWrapperProps: BoxProps = {
        width: "100%",
        paddingY: "2rem"
    };

    const descriptionBoxProps: BoxProps = {
        dangerouslySetInnerHTML: description
            ? {
                  __html: description.replace(backendTextRegExp, "<br />")
              }
            : undefined,
        sx: {
            fontSize: "1rem"
        }
    };

    const complectationBoxProps: BoxProps = {
        dangerouslySetInnerHTML: complectation
            ? {
                  __html: complectation.replace(backendTextRegExp, "<br />")
              }
            : undefined,
        sx: {
            fontSize: "1rem"
        }
    };

    const simliarTitleProps: TypographyProps = {
        sx: {
            marginTop: "20px"
        }
    };

    const noTextProps: TypographyProps = {
        color: "text.disabled"
    };

    return (
        <Box {...wrapperProps}>
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
                    {feedback && feedback.length && (
                        <Tab
                            value={"feedback"}
                            label={"Отзывы"}
                            {...tabProps}
                        />
                    )}
                </Tabs>
            )}
            <Box {...innerWrapperProps}>
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
                        {!!description && <Box {...descriptionBoxProps} />}
                    </>
                )}
                {currentTab === "complectation" && (
                    <>
                        {!complectation && (
                            <Typography {...noTextProps}>
                                Для данного товара не указана комплектация.
                            </Typography>
                        )}
                        {complectation && <Box {...complectationBoxProps} />}
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
                {simliarProducts && !!simliarProducts.length && (
                    <>
                        <Title props={simliarTitleProps}>Похожие товары</Title>
                        <SimliarProductsSlider products={simliarProducts} />
                    </>
                )}
                <OurAdvantages props={{ marginTop: "80px" }} />
            </Box>
        </Box>
    );
};

export default ProductPageLowerBoxTemplate;
