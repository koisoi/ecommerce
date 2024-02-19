"use client";

import { Box, BoxProps } from "@mui/material";
import CartTable from "../(shared)/cartTable/cartTable";
import PageTitle from "../(shared)/pageTitle.template";
import { UseFormReturn } from "react-hook-form";
import OrderFormTemplate from "./orderForm.template";
import { OrderRules } from "./page";
import { OrderForm } from "@/lib";
import { MouseEventHandler } from "react";
import OrderLoading from "./loading.template";

const CartTemplate = ({
    form,
    rules,
    hasItems,
    onSubmit,
    loading
}: {
    form: UseFormReturn<OrderForm>;
    rules: OrderRules;
    hasItems: boolean;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
    loading: boolean;
}) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: "20px"
    };

    const leftBoxProps: BoxProps = {
        // width: "100%",
        flexGrow: 1
    };

    if (loading) return <OrderLoading />;

    return (
        <>
            <PageTitle>Корзина</PageTitle>
            <Box {...wrapperProps}>
                <Box {...leftBoxProps}>
                    <CartTable full />
                </Box>
                {hasItems && (
                    <OrderFormTemplate
                        form={form}
                        rules={rules}
                        onSubmit={onSubmit}
                    />
                )}
            </Box>
        </>
    );
};

export default CartTemplate;
