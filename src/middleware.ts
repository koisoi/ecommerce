import { NextRequest, NextResponse } from "next/server";
import { landingConfig } from "./lib/data/config";
import { PageData } from "./lib/types/backend";
import { CategoryItemsResponse } from "./lib/types/category";

export async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname !== req.nextUrl.pathname.toLowerCase()) {
        return NextResponse.redirect(
            new URL(
                req.nextUrl.origin +
                    req.nextUrl.pathname.toLowerCase() +
                    req.nextUrl.search
            ),
            301
        );
    }

    if (req.nextUrl.pathname.startsWith("/catalog/")) {
        const categories: PageData[] = await fetch(
            `https://dev.telescope1.ru/backend/index/pages/site_id/${landingConfig.id}?path=&format=json`,
            {
                method: "GET",
                credentials: "include",
                mode: "cors",
                headers: new Headers({
                    Authorization: "Basic " + btoa("fr123:123qwe"),
                    "Content-Type": "application/json"
                }),
                cache: "no-store"
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                return data.pages;
            });
        // const categories = await backendAPI.getPages({});

        const series: PageData[][] = await Promise.all(
            categories.map(
                async (category) =>
                    await fetch(
                        `https://dev.telescope1.ru/backend/index/pages/site_id/${landingConfig.id}?path=${category.path}.*{1}&format=json`,
                        {
                            method: "GET",
                            credentials: "include",
                            mode: "cors",
                            headers: new Headers({
                                Authorization: "Basic " + btoa("fr123:123qwe"),
                                "Content-Type": "application/json"
                            }),
                            cache: "no-store"
                        }
                    )
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error(response.statusText);
                            }
                            return response.json();
                        })
                        .then((data) => {
                            return data.pages;
                        })
                // backendAPI.getPages({ path: category.path + ".*{1}" })
            )
        );

        const products: CategoryItemsResponse = await fetch(
            `https://dev.telescope1.ru/catalog/backend/products/site_id/${landingConfig.id}?limit=999999&format=json`,
            {
                method: "GET",
                credentials: "include",
                mode: "cors",
                headers: new Headers({
                    Authorization: "Basic " + btoa("fr123:123qwe"),
                    "Content-Type": "application/json"
                }),
                cache: "no-store"
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                return data.products;
            });
        // const products = await categoryAPI.getCategoryItems({
        //     productsPerPage: 999999
        // });

        const allPathnames: string[] = [];
        categories.forEach((el) => {
            allPathnames.push(el.url);
        });
        series.forEach((categorySeries) => {
            categorySeries.forEach((seria) => {
                allPathnames.push(seria.url);
            });
        });
        products.list.forEach((el) => {
            if (el.external_link)
                allPathnames.push(
                    el.external_link?.replace("https://telescope1.ru", "")
                );
        });
        if (!allPathnames.includes(req.nextUrl.pathname))
            return NextResponse.error();
    }
}

export const config = {
    // Skip all paths that should not be internationalized. This example skips the
    // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
    unstable_allowDynamic: ["/lib/**"]
};
