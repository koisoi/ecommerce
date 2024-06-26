"use client";

import {
    CartItem,
    CategoryItem,
    addItemToCart,
    useAppDispatch,
    useMediaQueries
} from "@/lib";
import { ButtonProps, Snackbar, TypographyProps } from "@mui/material";
import { MouseEventHandler, useState } from "react";
import dynamic from "next/dynamic";
import { executeYMScript } from "@/lib/functions/executeYMScript";

const DynamicShoppingCartButtonTemplate = dynamic(
    () =>
        import("@/app/_shared/buyButtons/buyButtonsTemplate").then(
            (mod) => mod.ShoppingCartButtonTemplate
        ),
    { ssr: false }
);
const DynamicInstantBuyButtonTemplate = dynamic(
    () =>
        import("@/app/_shared/buyButtons/buyButtonsTemplate").then(
            (mod) => mod.InstantBuyButtonTemplate
        ),
    { ssr: false }
);

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
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const screen = useMediaQueries();

    const [translateTo, setTranslateTo] = useState<
        { x: number; y: number } | undefined
    >(undefined);

    const handleSnackbarClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setSnackbarOpen(false);
    };

    const handleAddToCartClick: MouseEventHandler<HTMLButtonElement> = (
        event
    ) => {
        dispatch(addItemToCart(item));
        setSnackbarOpen(true);
        executeYMScript("basket_add_main");

        const scrolled = document.documentElement.scrollTop;
        const id = screen.md
            ? scrolled > 400
                ? "desktop-sliding-header-button"
                : "desktop-header-button"
            : "mobile-shopping-cart-button";
        const button = document.getElementById(id);

        const translateTo = {
            x:
                button!.getBoundingClientRect().x -
                event.currentTarget.getBoundingClientRect().x -
                event.currentTarget.clientWidth / 2,
            y:
                button!.getBoundingClientRect().y -
                event.currentTarget.getBoundingClientRect().y
        };

        setTranslateTo(translateTo);

        setTimeout(() => setTranslateTo(undefined), 1000);
    };

    return (
        <>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={2000}
                onClose={handleSnackbarClose}
                message="Товар добавлен в корзину"
                sx={{
                    minWidth: "none"
                }}
                ContentProps={{
                    sx: {
                        fontSize: "1rem"
                    }
                }}
            />

            <DynamicShoppingCartButtonTemplate
                props={props}
                textProps={textProps}
                onAddToCartClick={handleAddToCartClick}
                translateTo={translateTo}
            />
        </>
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
        <DynamicInstantBuyButtonTemplate
            props={props}
            textProps={textProps}
            onInstantBuyClick={handleClick}
            item={item}
            open={fastOrderDialogOpen}
            onClose={handleClose}
        />
    );
};
