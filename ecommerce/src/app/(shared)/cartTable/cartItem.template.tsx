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
        width: "75px",
        height: "75px"
    };

    const imgStyle: CSSProperties = {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain"
    };

    const titleBoxProps: BoxProps = {
        flexGrow: 1
    };

    const titleProps: TypographyProps = {
        fontWeight: "bold"
    };

    const priceProps: TypographyProps = {
        width: "140px",
        fontWeight: "normal"
    };

    const amountAndDeleteBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        width: "250px"
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
        onChange: onAmountChange
    };

    const deleteButtonProps: IconButtonProps = {
        onClick: onDeleteWarningOpen,

        sx: {
            alignSelf: "flex-start"
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
                    <IconButton {...deleteButtonProps}>
                        <Close />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default CartItemTemplate;
