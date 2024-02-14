"use client";

import { CartItem } from "@/lib/types/cart";
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import CartItemComponent from "./cartItem";
import Price from "../price.template";
import { useThemeColors } from "@/lib";
import { Delete } from "@mui/icons-material";
import { MouseEventHandler } from "react";
import ClearDialog from "./clearDialog.template";

const CartTableTemplate = ({
    items,
    full,
    totalPrice,
    clearWarningOpen,
    onClearWarningOpen,
    onClearWarningClose,
    onClear,
    onOpenOrderPage
}: {
    items: CartItem[];
    full?: boolean;
    totalPrice: string;
    clearWarningOpen: boolean;
    onClearWarningOpen: MouseEventHandler<HTMLButtonElement>;
    onClearWarningClose: (event: any) => void;
    onClear: MouseEventHandler<HTMLButtonElement>;
    onOpenOrderPage: MouseEventHandler<HTMLButtonElement>;
}) => {
    const colors = useThemeColors();

    const wrapperProps: BoxProps = {
        width: "100%"
    };

    const headerProps: BoxProps = {
        padding: "10px",
        width: "100%",
        boxSizing: "border-box",

        display: "flex",
        flexDirection: "row",
        gap: "20px"
    };

    const headerTextProps: TypographyProps = {
        color: "text.disabled"
    };

    const headerImageSpace: TypographyProps = {
        width: "75px"
    };

    const titleHeaderProps: TypographyProps = {
        ...headerTextProps,
        flexGrow: 1
    };

    const priceHeaderProps: TypographyProps = {
        ...headerTextProps,
        width: "140px"
    };

    const amountHeaderProps: TypographyProps = {
        ...headerTextProps,
        width: "250px"
    };

    const itemBoxProps: BoxProps = {
        border: "1px solid",
        borderColor: "divider",

        display: "flex",
        flexDirection: "column"
    };

    const footerProps: BoxProps = {
        ...headerProps,
        padding: "20px",
        justifyContent: "space-between",
        alignItems: "center"
    };

    const footerTextProps: TypographyProps = {
        color: "text.disabled",

        display: "inline-flex",
        alignItems: "center",
        gap: "10px"
    };

    const footerPriceProps: TypographyProps = {
        color: "text.primary"
    };

    const clearButtonProps: ButtonProps = {
        variant: "text",
        color: "inherit",

        onClick: onClearWarningOpen,

        sx: {
            textTransform: "none",
            fontSize: "inherit",

            display: "flex",
            flexDirection: "row",
            gap: "5px",
            justifyContent: "center"
        }
    };

    const orderButtonProps: ButtonProps = {
        variant: "contained",

        onClick: onOpenOrderPage,

        sx: {
            textTransform: "none",

            boxShadow: "none",

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    return (
        <>
            <ClearDialog
                open={clearWarningOpen}
                onClear={onClear}
                onDialogClose={onClearWarningClose}
            />

            <Box {...wrapperProps}>
                {full && (
                    <Box {...headerProps}>
                        <Typography {...headerImageSpace}></Typography>
                        <Typography {...titleHeaderProps}>
                            Наименование
                        </Typography>
                        <Typography {...priceHeaderProps}>Цена</Typography>
                        <Typography {...amountHeaderProps}>
                            Количество
                        </Typography>
                    </Box>
                )}
                <Box {...itemBoxProps}>
                    {items.map((item) => (
                        <CartItemComponent key={item.alias} item={item} />
                    ))}
                </Box>
                <Box {...footerProps}>
                    <Button {...clearButtonProps}>
                        <Delete /> Очистить корзину
                    </Button>
                    {!full && (
                        <Button {...orderButtonProps}>Оформить заказ</Button>
                    )}
                    <Typography {...footerTextProps}>
                        Итого:
                        <Price
                            price={totalPrice}
                            variant={full ? "large" : "medium"}
                            props={footerPriceProps}
                        />
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default CartTableTemplate;
