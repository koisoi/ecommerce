"use client";

import {
    CartState,
    clearOrder,
    deleteCart,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import ThanksForOrderTemplate from "./thanksForOrderTemplate";
import { notFound } from "next/navigation";
import { useEffect } from "react";

const ThanksForOrder = () => {
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
        <ThanksForOrderTemplate
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

export default ThanksForOrder;
