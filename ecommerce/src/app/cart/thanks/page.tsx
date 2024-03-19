import { Metadata } from "next";
import ThanksForOrder from "./thanksForOrder.client";

export const metadata: Metadata = {
    title: "Спасибо за заказ!"
};

const ThanksForOrderPage = () => {
    return <ThanksForOrder />;
};

export default ThanksForOrderPage;
