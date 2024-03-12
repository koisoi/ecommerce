import { Paper, PaperProps } from "@mui/material";
import StockIndicator, { StockIndicatorProps } from "./stockIndicator.template";
import Price, { PriceProps } from "@/app/(shared)/text/price.template";
import {
    BuyButtonProps,
    InstantBuyButton,
    ShoppingCartButton
} from "@/app/(shared)/buyButtons/buyButtons";
import { CategoryItem } from "@/lib";
import { CartItem } from "@/lib/types/cart";

export type ProductOfferBoxProps = {
    categoryItem: CategoryItem;
    props?: PaperProps;
    cartItem: CartItem;
    stock: boolean;
};

const ProductOfferBox = ({
    categoryItem,
    props,
    cartItem,
    stock
}: ProductOfferBoxProps) => {
    const productOfferBoxProps: PaperProps = {
        variant: "outlined",

        ...props,

        sx: {
            alignSelf: "start",

            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1rem",

            width: "100%",
            maxHeight: "min-content",
            maxWidth: { xs: "100%", xsm: "320px" },

            ...props?.sx
        }
    };

    const stockProps: StockIndicatorProps = {
        stock
    };

    const priceProps: PriceProps = {
        price: cartItem.price,
        autoScaleLarge: true
    };

    const buyButtonsProps: BuyButtonProps = {
        props: {
            disabled: !stock,

            variant: "contained",
            sx: {
                padding: "5px"
            }
        },

        textProps: {
            fontSize: "0.95rem"
        },

        item: cartItem
    };

    return (
        <Paper {...productOfferBoxProps}>
            <StockIndicator {...stockProps} />
            <Price {...priceProps} />
            <InstantBuyButton {...buyButtonsProps} item={categoryItem} />
            <ShoppingCartButton {...buyButtonsProps} />
        </Paper>
    );
};

export default ProductOfferBox;
