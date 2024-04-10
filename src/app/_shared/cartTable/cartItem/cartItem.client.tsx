"use client";

import {
    CartItem,
    deleteItemFromCart,
    setCartItemAmount,
    useAppDispatch
} from "@/lib";
import CartItemTemplate from "./cartItemTemplate.client";
import { MouseEventHandler, useState } from "react";

const CartItemComponent = ({
    item,
    displayOnly,
    columnsTotal
}: {
    item: CartItem;
    displayOnly?: boolean;
    columnsTotal: number;
}) => {
    const dispatch = useAppDispatch();
    const totalPrice = (Number(item.price) * item.amount).toString();

    const [deleteWarningOpen, setDeleteWarningOpen] = useState<boolean>(false);

    const handleAmountChange: (
        event:
            | React.FocusEvent<HTMLInputElement>
            | React.PointerEvent
            | React.KeyboardEvent,
        value: number | undefined
    ) => void = (_, value) => {
        dispatch(setCartItemAmount({ item, amount: value || 1 }));
    };

    const handleDeleteWarningOpen: MouseEventHandler<HTMLButtonElement> = () =>
        setDeleteWarningOpen(true);

    const handleDeleteWarningClose: (event: any) => void = () => {
        setDeleteWarningOpen(false);
    };

    const handleDelete: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(deleteItemFromCart(item));
        setDeleteWarningOpen(false);
    };

    return (
        <CartItemTemplate
            item={item}
            onAmountChange={handleAmountChange}
            deleteWarningOpen={deleteWarningOpen}
            onDeleteWarningOpen={handleDeleteWarningOpen}
            onDeleteWarningClose={handleDeleteWarningClose}
            onDelete={handleDelete}
            totalPrice={totalPrice}
            displayOnly={displayOnly}
            columnsTotal={columnsTotal}
        />
    );
};

export default CartItemComponent;
