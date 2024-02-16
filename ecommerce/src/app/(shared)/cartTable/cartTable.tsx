"use client";

import CartTableTemplate from "./cartTable.template";
import { MouseEventHandler, useEffect, useState } from "react";
import { CartState, clearCart, useAppDispatch, useAppSelector } from "@/lib";
import { useRouter } from "next/navigation";

const CartTable = ({
    full,
    displayOnly
}: {
    full?: boolean;
    displayOnly?: boolean;
}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const { items, cartTotal } = useAppSelector(CartState);

    const [clearWarningOpen, setClearWarningOpen] = useState<boolean>(false);

    const handleClearWarningOpen: MouseEventHandler<HTMLButtonElement> = () => {
        setClearWarningOpen(true);
    };

    const handleClearWarningClose: (event: any) => void = () => {
        setClearWarningOpen(false);
    };

    const handleClear: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(clearCart());
        setClearWarningOpen(false);
    };

    const handleOpenOrderPage = () => {
        router.push("/cart");
    };

    return (
        <CartTableTemplate
            items={items}
            full={full}
            totalPrice={cartTotal}
            clearWarningOpen={clearWarningOpen}
            onClearWarningOpen={handleClearWarningOpen}
            onClearWarningClose={handleClearWarningClose}
            onClear={handleClear}
            onOpenOrderPage={handleOpenOrderPage}
            displayOnly={displayOnly}
        />
    );
};

export default CartTable;
