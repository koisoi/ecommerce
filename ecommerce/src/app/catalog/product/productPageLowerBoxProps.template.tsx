import Title from "@/app/(shared)/title.template";
import { CategoryItem, backendTextRegExp } from "@/lib";
import {
    Box,
    BoxProps,
    Card,
    CardContent,
    CardProps,
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

export type ProductPageLowerBoxProps = {
    currentTab: "allCharasteristics" | "description" | "feedback";
    onTabChange: (
        event: SyntheticEvent<Element, Event>,
        value: "allCharasteristics" | "description" | "feedback"
    ) => void;
    fullCharasterictics: string;
    description: string;
    feedback: { id: number; name: string; date: string; comment: string }[];
    simliarProducts: CategoryItem[];
};

const ProductPageLowerBox = ({
    currentTab,
    onTabChange,
    fullCharasterictics,
    description,
    feedback,
    simliarProducts
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

    const characteristicsBoxProps: BoxProps = {
        dangerouslySetInnerHTML: {
            __html: fullCharasterictics.replace(backendTextRegExp, "<br />")
        }
    };

    const descriptionBoxProps: BoxProps = {
        dangerouslySetInnerHTML: {
            __html: description.replace(backendTextRegExp, "<br />")
        }
    };

    const feedbackWrapperProps: BoxProps = {
        display: "grid",
        gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr"
        },
        gap: "20px"
    };

    const feedbackProps: CardProps = {
        variant: "outlined",

        sx: {
            height: "100%",
            width: "100%"
        }
    };

    const feedbackNameDateBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",

        marginBottom: "10px"
    };

    const feedbackNameProps: TypographyProps = {
        color: "primary.main",
        fontSize: "1rem",
        fontWeight: "bold"
    };

    const feedbackDateProps: TypographyProps = {
        color: "text.disabled",
        fontSize: "0.85rem"
    };

    const feedbackCommentProps: TypographyProps = {
        fontSize: "0.95rem"
    };

    const simliarTitleProps: TypographyProps = {
        sx: {
            marginTop: "20px"
        }
    };

    return (
        <Box {...wrapperProps}>
            <Tabs {...tabsProps}>
                <Tab
                    value={"allCharasteristics"}
                    label={"Все характеристики"}
                    {...tabProps}
                />
                <Tab value={"description"} label={"Описание"} {...tabProps} />
                <Tab value={"feedback"} label={"Отзывы"} {...tabProps} />
            </Tabs>
            <Box {...innerWrapperProps}>
                {currentTab === "allCharasteristics" && (
                    <Box {...characteristicsBoxProps} />
                )}
                {currentTab === "description" && (
                    <Box {...descriptionBoxProps} />
                )}
                {currentTab === "feedback" && (
                    <Box {...feedbackWrapperProps}>
                        {feedback.map((fb) => (
                            <Card key={fb.id} {...feedbackProps}>
                                <CardContent>
                                    <Box {...feedbackNameDateBoxProps}>
                                        <Typography {...feedbackNameProps}>
                                            {fb.name}
                                        </Typography>
                                        <Typography {...feedbackDateProps}>
                                            {fb.date.replaceAll("-", ".")}
                                        </Typography>
                                    </Box>
                                    <Typography {...feedbackCommentProps}>
                                        {fb.comment}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                )}
                <Title props={simliarTitleProps}>Похожие товары</Title>
                <SimliarProductsSlider products={simliarProducts} />
                <OurAdvantages props={{ marginTop: "20px" }} />
            </Box>
        </Box>
    );
};

export default ProductPageLowerBox;
