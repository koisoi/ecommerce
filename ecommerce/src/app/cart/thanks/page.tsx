import { Metadata } from "next";
import ThanksForOrderPageClient from "./page.client";

export const metadata: Metadata = {
    title: "Спасибо за заказ!"
};

const ThanksForOrderPage = () => {
    return <ThanksForOrderPageClient />;
};

export default ThanksForOrderPage;
