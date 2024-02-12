import Title from "@/app/(shared)/title.template";
import { ProductCharacteristics } from "@/lib";
import {
    Box,
    BoxProps,
    Divider,
    Tooltip,
    Typography,
    TypographyProps
} from "@mui/material";

const AllCharacteristicsBox = ({
    fullCharacteristics
}: {
    fullCharacteristics: ProductCharacteristics;
}) => {
    const noTextProps: TypographyProps = {
        color: "text.disabled"
    };

    const characteristicTextProps: TypographyProps = {
        display: "inline"
    };

    const characteristicTitleProps: TypographyProps = {
        ...characteristicTextProps,
        fontWeight: "bold",
        fontSize: "1rem"
    };

    const titleProps: TypographyProps = {
        color: "primary.main",
        fontWeight: "bold",
        fontSize: "1.6rem",
        lineHeight: 1,
        paddingY: "16px"
    };

    const characteristicsBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "30px",
        marginTop: "16px"
    };

    return (
        <Box>
            {!Object.entries(fullCharacteristics).length && (
                <Typography {...noTextProps}>
                    У данного товара нет полных характеристик.
                </Typography>
            )}
            {!!Object.entries(fullCharacteristics).length &&
                Object.entries(fullCharacteristics).map(
                    ([charTitle, charCategory], i) => (
                        <Box key={i}>
                            <Title props={titleProps}>{charTitle}</Title>
                            <Divider />
                            <Box {...characteristicsBoxProps}>
                                {Object.entries(charCategory).map(
                                    ([charTitle, description], i) => (
                                        <Box key={i}>
                                            <Tooltip
                                                title={
                                                    <Box
                                                        dangerouslySetInnerHTML={{
                                                            __html: description.text
                                                        }}
                                                    />
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
        </Box>
    );
};

export default AllCharacteristicsBox;
