import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import NumberInput from "../../numberInput.template";
import Price from "../../text/price.template";
import { NumberInputProps } from "@mui/base/Unstable_NumberInput";

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

const AmountBox = ({
    amount,
    onAmountChange,
    totalPrice,
    displayOnly
}: AmountBoxProps) => {
    const amountAndDeleteBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        minWidth: { sm: "100%", md: displayOnly ? "100px" : "250px" },
        width: "fit-content"
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
        value: amount,
        onChange: onAmountChange,

        style: {
            width: "170px"
        }
    };

    return (
        <Box {...amountAndDeleteBoxProps}>
            <Box {...amountBoxProps}>
                {!displayOnly && <NumberInput {...numberInputProps} />}
                <Typography {...amountTextProps}>
                    {amount} шт. на сумму{" "}
                    <Price price={totalPrice} props={amountTextPriceProps} />
                </Typography>
            </Box>
        </Box>
    );
};

export default AmountBox;
