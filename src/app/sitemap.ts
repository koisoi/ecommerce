import {
    backendAPI,
    categoryAPI,
    categoryPathToAlias,
    makePagePath
} from "@/lib";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const { url } = await backendAPI.getSite();
    const categories = await backendAPI.getPages({});
    const series = await Promise.all(
        categories.map((category) =>
            backendAPI.getPages({ path: category.path + ".*{1}" })
        )
    );
    const products = await categoryAPI.getCategoryItems({
        productsPerPage: 999999
    });

    type SitemapOptions = {
        lastModified?: string | Date | undefined;
        changeFrequency?:
            | "always"
            | "hourly"
            | "daily"
            | "weekly"
            | "monthly"
            | "yearly"
            | "never"
            | undefined;
        priority?: number | undefined;
    };

    const defaultOptions: SitemapOptions = {
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9
    };

    const result: MetadataRoute.Sitemap = [
        {
            url: url,
            ...defaultOptions
        },
        {
            url: `${url}/catalog`,
            ...defaultOptions
        },
        {
            url: `${url}/search`,
            ...defaultOptions
        },
        {
            url: `${url}/contacts.html`,
            ...defaultOptions
        },
        {
            url: `${url}/delivery.html`,
            ...defaultOptions
        },
        {
            url: `${url}/warranty.html`,
            ...defaultOptions
        }
    ];

    categories.forEach((category) => {
        result.push({
            url: `${url}${category.url}`,
            ...defaultOptions
        });
    });

    series.forEach((categorySeries) => {
        categorySeries.forEach((seria) => {
            result.push({
                url: `${url}${seria.url}`,
                ...defaultOptions
            });
        });
    });

    products.list.forEach((product) => {
        result.push({
            url: `${url}/${categoryPathToAlias(product.category.path)}/${
                product.series?.alias ? product.series?.alias + "/" : ""
            }${product.alias + ".html"}`,
            ...defaultOptions
        });
    });

    return result;
}
