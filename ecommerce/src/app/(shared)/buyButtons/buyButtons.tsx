import { CartItem } from "@/lib/types/cart";
import { ShoppingCartButtonTemplate } from "..";
import { addItemToCart, useAppDispatch } from "@/lib";
import { ButtonProps, TypographyProps } from "@mui/material";

export type BuyButtonProps = {
    props?: ButtonProps;
    textProps?: TypographyProps;
    item: CartItem;
};

const ShoppingCartButton = ({ item, props, textProps }: BuyButtonProps) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(addItemToCart(item));
    };

    return (
        <ShoppingCartButtonTemplate
            props={props}
            textProps={textProps}
            onClick={handleClick}
        />
    );
};

export default ShoppingCartButton;
