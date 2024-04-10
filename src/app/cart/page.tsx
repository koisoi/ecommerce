import { Metadata } from "next";
import Cart from "./cart.client";

export const metadata: Metadata = {
    title: "Корзина"
};

const CartPage = () => {
    return <Cart />;
};

export default CartPage;
