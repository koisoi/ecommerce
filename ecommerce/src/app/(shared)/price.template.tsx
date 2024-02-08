import { Typography, TypographyProps } from "@mui/material";

export type PriceProps = {
    variant: "small" | "medium" | "large";
    price: string;
    props?: TypographyProps;
};

const Price = ({ variant, price, props }: PriceProps) => {
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
