import { Typography, TypographyProps } from "@mui/material";

export type PriceProps = {
    variant?: "small" | "medium" | "large";
    price: string;
    props?: TypographyProps;
    autoScaleLarge?: boolean;
};

const Price = ({
    variant = "medium",
    price,
    props,
    autoScaleLarge
}: PriceProps) => {
    const priceProps: TypographyProps = {
        display: "inline-block",
        minWidth: "max-content",
        maxHeight: "min-content",

        fontFamily: "inherit",
        fontWeight: "bold",
        fontSize:
            variant === "small"
                ? "0.95rem"
                : variant === "medium"
                ? "1.2rem"
                : "2rem",
        ...(autoScaleLarge && {
            fontSize: { xs: "1.2rem", sm: "2rem" }
        }),

        ...props,
        sx: {
            ...props?.sx
        }
    };

    return (
        <Typography {...priceProps}>
            {price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")} ₽
        </Typography>
    );
};

export default Price;
