import { FiberManualRecord } from "@mui/icons-material";
import { SvgIconProps, Typography, TypographyProps } from "@mui/material";

export type StockIndicatorProps = {
    stock: boolean;
};

const StockIndicatorTemplate = ({ stock }: StockIndicatorProps) => {
    const wrapperProps: TypographyProps = {
        color: stock ? "success.main" : "text.disabled",
        fontSize: "1rem",

        display: "inline-flex",
        alignItems: "center",

        fontFamily: "inherit"
    };

    const iconProps: SvgIconProps = {
        fontSize: "inherit",
        sx: {
            marginRight: "0.3rem"
        }
    };

    return (
        <Typography {...wrapperProps}>
            <FiberManualRecord {...iconProps} />{" "}
            {stock ? "В наличии" : "Нет в наличии"}
        </Typography>
    );
};

export default StockIndicatorTemplate;
