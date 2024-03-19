import { Box, BoxProps } from "@mui/material";
import { Controller, ControllerProps, UseFormReturn } from "react-hook-form";
import { OrderRules } from "../cart/cart.client";
import Title from "./text/title";
import { OrderForm } from "@/lib";
import { MouseEventHandler } from "react";
import {
    CommentaryInputTemplate,
    EmailInputTemplate,
    FormButton,
    FullNameInputTemplate,
    PhoneInputTemplate
} from "./formFieldsTemplate.client";

const OrderFormTemplate = ({
    form,
    rules,
    onSubmit,
    props,
    compact
}: {
    form: UseFormReturn<OrderForm>;
    rules: OrderRules;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
    props?: BoxProps;
    compact?: boolean;
}) => {
    const checkoutBoxProps: BoxProps = {
        position: "sticky",
        top: "60px",

        height: "fit-content",

        ...(!compact && {
            border: "1px solid",
            borderColor: "divider",
            padding: "1rem"
        }),

        display: "flex",
        flexDirection: "column",
        gap: "1rem",

        ...props
    };

    const contactsBox: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%"
    };

    const fullNameControllerProps: ControllerProps<OrderForm> = {
        name: "fullName",
        control: form.control,
        rules: rules.fullName,
        render: ({ field }) => (
            <FullNameInputTemplate form={form} field={field} />
        )
    };

    const emailControllerProps: ControllerProps<OrderForm> = {
        name: "email",
        control: form.control,
        rules: rules.email,
        render: ({ field }) => <EmailInputTemplate form={form} field={field} />
    };

    const phoneNumberControllerProps: ControllerProps<OrderForm> = {
        name: "phoneNumber",
        control: form.control,
        rules: rules.phoneNumber,
        render: ({ field }) => <PhoneInputTemplate form={form} field={field} />
    };

    const commentaryControllerProps: ControllerProps<OrderForm> = {
        name: "commentary",
        control: form.control,
        render: ({ field }) => (
            <CommentaryInputTemplate form={form} field={field} />
        )
    };

    return (
        <Box {...checkoutBoxProps}>
            {!compact && <Title props={{ noWrap: true }}>Форма заказа</Title>}
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
