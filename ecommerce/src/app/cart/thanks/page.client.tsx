"use client";

import { CartState, clearOrder, useAppDispatch, useAppSelector } from "@/lib";
import ThanksForOrderPageTemplate from "./page.template";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { deleteCart } from "@/lib/functions/cartCookie";

const ThanksForOrderPageClient = () => {
    const dispatch = useAppDispatch();

    const { items, postedOrderId, cartTotal, completedOrderForm } =
        useAppSelector(CartState);

    useEffect(() => {
        deleteCart();

        return () => {
            dispatch(clearOrder());
        };
    }, []);

    if (!postedOrderId || !items || !cartTotal || !completedOrderForm) {
        return notFound();
    }

    return (
        <ThanksForOrderPageTemplate
            fullName={completedOrderForm.fullName}
            email={completedOrderForm.email}
            phone={completedOrderForm.phoneNumber}
            commentary={completedOrderForm.commentary}
            orderId={postedOrderId}
            items={items}
            totalPrice={cartTotal}
        />
    );
};

export default ThanksForOrderPageClient;
