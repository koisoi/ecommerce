import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { CartItem } from "../types/cart";

export const changeCart = (items: CartItem[]) => {
    setCookie("cart", JSON.stringify(items), { maxAge: 604800 });
};

export const getCart = () => {
    return getCookie("cart");
};

export const deleteCart = () => {
    deleteCookie("cart");
};
