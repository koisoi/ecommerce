"use client";

import { CartItem as CartItemTemplate } from "@/lib/types/cart";
import {
    Box,
    BoxProps,
    IconButton,
    IconButtonProps,
    TypographyProps
} from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";
import ProductLink from "../../text/productLink.template";
import Price from "../../text/price.template";
import { Close } from "@mui/icons-material";
import DeleteItemDialog from "../deleteItemDialog.template";
import { useMediaQueries } from "@/lib";
import CartImg, { CartImgProps } from "./cartImg.template";
import AmountBox, { AmountBoxProps } from "./cartAmountAndDeleteBox.template";

const CartItemTemplate = ({
    children,
    item,
    onAmountChange,
    deleteWarningOpen,
    onDelete,
    onDeleteWarningOpen,
    onDeleteWarningClose,
    totalPrice,
    displayOnly
}: {
    children?: ReactNode;
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
    displayOnly?: boolean;
}) => {
    const outerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",

        position: "relative"
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem",

        padding: "10px",
        width: "100%",
        boxSizing: "border-box"
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", xsm: "row" },
        alignItems: "center",
        gap: "1rem",

        flexGrow: 1,

        boxSizing: "border-box"
    };

    const titleBoxProps: BoxProps = {
        flexGrow: 1
        // width: "100%"
    };

    const titleProps: TypographyProps = {
        fontWeight: "bold",
        fontSize: { xs: "1.25rem", md: "1rem" },
        flexGrow: 1
    };

    const priceProps: TypographyProps = {
        minWidth: { xs: "fit-content", md: "140px" },
        fontWeight: "normal"
    };

    const deleteButtonProps: IconButtonProps = {
        color: "primary",

        onClick: onDeleteWarningOpen,

        sx: {
            alignSelf: "flex-start",
            color: "text.disabled",

            position: "absolute",
            right: { xs: 0, md: "10px" },
            top: { xs: 0, md: "18%" },

            ":hover": {
                color: "primary.main"
            }
        }
    };

    const imgProps: CartImgProps = {
        alt: item.title,
        src: item.imgLink
    };

    const amountBoxProps: AmountBoxProps = {
        amount: item.amount,
        onAmountChange,
        totalPrice,
        displayOnly: displayOnly
    };

    const amountAndPriceBox: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: "1rem"
    };

    return (
        <>
            {!displayOnly && (
                <DeleteItemDialog
                    open={deleteWarningOpen}
                    onDelete={onDelete}
                    onDialogClose={onDeleteWarningClose}
                />
            )}

            <Box {...outerWrapperProps}>
                <Box {...wrapperProps}>
                    <CartImg {...imgProps} />
                    <Box {...innerWrapperProps}>
                        <Box {...titleBoxProps}>
                            <ProductLink url={item.url} props={titleProps}>
                                {item.title}
                            </ProductLink>
                        </Box>
                        <Box {...amountAndPriceBox}>
                            <Price price={item.price} props={priceProps} />
                            <AmountBox {...amountBoxProps} />
                        </Box>
                    </Box>
                </Box>

                {!displayOnly && (
                    <IconButton {...deleteButtonProps}>
                        <Close />
                    </IconButton>
                )}
            </Box>
            {children}
        </>
    );
};

export default CartItemTemplate;
