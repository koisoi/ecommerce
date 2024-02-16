"use client";

import { useForm } from "react-hook-form";
import CartTemplate from "./page.template";
import {
    CartState,
    OrderForm,
    RulesType,
    authorize,
    emailPattern,
    postOrder,
    postStatistics,
    requiredRule,
    ruPhonePattern,
    setCanAuthorize,
    setCanPostOrder,
    setCanPostStatistics,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import { useEffect, useState } from "react";
import { PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "@/lib/slices/global.slice";

export type OrderRules = {
    fullName: RulesType;
    email: RulesType;
    phoneNumber: RulesType;
};

const Cart = () => {
    const dispatch = useAppDispatch();

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
            pattern: ruPhonePattern
        }
    };

    const handleSubmit = (data: OrderForm) => {
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
                    if (!val?.appeal.id) return;

                    const statisticsPromise = dispatch(
                        postStatistics({
                            parent_id: val.appeal.id,
                            ip,
                            referer: referrer,
                            start_url,
                            utm
                        })
                    );
                    setCurrentPromise(statisticsPromise);
                });
            })
            .catch((error) => console.error(error.message));
    };

    useEffect(() => {
        dispatch(setCanAuthorize(true));
        dispatch(setCanPostOrder(true));
        dispatch(setCanPostStatistics(true));

        return () => {
            // @ts-ignore
            if (currentPromise) currentPromise.abort();
            dispatch(setCanAuthorize(false));
            dispatch(setCanPostOrder(false));
            dispatch(setCanPostStatistics(false));
            // TODO: setcanfetch = false
        };
    }, []);

    return (
        <CartTemplate
            form={form}
            rules={formValidation}
            onSubmit={form.handleSubmit(handleSubmit)}
        />
    );
};

export default Cart;
