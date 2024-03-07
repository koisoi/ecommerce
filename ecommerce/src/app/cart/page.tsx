import { Metadata } from "next";
import CartClient from "./page.client";

export const metadata: Metadata = {
    title: "Корзина"
};

const Cart = () => {
    return <CartClient />;
};

export default Cart;
