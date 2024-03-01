"use client";

import { Box, BoxProps } from "@mui/material";
import { Controller, ControllerProps, UseFormReturn } from "react-hook-form";
import { OrderRules } from "./page";
import Title from "../(shared)/text/title.template";
import { OrderForm } from "@/lib";
import { MouseEventHandler } from "react";
import {
    CommentaryInput,
    EmailInput,
    FormButton,
    FullNameInput,
    PhoneInput
} from "../(shared)/formFields.template";

const OrderFormTemplate = ({
    form,
    rules,
    onSubmit,
    props
}: {
    form: UseFormReturn<OrderForm>;
    rules: OrderRules;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
    props?: BoxProps;
}) => {
    const checkoutBoxProps: BoxProps = {
        flexGrow: 1,

        position: "sticky",
        top: "60px",

        height: "fit-content",

        border: "1px solid",
        borderColor: "divider",

        padding: "20px",
        paddingTop: 0,

        display: "flex",
        flexDirection: "column",
        gap: "20px",

        ...props
    };

    const contactsBox: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%"
    };

    const fullNameControllerProps: ControllerProps<OrderForm> = {
        name: "fullName",
        control: form.control,
        rules: rules.fullName,
        render: ({ field }) => <FullNameInput form={form} field={field} />
    };

    const emailControllerProps: ControllerProps<OrderForm> = {
        name: "email",
        control: form.control,
        rules: rules.email,
        render: ({ field }) => <EmailInput form={form} field={field} />
    };

    const phoneNumberControllerProps: ControllerProps<OrderForm> = {
        name: "phoneNumber",
        control: form.control,
        rules: rules.phoneNumber,
        render: ({ field }) => <PhoneInput form={form} field={field} />
    };

    const commentaryControllerProps: ControllerProps<OrderForm> = {
        name: "commentary",
        control: form.control,
        render: ({ field }) => <CommentaryInput form={form} field={field} />
    };

    return (
        <Box {...checkoutBoxProps}>
            <Title props={{ noWrap: true }}>Форма заказа</Title>
            <Box {...contactsBox}>
                <Controller {...fullNameControllerProps} />
                <Controller {...emailControllerProps} />
                <Controller {...phoneNumberControllerProps} />
            </Box>
            <Controller {...commentaryControllerProps} />
            <FormButton onSubmit={onSubmit}>Оформить заказ</FormButton>
        </Box>
    );
};

export default OrderFormTemplate;
