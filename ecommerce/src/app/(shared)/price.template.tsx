import { Typography, TypographyProps } from "@mui/material";

const Price = ({
    variant,
    price,
    props
}: {
    variant: "small" | "large";
    price: string;
    props?: TypographyProps;
}) => {
    const priceProps: TypographyProps = {
        display: "inline-block",
        minWidth: "max-content",
        maxHeight: "min-content",

        fontFamily: "inherit",
        fontWeight: "bold",
        fontSize: variant === "small" ? "0.95rem" : "2rem",

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
