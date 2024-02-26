import { ProductCharacteristic } from "@/lib";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";

const CharacteristicsBox = ({
    characteristics
}: {
    characteristics?: ProductCharacteristic;
}) => {
    const wrapperProps: BoxProps = {
        color: "text.main",
        fontSize: "0.95rem"
    };

    const noTextProps: TypographyProps = {
        color: "text.disabled",
        marginBottom: "60px"
    };

    const characteristicTextProps: TypographyProps = {
        display: "inline"
    };

    const characteristicTitleProps: TypographyProps = {
        ...characteristicTextProps,
        fontWeight: "bold",
        fontSize: "1.1rem"
    };

    return (
        <Box {...wrapperProps}>
            {(!characteristics || !Object.entries(characteristics).length) && (
                <Typography {...noTextProps}>
                    У данного товара нет характеристик.
                </Typography>
            )}
            {characteristics &&
                !!Object.entries(characteristics).length &&
                Object.entries(characteristics).map(
                    ([charTitle, description], i) => (
                        <Box key={i}>
                            <Typography {...characteristicTitleProps}>
                                {charTitle}:{" "}
                            </Typography>
                            <Typography {...characteristicTextProps}>
                                {description.value}
                            </Typography>
                        </Box>
                    )
                )}
        </Box>
    );
};

export default CharacteristicsBox;
