import Title from "@/app/(shared)/text/title.template";
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
    fullCharacteristics?: ProductCharacteristics | null;
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
        fontSize: "1.3rem",
        lineHeight: 1,
        paddingY: "8px"
    };

    const characteristicsBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginBottom: "30px",
        marginTop: "8px"
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
                !!Object.entries(fullCharacteristics).length &&
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
        </Box>
    );
};

export default AllCharacteristicsBox;
