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

        noWrap: true,

        fontFamily: "inherit",
        fontWeight: "bold",
        fontSize:
            variant === "small"
                ? "0.95rem"
                : variant === "medium"
                ? { xs: "1.4rem", md: "1.2rem" }
                : "2rem",
        ...(autoScaleLarge && {
            fontSize: "2rem"
        }),

        color: "text.dark",

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
