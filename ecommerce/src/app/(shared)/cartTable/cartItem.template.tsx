"use client";

import { CartItem as CartItemTemplate } from "@/lib/types/cart";
import {
    Box,
    BoxProps,
    IconButton,
    IconButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { CSSProperties, MouseEventHandler } from "react";
import ProductLink from "../productLink.template";
import Price from "../price.template";
import NumberInput from "../numberInput.template";
import { NumberInputProps } from "@mui/base/Unstable_NumberInput";
import { Close } from "@mui/icons-material";
import DeleteItemDialog from "./deleteItemDialog.template";
import { useMediaQueries } from "@/lib";

const CartItemTemplate = ({
    item,
    onAmountChange,
    deleteWarningOpen,
    onDelete,
    onDeleteWarningOpen,
    onDeleteWarningClose,
    totalPrice
}: {
    item: CartItemTemplate;
    onAmountChange: (
        event:
            | React.FocusEvent<HTMLInputElement>
            | React.PointerEvent
            | React.KeyboardEvent,
        value: number | undefined
    ) => void;
    deleteWarningOpen: boolean;
    onDelete: MouseEventHandler<HTMLButtonElement>;
    onDeleteWarningClose: (event: any) => void;
    onDeleteWarningOpen: MouseEventHandler<HTMLButtonElement>;
    totalPrice: string;
}) => {
    const screen = useMediaQueries();

    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",

        padding: "10px",
        width: "100%",
        boxSizing: "border-box"
    };

    const imgBoxProps: BoxProps = {
        width: { xs: "120px", md: "75px" },
        height: { xs: "120px", md: "75px" },
        minWidth: "75px",
        minHeight: "75px"
    };

    const imgStyle: CSSProperties = {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain"
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: "20px",

        flexGrow: 1,

        boxSizing: "border-box"
    };

    const titleBoxProps: BoxProps = {
        flexGrow: 1,
        width: "100%"
    };

    const titleProps: TypographyProps = {
        fontWeight: "bold"
    };

    const priceProps: TypographyProps = {
        minWidth: { xs: "100%", md: "140px" },
        fontWeight: "normal"
    };

    const amountAndDeleteBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        minWidth: { xs: "100%", md: "250px" }
    };

    const amountBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px"
    };

    const amountTextProps: TypographyProps = {
        fontSize: "0.8rem"
    };

    const amountTextPriceProps: TypographyProps = {
        fontSize: "inherit"
    };

    const numberInputProps: NumberInputProps = {
        min: 1,
        max: 99,
        value: item.amount,
        onChange: onAmountChange,

        style: {
            width: "170px"
        }
    };

    const deleteButtonProps: IconButtonProps = {
        color: "primary",

        onClick: onDeleteWarningOpen,

        sx: {
            alignSelf: "flex-start",
            color: "text.disabled",

            ":hover": {
                color: "primary.main"
            }
        }
    };

    return (
        <>
            <DeleteItemDialog
                open={deleteWarningOpen}
                onDelete={onDelete}
                onDialogClose={onDeleteWarningClose}
            />

            <Box {...wrapperProps}>
                <Box {...imgBoxProps}>
                    <img alt={item.title} src={item.imgLink} style={imgStyle} />
                </Box>
                <Box {...innerWrapperProps}>
                    <Box {...titleBoxProps}>
                        <ProductLink url={item.url} props={titleProps}>
                            {item.title}
                        </ProductLink>
                    </Box>
                    <Price price={item.price} props={priceProps} />
                    <Box {...amountAndDeleteBoxProps}>
                        <Box {...amountBoxProps}>
                            <NumberInput {...numberInputProps} />
                            <Typography {...amountTextProps}>
                                {item.amount} шт. на сумму{" "}
                                <Price
                                    price={totalPrice}
                                    props={amountTextPriceProps}
                                />
                            </Typography>
                        </Box>
                        {screen.md && (
                            <IconButton {...deleteButtonProps}>
                                <Close />
                            </IconButton>
                        )}
                    </Box>
                </Box>

                {!screen.md && (
                    <IconButton {...deleteButtonProps}>
                        <Close />
                    </IconButton>
                )}
            </Box>
        </>
    );
};

export default CartItemTemplate;
