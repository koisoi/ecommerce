"use client";

import { CartItem } from "@/lib/types/cart";
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Divider,
    Typography,
    TypographyProps
} from "@mui/material";
import CartItemComponent from "./cartItem/cartItem";
import Price from "../price.template";
import { Delete } from "@mui/icons-material";
import { MouseEventHandler } from "react";
import ClearDialog from "./clearDialog.template";
import { useMediaQueries } from "@/lib";
import EmptyCart from "./emptyCard/emptyCart";

export type CartTableTemplateProps = {
    items: CartItem[];
    full?: boolean;
    totalPrice: string;
    clearWarningOpen?: boolean;
    displayOnly?: boolean;
    onClearWarningOpen?: MouseEventHandler<HTMLButtonElement>;
    onClearWarningClose?: (event: any) => void;
    onClear?: MouseEventHandler<HTMLButtonElement>;
    onOpenOrderPage?: MouseEventHandler<HTMLButtonElement>;
};

const CartTableTemplate = ({
    items,
    full,
    totalPrice,
    clearWarningOpen,
    displayOnly,
    onClearWarningOpen,
    onClearWarningClose,
    onClear,
    onOpenOrderPage
}: CartTableTemplateProps) => {
    const screen = useMediaQueries();

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

    const amountHeaderBoxProps: BoxProps = {
        ...headerTextProps,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "250px"
    };

    const headerDeleteButtonSpace: TypographyProps = {
        width: "40px"
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
        gap: "10px",

        paddingRight: "8px"
    };

    const footerPriceProps: TypographyProps = {
        color: "text.primary"
    };

    const clearButtonProps: ButtonProps = {
        variant: "text",

        onClick: onClearWarningOpen,

        sx: {
            textTransform: "none",
            fontSize: "inherit",

            display: "flex",
            flexDirection: "row",
            gap: "5px",
            justifyContent: "center",

            color: "text.disabled",

            ":hover": {
                color: "primary.main"
            }
        }
    };

    const orderButtonProps: ButtonProps = {
        variant: "contained",

        onClick: onOpenOrderPage,

        sx: {
            textTransform: "none",
            fontSize: "inherit",

            boxShadow: "none",

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    if (!items.length) return <EmptyCart full={full} />;

    return (
        <>
            {!displayOnly && (
                <ClearDialog
                    open={!!clearWarningOpen}
                    onClear={onClear}
                    onDialogClose={onClearWarningClose}
                />
            )}

            <Box {...wrapperProps}>
                {full && screen.md && (
                    <Box {...headerProps}>
                        <Typography {...headerImageSpace} />
                        <Typography {...titleHeaderProps}>
                            Наименование
                        </Typography>
                        <Typography {...priceHeaderProps}>Цена</Typography>
                        <Box {...amountHeaderBoxProps}>
                            <Typography width="170px" textAlign="center">
                                Количество
                            </Typography>
                            <Typography {...headerDeleteButtonSpace} />
                        </Box>
                    </Box>
                )}
                <Box {...itemBoxProps}>
                    {items.map((item, i, array) => (
                        <CartItemComponent
                            key={item.alias}
                            item={item}
                            displayOnly
                        >
                            {!screen.md && i !== array.length - 1 && (
                                <Divider key={item.alias} flexItem />
                            )}
                        </CartItemComponent>
                    ))}
                </Box>
                <Box {...footerProps}>
                    {!displayOnly && (
                        <Button {...clearButtonProps}>
                            <Delete /> {screen.sm && "Очистить корзину"}
                        </Button>
                    )}
                    {!full && !displayOnly && (
                        <Button {...orderButtonProps}>Оформить заказ</Button>
                    )}
                    <Typography {...footerTextProps}>
                        Итого:
                        <Price
                            price={totalPrice}
                            variant={
                                screen.sm
                                    ? full
                                        ? "large"
                                        : "medium"
                                    : "small"
                            }
                            props={footerPriceProps}
                        />
                    </Typography>
                </Box>
            </Box>
        </>
    );
};

export default CartTableTemplate;
