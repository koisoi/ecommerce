import { ProductCharacteristic } from "@/lib";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { Fragment } from "react";

const CharacteristicsBoxTemplate = ({
    characteristics
}: {
    characteristics?: ProductCharacteristic | null;
}) => {
    const wrapperProps: BoxProps = {
        color: "text.primary",
        fontSize: "0.95rem"
    };

    const noTextProps: TypographyProps = {
        color: "text.disabled",
        marginBottom: "60px"
    };

    const characteristicTextProps: TypographyProps = {
        component: "dd",
        display: "inline"
    };

    const characteristicTitleProps: TypographyProps = {
        ...characteristicTextProps,
        component: "dt",
        fontWeight: "bold",
        fontSize: "1.1rem",
        color: "text.dark"
    };

    const descriptionListProps: BoxProps = {
        component: "dl"
    };

    return (
        <Box {...wrapperProps}>
            {(!characteristics || !Object.entries(characteristics).length) && (
                <Typography {...noTextProps}>
                    У данного товара нет характеристик.
                </Typography>
            )}
            {characteristics && !!Object.entries(characteristics).length && (
                <Box {...descriptionListProps}>
                    {Object.entries(characteristics).map(
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
            )}
        </Box>
    );
};

export default CharacteristicsBoxTemplate;
