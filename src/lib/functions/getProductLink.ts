export const getProductLink = (
    category: string,
    product: string,
    series?: string | null
) =>
    `/catalog/${category}${series ? "/" + series : ""}/${
        product.includes(".html") ? product : product + ".html"
    }`;
