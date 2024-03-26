import SectionContainer from "@/app/(shared)/sectionContainer";
import Title from "@/app/(shared)/text/title";
import { ProductCharacteristics } from "@/lib";
import {
    Box,
    BoxProps,
    Divider,
    Tooltip,
    Typography,
    TypographyProps
} from "@mui/material";

const AllCharacteristicsBoxTemplate = ({
    fullCharacteristics
}: {
    fullCharacteristics?: ProductCharacteristics | null;
}) => {
    const noTextProps: TypographyProps = {
        color: "text.disabled"
    };

    const characteristicTextProps: TypographyProps = {
        component: "dd",
        display: "inline"
    };

    const characteristicTitleProps: TypographyProps = {
        ...characteristicTextProps,
        component: "dt",
        fontWeight: "bold",
        fontSize: "1rem"
    };

    const titleProps: TypographyProps = {
        color: "text.dark",
        fontWeight: "bold",
        fontSize: "1.3rem",
        lineHeight: 1,
        paddingY: "0.5rem"
    };

    const characteristicsBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "0.5rem"
    };

    const descriptionListProps: BoxProps = {
        component: "dl"
    };

    return (
        <Box>
            {(!fullCharacteristics ||
                !Object.entries(fullCharacteristics).length) && (
                <Typography {...noTextProps}>
                    У данного товара нет полных характеристик.
                </Typography>
            )}
            {fullCharacteristics &&
                !!Object.entries(fullCharacteristics).length && (
                    <Box {...descriptionListProps}>
                        <SectionContainer level={2}>
                            {Object.entries(fullCharacteristics).map(
                                ([charTitle, charCategory], i) => (
                                    <Box key={i}>
                                        <Title props={titleProps}>
                                            {charTitle}
                                        </Title>
                                        <Divider />
                                        <Box {...characteristicsBoxProps}>
                                            {Object.entries(charCategory).map(
                                                (
                                                    [charTitle, description],
                                                    i
                                                ) => (
                                                    <Box key={i}>
                                                        <Tooltip
                                                            title={
                                                                description.text ? (
                                                                    <Box
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: description.text
                                                                        }}
                                                                    />
                                                                ) : (
                                                                    ""
                                                                )
                                                            }
                                                        >
                                                            <Typography
                                                                {...characteristicTitleProps}
                                                            >
                                                                {charTitle}:{" "}
                                                            </Typography>
                                                        </Tooltip>
                                                        <Typography
                                                            {...characteristicTextProps}
                                                        >
                                                            {description.value}
                                                        </Typography>
                                                    </Box>
                                                )
                                            )}
                                        </Box>
                                    </Box>
                                )
                            )}
                        </SectionContainer>
                    </Box>
                )}
        </Box>
    );
};

export default AllCharacteristicsBoxTemplate;
