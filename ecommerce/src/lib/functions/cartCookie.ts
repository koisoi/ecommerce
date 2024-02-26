import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { CartItem } from "../types/cart";

export const changeCart = (initialItems: CartItem[]) => {
    // const cart = JSON.parse(getCookie("cart") || "[]");
    // const items: CartItem[] = [...cart, ...initialItems];

    setCookie("cart", JSON.stringify(initialItems), { maxAge: 604800 });
};

export const getCart = () => {
    return getCookie("cart");
};

export const deleteCart = () => {
    deleteCookie("cart");
};
