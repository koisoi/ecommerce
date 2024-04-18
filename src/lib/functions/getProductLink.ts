import { CategoryItem } from "../types/category";

export const getProductLink = (
    category: string,
    product: string,
    series?: string | null
) =>
    `/catalog/${category}${series ? "/" + series : ""}/${
        product.includes(".html") ? product : product + ".html"
    }`;

export const getProductLinkWithUrl = (baseUrl: string, product: string) =>
    `${baseUrl}/${product.includes(".html") ? product : product + ".html"}`;

export const getProductTitle = (item: CategoryItem) => `${
    item.prefix ? item.prefix + " " : ""
}
${item.title || ""}`;
