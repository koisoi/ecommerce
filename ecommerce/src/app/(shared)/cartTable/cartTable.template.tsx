import { CartItem } from "@/lib/types/cart";
import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";

const CartTableTemplate = ({
    items,
    full
}: {
    items: CartItem[];
    full?: boolean;
}) => {
    const wrapperProps: BoxProps = {
        width: "100%"
    };

    const headerProps: BoxProps = {
        padding: "10px",
        width: "100%",

        display: "flex",
        flexDirection: "row"
    };

    const titleHeaderProps: TypographyProps = {
        flexGrow: 1
    };

    const priceHeaderProps: TypographyProps = {
        width: "140px"
    };

    const amountHeaderProps: TypographyProps = {
        width: "250px"
    };

    const itemBoxProps: BoxProps = {};

    return (
        <Box {...wrapperProps}>
            {full && (
                <Box {...headerProps}>
                    <Typography {...titleHeaderProps}>Наименование</Typography>
                    <Typography {...priceHeaderProps}>Цена</Typography>
                    <Typography {...amountHeaderProps}>Количество</Typography>
                </Box>
            )}
            <Box {...itemBoxProps}></Box>
        </Box>
    );
};

export default CartTableTemplate;
