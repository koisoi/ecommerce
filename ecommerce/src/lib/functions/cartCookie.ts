import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { CartItem } from "../types/cart";

export const changeCart = (initialItems: CartItem[]) => {
    setCookie("cart", JSON.stringify(initialItems), { maxAge: 604800 });
};

export const getCart = () => {
    return getCookie("cart");
};

export const deleteCart = () => {
    deleteCookie("cart");
};
