import CategoryTemplate from "./categoryTemplate";
import {
    ProductPageTabType,
    catalogPageBreadcrumb,
    productAPI,
    PageData,
    makePagePath,
    landingConfig,
    Breadcrumb,
    MainProductInfo,
    formatPhoneNumber,
    categoryAliasToPath,
    categoryAPI,
    categoryPathToAlias
} from "@/lib";
import { notFound } from "next/navigation";
import ProductPage from "./_product/productPage";
import { Metadata } from "next";
import CatalogPageTemplate from "./catalogPageTemplate";
import { backendAPI, getLinkDomain } from "@/lib";

// export function generateStaticParams() {
//     return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }]
//   }
// export const dynamicParams = false;

// export async function generateStaticParams() {
//     const routes: { slug: string[] }[] = [];
//     const categories = await backendAPI.getPages({});
//     categories.forEach((category) => {
//         routes.push({ slug: [categoryPathToAlias(category.path) || ""] });
//     });
//     await Promise.all(
//         categories.map(async (category) =>
//             (
//                 await backendAPI.getPages({ path: category.path + ".*{1}" })
//             ).forEach((seria) => {
//                 routes.push({
//                     slug: [
//                         categoryPathToAlias(category.path) || "",
//                         seria.path.replace(`${category.path}.`, "")
//                     ]
//                 });
//             })
//         )
//     );
//     (
//         await categoryAPI.getCategoryItems({
//             productsPerPage: 999999
//         })
//     ).list.forEach((product) => {
//         routes.push({
//             slug: [
//                 categoryPathToAlias(product.category.path) || "",
//                 `${product.alias}.html`
//             ]
//         });
//     });

//     return routes;
// }

export async function generateMetadata({
    params,
    searchParams
}: {
    params: { slug: string[] };
    searchParams: { page?: number };
}): Promise<Metadata> {
    const getParentKeywords = async () => {
        const path = makePagePath(params.slug.slice(0, params.slug.length - 1));
        const parentCategoryResponse = await backendAPI.getPages({
            path
        });

        return parentCategoryResponse[0]?.page_keywords;
    };

    if (!params.slug)
        return {
            title: "Каталог",
            description: `Каталог тепловизионного оборудования ${
                landingConfig.landing_title
            }. Широкий ассортимент тепловизионных прицелов и монокуляров. Звоните ${formatPhoneNumber(
                landingConfig.phoneNumber
            )}`,
            robots: {
                index: false
            }
        };

    if (params.slug[0]) {
        if (params.slug[1] && params.slug[1].includes(".html")) {
            let productMetadata: MainProductInfo | null = null;
            try {
                productMetadata = await productAPI.getProductMainInfo({
                    alias: params.slug[1],
                    category: params.slug[0]
                });
            } catch (error) {
                console.error(error);
                return {
                    title: "404"
                };
            }

            return {
                title: productMetadata?.page_title?.replaceAll(
                    " в интернет магазине Telescope1.ru",
                    ""
                ),
                description: productMetadata?.page_description?.replaceAll(
                    " в интернет магазине Telescope1.ru",
                    ""
                ),
                keywords: [
                    productMetadata?.page_keywords,
                    await getParentKeywords()
                ]
                    .filter(Boolean)
                    .join(", ")
            };
        } else {
            const path = makePagePath(params.slug);
            let responsePage: PageData[] = [];
            try {
                responsePage = await backendAPI.getPages({ path });
            } catch (error) {
                console.error(error);
                return {
                    title: "404"
                };
            }
            let categoryMetadata = responsePage.map((el) => ({
                ...el,
                image: getLinkDomain(el.images[0]?.url || "") || ""
            }))[0];

            const addPage = (str: string | undefined) =>
                str
                    ? `${str}${
                          (searchParams?.page || 0) > 1
                              ? `, страница №${searchParams.page}`
                              : ""
                      }`
                    : undefined;

            return {
                title: addPage(categoryMetadata?.page_title),
                description: addPage(categoryMetadata?.page_description),
                keywords: [
                    categoryMetadata?.page_keywords,
                    await getParentKeywords()
                ]
                    .filter(Boolean)
                    .join(", ")
            };
        }
    }

    return {
        title: landingConfig.landing_title
    };
}

/**
 * slug пустой - меню категорий
 * slug [0] - категория
 * slug [1] - серия или товар
 */
const CategoryPage = async ({
    params,
    searchParams
}: {
    params: { slug: string[] };
    searchParams: { page?: number; tab?: ProductPageTabType };
}) => {
    // return notFound();

    if (!params.slug) {
        let pages: PageData[] = [];
        try {
            const responsePage = await backendAPI.getPages({});
            pages = responsePage.map((el) => ({
                ...el,
                image: getLinkDomain(el.images[0]?.url || "") || ""
            }));
        } catch (error) {
            console.error(error);
        }

        return <CatalogPageTemplate pages={pages} />;
    }

    if (params.slug[1] && params.slug[1].includes(".html")) {
        return (
            <ProductPage
                category={params.slug[0]}
                product={params.slug[1]}
                searchParams={searchParams}
            />
        );
    }

    const path = makePagePath(params.slug);
    let page: PageData | null = null;
    let pages: PageData[] | null = null;

    try {
        const responsePage = await backendAPI.getPages({ path });
        page = responsePage.map((el) => ({
            ...el,
            image: getLinkDomain(el.images[0]?.url || "") || ""
        }))[0];

        if (!params.slug[1] && page) {
            const response = await backendAPI.getPages({
                path: page.path + ".*{1}"
            });
            pages = response.map((el) => ({
                ...el,
                image: getLinkDomain(el.images[0]?.url || "") || ""
            }));
        }
    } catch (error) {
        console.error(error);
    }

    if (!page) return notFound();

    // // TODO: проверить работу с несколькими клиентами
    let breadcrumbs: Breadcrumb[] = [...catalogPageBreadcrumb];

    if (page.parent)
        breadcrumbs.push({
            link: page.parent.url,
            title: page.parent.title
        });

    breadcrumbs.push({
        link: page.url,
        title: page.title || ""
    });

    return (
        <CategoryTemplate
            category={page}
            pages={pages}
            pageNumber={Number(searchParams.page) || 1}
            breadcrumbs={breadcrumbs}
        />
    );
};

// const CategoryPageSuspense = ({
//     params,
//     searchParams
// }: {
//     params: { slug: string[] };
//     searchParams: { page?: number; tab?: ProductPageTabType };
// }) => {
//     return (
//         <Suspense>
//             <CategoryPage params={params} searchParams={searchParams} />
//         </Suspense>
//     );
// };

export default CategoryPage;
