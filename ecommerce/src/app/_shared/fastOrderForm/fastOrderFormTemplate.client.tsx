"use client";

import {
    Box,
    BoxProps,
    DialogContent,
    DialogContentProps,
    DialogProps,
    DialogTitle,
    DialogTitleProps,
    IconButton,
    IconButtonProps
} from "@mui/material";
import ProductCardTemplate, { ProductCardProps } from "../productCardTemplate";
import {
    CategoryItem,
    OrderData,
    OrderForm,
    categoryAliasToPath,
    categoryPathToAlias,
    getLinkDomain,
    getProductLink,
    useMediaQueries
} from "@/lib";
import Title from "../text/title";
import { UseFormReturn } from "react-hook-form";
import { OrderRules } from "../../cart/cart.client";
import OrderFormTemplate from "../orderFormTemplate";
import { MouseEventHandler } from "react";
import { Close } from "@mui/icons-material";
import Loading from "../loading";
import { DialogTemplate } from "..";
import ThirdTitle from "../text/thirdTitle";
import Paragraph from "../text/paragraph";
import CompletedOrderFormTemplate, {
    CompletedOrderFormProps
} from "../completedOrderFormTemplate.client";

const FastOrderFormTemplate = ({
    item,
    open,
    form,
    rules,
    onSubmit,
    onClose,
    loading,
    orderSendingCompleted,
    sentOrderId,
    sentForm
}: {
    item: CategoryItem;
    open: boolean;
    form: UseFormReturn<OrderForm>;
    rules: OrderRules;
    onSubmit: MouseEventHandler<HTMLButtonElement>;
    onClose: MouseEventHandler<HTMLButtonElement>;
    loading: boolean;
    orderSendingCompleted: boolean;
    sentOrderId: string | null;
    sentForm: OrderForm;
}) => {
    const screen = useMediaQueries();

    const dialogProps: DialogProps = {
        open,
        disableScrollLock: true,
        maxWidth: screen.sm ? "md" : "xs",
        fullWidth: true
    };

    const dialogContentProps: DialogContentProps = {
        sx: {
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: "20px",

            overflowX: "hidden",

            position: "relative",

            minHeight: "200px",
            minWidth: "200px"
        }
    };

    const iconButtonProps: IconButtonProps = {
        onClick: onClose
    };

    const productCardProps: ProductCardProps = {
        cartItem: {
            url: getProductLink(
                categoryPathToAlias(item.category.path)!,
                item.alias
            ),
            alias: item?.alias || "",
            title: item?.title || "",
            imgLink: item ? getLinkDomain(item.images[0].url) : "",
            price: item?.price || "",
            amount: 1,
            articul: item?.articul || ""
        },
        newProduct: item?.is_new,
        recommended: item?.is_recommend,
        categoryItem: item,

        initialCardProps: {
            sx: {
                width: "unset",
                minHeight: { xs: "unset", md: "300px" },
                maxWidth: { xs: "unset", md: "210px" },
                alignItems: "center",
                textAlign: "center"
            }
        },
        initialCardMediaProps: {
            sx: {
                minHeight: "100px",
                height: "100%",
                maxWidth: { xs: "100px", md: "unset" }
            }
        },
        ...(screen.md && {
            initialCardContentProps: {
                sx: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",

                    textAlign: "center"
                }
            }
        }),
        linkProps: {
            sx: { height: { xs: "100px", md: "150px" } }
        },
        initialActionRowProps: {
            sx: {
                alignItems: { xs: "flex-start", md: "center" }
            }
        }
    };

    const productCardBoxProps: BoxProps = {
        alignSelf: "flex-start",

        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",

        width: { xs: "100%", md: "unset" }
    };

    const orderFormProps: BoxProps = {
        flexGrow: { xs: 0, sm: 1 },
        position: "static",
        top: 0
    };

    const completedOrderFormStyleProps: BoxProps = {
        flexGrow: 1,
        position: "static"
    };

    const completedOrderFormProps: CompletedOrderFormProps = {
        orderId: sentOrderId || "",
        fullName: sentForm.fullName,
        email: sentForm.email,
        phone: sentForm.phoneNumber,
        commentary: sentForm.commentary,
        props: completedOrderFormStyleProps
    };

    const dialogTitleProps: DialogTitleProps = {
        component: "div",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    };

    return (
        <DialogTemplate props={dialogProps}>
            <DialogTitle {...dialogTitleProps}>
                <Title
                    props={{ /*noWrap: true*/ sx: { whiteSpace: "nowrap" } }}
                >
                    {!orderSendingCompleted && !sentOrderId && "Быстрый заказ"}
                    {orderSendingCompleted &&
                        sentOrderId &&
                        "Спасибо за заказ!"}
                </Title>

                <IconButton {...iconButtonProps}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent {...dialogContentProps}>
                {!loading && (
                    <>
                        <Box {...productCardBoxProps}>
                            <ProductCardTemplate
                                {...productCardProps}
                                hideButtons
                            />
                        </Box>
                        {!orderSendingCompleted && !sentOrderId && (
                            <OrderFormTemplate
                                form={form}
                                rules={rules}
                                onSubmit={onSubmit}
                                props={orderFormProps}
                                compact
                            />
                        )}
                        {orderSendingCompleted && sentOrderId && (
                            <CompletedOrderFormTemplate
                                {...completedOrderFormProps}
                            />
                        )}
                    </>
                )}
                {loading && <Loading>Отправка заказа...</Loading>}
            </DialogContent>
        </DialogTemplate>
    );
};

export default FastOrderFormTemplate;
