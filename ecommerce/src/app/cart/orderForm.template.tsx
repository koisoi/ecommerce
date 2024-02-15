import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    TextField,
    TextFieldProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { Controller, ControllerProps, UseFormReturn } from "react-hook-form";
import { OrderRules } from "./page";
import Title from "../(shared)/title.template";
import { OrderForm } from "@/lib";
import { MouseEventHandler } from "react";

const OrderFormTemplate = ({
    form,
    rules,
    onSubmit
}: {
    form: UseFormReturn<OrderForm>;
    rules: OrderRules;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
}) => {
    const checkoutBoxProps: BoxProps = {
        flexGrow: 1,

        position: "sticky",
        top: "60px",

        height: "fit-content",

        border: "1px solid",
        // borderRadius: "4px",
        borderColor: "divider",

        padding: "20px",
        paddingTop: 0,

        display: "flex",
        flexDirection: "column",
        gap: "20px"
    };

    const contactsBox: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%"
    };

    const inputProps: TextFieldProps = {
        variant: "outlined",
        sx: {
            flexGrow: 1
        }
    };

    const fullNameInputProps: TextFieldProps = {
        ...inputProps,
        label: "ФИО",
        required: true,

        error: !!form.formState.errors.fullName,
        helperText: form.formState.errors.fullName?.message
    };

    const fullNameControllerProps: ControllerProps<OrderForm> = {
        name: "fullName",
        control: form.control,
        rules: rules.fullName,
        render: ({ field }) => <TextField {...fullNameInputProps} {...field} />
    };

    const emailInputProps: TextFieldProps = {
        ...inputProps,
        label: "E-mail",
        type: "email",

        error: !!form.formState.errors.email,
        helperText: form.formState.errors.email?.message
    };

    const emailControllerProps: ControllerProps<OrderForm> = {
        name: "email",
        control: form.control,
        rules: rules.email,
        render: ({ field }) => <TextField {...emailInputProps} {...field} />
    };

    const phoneNumberInputProps: TextFieldProps = {
        ...inputProps,
        label: "Телефон",
        type: "tel",
        required: true,

        error: !!form.formState.errors.phoneNumber,
        helperText: form.formState.errors.phoneNumber?.message
    };

    const phoneNumberControllerProps: ControllerProps<OrderForm> = {
        name: "phoneNumber",
        control: form.control,
        rules: rules.phoneNumber,
        render: ({ field }) => (
            <TextField {...phoneNumberInputProps} {...field} />
        )
    };

    const commentaryInputProps: TextFieldProps = {
        ...inputProps,
        label: "Комментарий",
        multiline: true,
        rows: 4
    };

    const commentaryControllerProps: ControllerProps<OrderForm> = {
        name: "commentary",
        control: form.control,
        render: ({ field }) => (
            <TextField {...commentaryInputProps} {...field} />
        )
    };

    const buttonProps: ButtonProps = {
        variant: "contained",
        fullWidth: true,

        onClick: onSubmit,

        sx: {
            textTransform: "none",
            fontSize: "1rem",
            boxShadow: "none",

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    const smallTextProps: TypographyProps = {
        fontSize: "0.7rem"
    };

    return (
        <Box {...checkoutBoxProps}>
            <Title>Форма заказа</Title>
            <Box {...contactsBox}>
                <Controller {...fullNameControllerProps} />
                <Controller {...emailControllerProps} />
                <Controller {...phoneNumberControllerProps} />
            </Box>
            <Controller {...commentaryControllerProps} />
            <Typography {...smallTextProps}>
                * - поля, обязательные для заполнения
            </Typography>
            <Button {...buttonProps}>Оформить заказ</Button>
        </Box>
    );
};

export default OrderFormTemplate;
