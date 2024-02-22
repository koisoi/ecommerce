"use client";

import { usePathname, useSearchParams } from "next/navigation";
import BreadcrumbsTemplate from "./breadcrumbs.template";
import { Url } from "next/dist/shared/lib/router/router";
import { BreadcrumbsState, useAppSelector } from "@/lib";

const Breadcrumbs = () => {
    const params = useSearchParams();
    const category: string | null = params.get("category");
    const series: string | null = params.get("series");
    const product: string | null = params.get("product");

    const { currentCategoryTitle, currentSeriesTitle } =
        useAppSelector(BreadcrumbsState);

    let pathArray = usePathname().split("/");
    if (!!series) {
        const insertIndex = pathArray.findIndex((val) => val === "catalog");
        pathArray.splice(insertIndex + 1, 0, "series");
    }

    // @ts-ignore
    const linksArray: { link: Url; title: string }[] = pathArray
        .map((path /*i, array*/): { link: Url; title: string } | undefined => {
            // const link = `${array[i - 1] ? "/" + array[i - 1] : ""}/${path}`;
            let link: Url = {};
            let title = "";

            switch (path) {
                case "catalog":
                    title = currentCategoryTitle || "Каталог";
                    link = { pathname: "/catalog", query: { category } };
                    break;

                case "series":
                    title = currentSeriesTitle || "Серия";
                    link = {
                        pathname: "/catalog",
                        query: { category, series }
                    };
                    break;

                case "warranty":
                    title = "Гарантии и возврат";
                    link = "/warranty";
                    break;

                case "delivery":
                    title = "Доставка и оплата";
                    link = "/delivery";
                    break;

                case "contacts":
                    title = "Контактная информаиця";
                    link = "/contacts";
                    break;

                case "cart":
                    title = "Корзина";
                    link = "/cart";
                    break;

                case "thanks":
                    title = "Спасибо за заказ!";
                    link = "/cart/thanks";
                    break;

                case "search":
                    title = "Поиск";
                    link = "/search";
                    break;

                default:
                    return undefined;
            }

            return {
                link,
                title
            };
        })
        .filter((val) => val !== undefined);

    if (pathArray.length === 1) return null;

    return <BreadcrumbsTemplate linksArray={linksArray} lastLink={!!product} />;
};

export default Breadcrumbs;
