"use client";

import {
    CartItem,
    CartState,
    CategoryItem,
    GlobalState,
    OrderForm,
    authorize,
    emailPattern,
    getLinkDomain,
    getProductLink,
    postOrder,
    postStatistics,
    requiredRule,
    ruPhoneValidator,
    setCanAuthorize,
    setCanPostOrder,
    setCanPostStatistics,
    setCart,
    setCompletedOrderInfo,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import FastOrderFormTemplate from "./fastOrderFormTemplate.client";
import { useForm } from "react-hook-form";
import { OrderRules } from "../../cart/cart.client";
import { MouseEventHandler, useEffect, useState } from "react";
import { PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { executeYMScript } from "@/lib/functions/executeYMScript";

const FastOrderForm = ({
    item,
    open,
    onClose
}: {
    item: CategoryItem;
    open: boolean;
    onClose: MouseEventHandler<HTMLButtonElement>;
}) => {
    const dispatch = useAppDispatch();

    const { loading } = useAppSelector(CartState);
    const { utm, ip, referrer, start_url } = useAppSelector(GlobalState);

    const [currentPromise, setCurrentPromise] = useState<Promise<
        PayloadAction<any>
    > | null>(null);
    const [orderSendingCompleted, setOrderSendingCompleted] =
        useState<boolean>(false);
    const [sentOrderId, setSentOrderId] = useState<string | null>(null);
    const [sentForm, setSentForm] = useState<OrderForm>({
        fullName: "",
        email: "",
        phoneNumber: "",
        commentary: ""
    });

    const form = useForm<OrderForm>({
        values: {
            fullName: "",
            email: "",
            phoneNumber: "",
            commentary: ""
        }
    });

    const formValidation: OrderRules = {
        fullName: { required: requiredRule },
        email: {
            pattern: emailPattern
        },
        phoneNumber: {
            required: requiredRule,
            validate: ruPhoneValidator
        }
    };

    const handleSubmit = (data: OrderForm) => {
        data.phoneNumber = data.phoneNumber.replace(/\D/g, "");
        setSentForm({ ...data });
        // dispatch(
        //     setCart([
        //         {
        //             url: getProductLink(item.category.path, item.alias),
        //             alias: item.alias,
        //             title: item.title,
        //             imgLink: getLinkDomain(item.images[0].url),
        //             price: item.price,
        //             amount: 1,
        //             articul: item.articul
        //         }
        //     ])
        // );
        const cartItem: CartItem = {
            url: getProductLink(item.category.path, item.alias),
            alias: item.alias,
            title: item.title,
            imgLink: getLinkDomain(item.images[0].url),
            price: item.price,
            amount: 1,
            articul: item.articul
        };

        const authPromise = dispatch(authorize());
        setCurrentPromise(authPromise);
        authPromise
            .unwrap()
            .then(() => {
                const orderPromise = dispatch(
                    postOrder({
                        ...data,
                        total: cartItem.price,
                        cart: [
                            {
                                ...cartItem,
                                articul: cartItem.articul,
                                amount_original: cartItem.price,
                                quant: "1"
                            }
                        ]
                    })
                );
                setCurrentPromise(orderPromise);
                orderPromise.unwrap().then((val): any => {
                    if (!val?.appeal.id || val?.status != "ok")
                        throw new Error(
                            "Something went wrong while sending order. Server didn't respond with OK status."
                        );
                    else {
                        executeYMScript("order_add_fast");
                        executeYMScript("appeal_add_from-order");
                        setSentOrderId(val?.appeal.id);
                    }

                    const statisticsPromise = dispatch(
                        postStatistics({
                            arg: {
                                parent_id: val.appeal.id,
                                ip,
                                referer: referrer,
                                start_url,
                                utm
                            },
                            fastOrder: true
                        })
                    );
                    setCurrentPromise(statisticsPromise);

                    statisticsPromise.unwrap().then((val) => {
                        if (val?.status != "ok")
                            throw new Error(
                                "Something went wrong while sending statistics. Server didn't respond with OK status."
                            );
                        dispatch(setCompletedOrderInfo(data));
                        setOrderSendingCompleted(true);
                        // router.push("/cart/thanks");
                    });
                });
            })
            .catch((error) => console.error(error.message));
    };

    useEffect(() => {
        dispatch(setCanAuthorize(true));
        setSentOrderId(null);
        setOrderSendingCompleted(false);

        return () => {
            // @ts-ignore
            if (currentPromise) currentPromise.abort();
            dispatch(setCanAuthorize(false));
            dispatch(setCanPostOrder(false));
            dispatch(setCanPostStatistics(false));
        };
    }, []);

    return (
        <FastOrderFormTemplate
            item={item}
            rules={formValidation}
            form={form}
            open={open}
            onSubmit={form.handleSubmit(handleSubmit)}
            onClose={onClose}
            loading={loading}
            orderSendingCompleted={orderSendingCompleted}
            sentOrderId={sentOrderId}
            sentForm={sentForm}
        />
    );
};

export default FastOrderForm;
