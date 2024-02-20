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
import { CartAnimationState } from "@/lib/slices/cartAnimation.slice";

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

    const {
        desktopCartButtonRect,
        desktopSlidingCartButtonRect,
        mobileCartButtonRect
    } = useAppSelector(CartAnimationState);

    const handleAddToCartClick: MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        dispatch(addItemToCart(item));

        const scrolled = document.documentElement.scrollTop;
        const buttonRect = screen.md
            ? scrolled > 500
                ? desktopSlidingCartButtonRect
                : desktopCartButtonRect
            : mobileCartButtonRect;

        const translateTo = {
            x: buttonRect!.x - event.currentTarget.getBoundingClientRect().x,
            y: buttonRect!.y - event.currentTarget.getBoundingClientRect().y
        };

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
