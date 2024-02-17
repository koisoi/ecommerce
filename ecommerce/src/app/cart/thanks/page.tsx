"use client";

import { CartState, clearOrder, useAppDispatch, useAppSelector } from "@/lib";
import ThanksForOrderPageTemplate from "./page.template";
import { notFound } from "next/navigation";
import { useEffect } from "react";

const ThanksForOrderPage = () => {
    const dispatch = useAppDispatch();

    const { items, postedOrderId, cartTotal, completedOrderForm } =
        useAppSelector(CartState);

    useEffect(() => {
        return () => {
            console.log("жопа");
            // dispatch(clearOrder());
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
