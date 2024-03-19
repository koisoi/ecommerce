"use client";

import {
    CartState,
    CategoryItem,
    GlobalState,
    OrderForm,
    authorize,
    emailPattern,
    getImageLink,
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
    const router = useRouter();

    const { items, loading, cartTotal } = useAppSelector(CartState);
    const { utm, ip, referrer, start_url } = useAppSelector(GlobalState);

    const [currentPromise, setCurrentPromise] = useState<Promise<
        PayloadAction<any>
    > | null>(null);

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
        dispatch(
            setCart([
                {
                    url: getProductLink(item.category.path, item.alias),
                    alias: item.alias,
                    title: item.title,
                    imgLink: getImageLink(item.images[0].url),
                    price: item.price,
                    amount: 1,
                    articul: item.articul
                }
            ])
        );

        const authPromise = dispatch(authorize());
        setCurrentPromise(authPromise);
        authPromise
            .unwrap()
            .then(() => {
                const orderPromise = dispatch(
                    postOrder({
                        ...data,
                        total: cartTotal,
                        cart: items.map((el) => ({
                            articul: el.articul,
                            amount_original: el.price,
                            quant: el.amount.toString()
                        }))
                    })
                );
                setCurrentPromise(orderPromise);
                orderPromise.unwrap().then((val): any => {
                    if (!val?.appeal.id || val?.status != "ok")
                        throw new Error(
                            "Something went wrong while sending order. Server didn't respond with OK status."
                        );

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
                        router.push("/cart/thanks");
                    });
                });
            })
            .catch((error) => console.error(error.message));
    };

    useEffect(() => {
        dispatch(setCanAuthorize(true));

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
        />
    );
};

export default FastOrderForm;
