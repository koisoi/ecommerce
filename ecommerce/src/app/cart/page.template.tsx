import { Box, BoxProps } from "@mui/material";
import CartTable from "../(shared)/cartTable/cartTable";
import PageTitle from "../(shared)/text/pageTitle.template";
import { UseFormReturn } from "react-hook-form";
import OrderFormTemplate from "./orderForm.template";
import { OrderRules } from "./page.client";
import { OrderForm, cartBreadcrumbs } from "@/lib";
import { MouseEventHandler } from "react";
import Loading from "../(shared)/loading.template";
import AppBreadcrumbs from "../(shared)/breadcrumbs/breadcrumbs.template";

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
        flexGrow: 1,
        maxWidth: "900px"
    };

    const rightBoxProps: BoxProps = {
        flexGrow: 1
    };

    if (loading) return <Loading>Отправка заказа...</Loading>;

    return (
        <>
            <AppBreadcrumbs linksArray={cartBreadcrumbs} />
            <PageTitle>Корзина</PageTitle>
            <Box {...wrapperProps}>
                <Box {...leftBoxProps}>
                    <CartTable full />
                </Box>
                {hasItems && (
                    <Box {...rightBoxProps}>
                        <OrderFormTemplate
                            form={form}
                            rules={rules}
                            onSubmit={onSubmit}
                        />
                    </Box>
                )}
            </Box>
        </>
    );
};

export default CartTemplate;
