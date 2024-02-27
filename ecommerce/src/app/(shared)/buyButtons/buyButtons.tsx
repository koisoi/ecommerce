import { CartItem } from "@/lib/types/cart";
import { InstantBuyButtonTemplate, ShoppingCartButtonTemplate } from "..";
import {
    CategoryItem,
    addItemToCart,
    useAppDispatch,
    useAppSelector,
    useMediaQueries
} from "@/lib";
import { ButtonProps, TypographyProps } from "@mui/material";
import { MouseEventHandler, useState } from "react";

export type BuyButtonProps = {
    props?: ButtonProps;
    textProps?: TypographyProps;
    item: CartItem;
};

export const ShoppingCartButton = ({
    item,
    props,
    textProps
}: BuyButtonProps) => {
    const dispatch = useAppDispatch();
    const screen = useMediaQueries();

    const [translateTo, setTranslateTo] = useState<
        { x: number; y: number } | undefined
    >(undefined);

    const handleAddToCartClick: MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        dispatch(addItemToCart(item));

        const scrolled = document.documentElement.scrollTop;
        const id = screen.md
            ? scrolled > 500
                ? "desktop-sliding-header-button"
                : "desktop-header-button"
            : "mobile-shopping-cart-button";
        const button = document.getElementById(id);

        const translateTo =
            screen.md && scrolled > 500
                ? {
                      x:
                          button!.getBoundingClientRect().x -
                          event.currentTarget.getBoundingClientRect().x -
                          16,
                      y:
                          button!.getBoundingClientRect().y -
                          event.currentTarget.getBoundingClientRect().y
                  }
                : {
                      x:
                          button!.getBoundingClientRect().x -
                          event.currentTarget.getBoundingClientRect().x,
                      y:
                          button!.getBoundingClientRect().y -
                          event.currentTarget.getBoundingClientRect().y
                  };

        console.log(
            button!.getBoundingClientRect().x,
            button!.getBoundingClientRect().y,
            event.currentTarget.getBoundingClientRect().x,
            event.currentTarget.getBoundingClientRect().y
        );

        setTranslateTo(translateTo);
        event.currentTarget.getBoundingClientRect;

        setTimeout(() => setTranslateTo(undefined), 1000);
    };

    return (
        <ShoppingCartButtonTemplate
            props={props}
            textProps={textProps}
            onAddToCartClick={handleAddToCartClick}
            translateTo={translateTo}
        />
    );
};

export const InstantBuyButton = ({
    item,
    props,
    textProps
}: {
    item: CategoryItem;
    props?: ButtonProps;
    textProps?: TypographyProps;
}) => {
    const [fastOrderDialogOpen, setFastOrderDialogOpen] =
        useState<boolean>(false);

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        setFastOrderDialogOpen(true);
    };

    const handleClose: MouseEventHandler<HTMLButtonElement> = () => {
        setFastOrderDialogOpen(false);
    };

    return (
        <InstantBuyButtonTemplate
            props={props}
            textProps={textProps}
            onInstantBuyClick={handleClick}
            item={item}
            open={fastOrderDialogOpen}
            onClose={handleClose}
        />
    );
};
