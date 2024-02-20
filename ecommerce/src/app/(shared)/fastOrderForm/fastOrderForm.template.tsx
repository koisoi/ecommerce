"use client";

import {
    Box,
    BoxProps,
    Dialog,
    DialogContent,
    DialogContentProps,
    DialogProps,
    IconButton,
    IconButtonProps
} from "@mui/material";
import ProductCard, {
    ProductCardProps
} from "../productCard/productCard.template";
import {
    CategoryItem,
    OrderForm,
    getProductImageLink,
    useMediaQueries
} from "@/lib";
import Title from "../text/title.template";
import { UseFormReturn } from "react-hook-form";
import { OrderRules } from "../../cart/page";
import OrderFormTemplate from "../../cart/orderForm.template";
import { MouseEventHandler } from "react";
import { Close } from "@mui/icons-material";
import Loading from "../loading.template";

const FastOrderFormTemplate = ({
    item,
    open,
    form,
    rules,
    onSubmit,
    onClose,
    loading
}: {
    item?: CategoryItem;
    open: boolean;
    form: UseFormReturn<OrderForm>;
    rules: OrderRules;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
    onClose: MouseEventHandler<HTMLButtonElement>;
    loading: boolean;
}) => {
    const screen = useMediaQueries();

    const dialogProps: DialogProps = {
        open,
        maxWidth: screen.sm ? "md" : "xs",
        fullWidth: true
    };

    const dialogContentProps: DialogContentProps = {
        sx: {
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: "20px",

            overflowX: "hidden",

            position: "relative",

            minHeight: "200px",
            minWidth: "200px"
        }
    };

    const iconButtonProps: IconButtonProps = {
        onClick: onClose,

        sx: {
            position: "absolute",
            top: "20px",
            right: "20px",

            zIndex: "10"
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
            sx: { width: "unset" }
        }
    };

    const productCardBoxProps: BoxProps = {
        alignSelf: "flex-start",
        flexGrow: 1,

        display: "flex",
        flexDirection: "column",
        gap: "20px",

        width: { xs: "100%", sm: "unset" }
    };

    const orderFormProps: BoxProps = {
        border: "none",
        flexGrow: 1
    };

    return (
        <Dialog {...dialogProps}>
            <DialogContent {...dialogContentProps}>
                <IconButton {...iconButtonProps}>
                    <Close />
                </IconButton>
                {!loading && (
                    <>
                        <Box {...productCardBoxProps}>
                            <Title props={{ noWrap: true }}>
                                Быстрый заказ
                            </Title>
                            <ProductCard {...productCardProps} hideButtons />
                        </Box>
                        <OrderFormTemplate
                            form={form}
                            rules={rules}
                            onSubmit={onSubmit}
                            props={orderFormProps}
                        />
                    </>
                )}
                {loading && <Loading />}
            </DialogContent>
        </Dialog>
    );
};

export default FastOrderFormTemplate;
