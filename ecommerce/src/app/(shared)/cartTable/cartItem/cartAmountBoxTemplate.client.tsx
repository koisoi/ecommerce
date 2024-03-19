"use client";

import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import NumberInputTemplate from "../../numberInputTemplate.client";
import Price from "../../text/priceTemplate";
import { NumberInputProps } from "@mui/base/Unstable_NumberInput";
import { useMediaQueries } from "@/lib";

export type AmountBoxProps = {
    amount: number;
    onAmountChange?: (
        event:
            | React.FocusEvent<HTMLInputElement>
            | React.PointerEvent
            | React.KeyboardEvent,
        value: number | undefined
    ) => void;
    totalPrice: string;
    displayOnly?: boolean;
};

const CartAmountBoxTemplate = ({
    amount,
    onAmountChange,
    totalPrice,
    displayOnly
}: AmountBoxProps) => {
    const screen = useMediaQueries();

    const amountAndDeleteBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        minWidth: { sm: "unset", md: displayOnly ? "100px" : "250px" },
        width: "fit-content"
    };

    const amountBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px"
    };

    const amountTextProps: TypographyProps = {
        fontSize: "1rem",
        textAlign: "center"
    };

    const amountTextPriceProps: TypographyProps = {
        fontSize: "inherit",
        display: "inline"
    };

    const numberInputProps: NumberInputProps = {
        min: 1,
        max: 99,
        value: amount,
        onChange: onAmountChange,

        style: {
            width: screen.md ? "170px" : "120px"
        }
    };

    return (
        <Box {...amountAndDeleteBoxProps}>
            <Box {...amountBoxProps}>
                {!displayOnly && <NumberInputTemplate {...numberInputProps} />}
                <Typography {...amountTextProps}>
                    {amount} шт. на сумму{" "}
                    <Price price={totalPrice} props={amountTextPriceProps} />
                </Typography>
            </Box>
        </Box>
    );
};

export default CartAmountBoxTemplate;
