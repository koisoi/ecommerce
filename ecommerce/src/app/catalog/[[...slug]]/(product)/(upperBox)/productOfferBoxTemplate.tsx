import { Paper, PaperProps } from "@mui/material";
import StockIndicatorTemplate, {
    StockIndicatorProps
} from "./stockIndicatorTemplate";
import Price, { PriceProps } from "@/app/(shared)/text/priceTemplate";
import {
    BuyButtonProps,
    InstantBuyButton,
    ShoppingCartButton
} from "@/app/(shared)/buyButtons/buyButtons.client";
import { CartItem, CategoryItem } from "@/lib";

export type ProductOfferBoxProps = {
    categoryItem: CategoryItem;
    props?: PaperProps;
    cartItem: CartItem;
    stock: boolean;
};

const ProductOfferBoxTemplate = ({
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
            <StockIndicatorTemplate {...stockProps} />
            <Price {...priceProps} />
            <InstantBuyButton {...buyButtonsProps} item={categoryItem} />
            <ShoppingCartButton {...buyButtonsProps} />
        </Paper>
    );
};

export default ProductOfferBoxTemplate;
