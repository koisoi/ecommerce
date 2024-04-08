import { Box, BoxProps } from "@mui/material";
import CartTable from "../_shared/cartTable/cartTable.client";
import PageTitle from "../_shared/text/pageTitle";
import { UseFormReturn } from "react-hook-form";
import OrderFormTemplate from "../_shared/orderFormTemplate";
import { OrderRules } from "./cart.client";
import { OrderForm, cartBreadcrumbs } from "@/lib";
import { MouseEventHandler } from "react";
import Loading from "../_shared/loading";
import BreadcrumbsTemplate from "../_shared/breadcrumbsTemplate";

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
        flexDirection: { xs: "column", xlg: "row" },
        gap: "2rem"
    };

    const leftBoxProps: BoxProps = {
        flexGrow: 1
    };

    const rightBoxProps: BoxProps = {
        minWidth: { xs: "100%", sm: "370px" }
    };

    if (loading) return <Loading>Отправка заказа...</Loading>;

    return (
        <>
            <BreadcrumbsTemplate linksArray={cartBreadcrumbs} />
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
