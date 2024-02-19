"use client";

import {
    Box,
    BoxProps,
    Dialog,
    DialogContent,
    DialogContentProps,
    DialogTitle,
    TextField,
    TextFieldProps
} from "@mui/material";
import ProductCard, {
    ProductCardProps
} from "../(shared)/productCard/productCard.template";
import { CategoryItem, OrderForm, getProductImageLink } from "@/lib";
import Title from "../(shared)/title.template";
import { Controller, ControllerProps, UseFormReturn } from "react-hook-form";
import { MuiTelInput, MuiTelInputProps } from "mui-tel-input";
import { OrderRules } from "../cart/page";
import OrderFormTemplate from "../cart/orderForm.template";
import { MouseEventHandler } from "react";

const FastOrderFormTemplate = ({
    item,
    form,
    rules,
    onSubmit
}: {
    item?: CategoryItem;
    form: UseFormReturn<OrderForm>;
    rules: OrderRules;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
}) => {
    const dialogContentProps: DialogContentProps = {
        sx: {
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px"
        }
    };

    const productCardProps: ProductCardProps = {
        cartItem: {
            url: {
                pathname: "/catalog/product",
                query: {
                    category: item?.category.path,
                    series: item?.series?.alias,
                    product: item?.alias
                }
            },
            alias: item?.alias || "",
            title: item?.title || "",
            imgLink: item ? getProductImageLink(item.images[0].url) : "",
            price: item?.price || "",
            amount: 1,
            articul: item?.articul || ""
        },
        newProduct: item?.is_new,
        recommended: item?.is_recommend,

        cardProps: {
            sx: { width: "unset", alignSelf: "flex-start", flexGrow: 1 }
        }
    };

    const formBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
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

    const phoneNumberInputProps: MuiTelInputProps = {
        defaultCountry: "RU",
        forceCallingCode: true,
        disableDropdown: true,
        getFlagElement: () => null,
        placeholder: "XXX XXX XX XX",

        error: !!form.formState.errors.phoneNumber,
        helperText: form.formState.errors.phoneNumber?.message
    };

    const phoneNumberControllerProps: ControllerProps<OrderForm> = {
        name: "phoneNumber",
        control: form.control,
        rules: rules.phoneNumber,
        render: ({ field }) => (
            <MuiTelInput {...field} {...phoneNumberInputProps} />
        )
    };

    const orderFormProps: BoxProps = {
        border: "none",
        flexGrow: 1
    };

    return (
        <Dialog open={!!item} fullWidth maxWidth="md">
            <DialogTitle>
                <Title>Быстрый заказ</Title>
            </DialogTitle>
            <DialogContent {...dialogContentProps}>
                <ProductCard {...productCardProps} hideButtons />
                <OrderFormTemplate
                    form={form}
                    rules={rules}
                    onSubmit={onSubmit}
                    props={orderFormProps}
                />
            </DialogContent>
        </Dialog>
    );
};

export default FastOrderFormTemplate;
