import { CartItem } from "@/lib/types/cart";
import { Box, BoxProps } from "@mui/material";
import CartTable from "../(shared)/cartTable/cartTable";
import PageTitle from "../(shared)/pageTitle.template";

const CartTemplate = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        gap: "20px"
    };

    const leftBoxProps: BoxProps = {
        width: "100%"
    };

    const checkoutBoxProps: BoxProps = {};

    return (
        <>
            <PageTitle>Корзина</PageTitle>
            <Box {...wrapperProps}>
                <Box {...leftBoxProps}>
                    <CartTable full />
                </Box>
                <Box {...checkoutBoxProps}></Box>
            </Box>
        </>
    );
};

export default CartTemplate;
