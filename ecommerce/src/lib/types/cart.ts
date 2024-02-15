import { Url } from "next/dist/shared/lib/router/router";

export type CartItem = {
    url: Url;
    alias: string;
    title: string;
    imgLink: string;
    price: string;
    amount: number;
    articul: string;
};
