"use client";

import { CartState, clearOrder, useAppDispatch, useAppSelector } from "@/lib";
import ThanksForOrderPageTemplate from "./page.template";
import { notFound, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Router } from "next/router";
import { deleteCart } from "@/lib/functions/cartCookie";

const ThanksForOrderPage = () => {
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
        console.log(postedOrderId, items, cartTotal, completedOrderForm);
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

export default ThanksForOrderPage;
