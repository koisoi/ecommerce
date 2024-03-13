import CategoryTemplate from "./page.template";
import {
    CategoryInfo,
    ProductPageTabType,
    SeriesInfo,
    catalogPageBreadcrumb,
    categoryAPI,
    productAPI,

    PageData
} from "@/lib";
import { notFound } from "next/navigation";
import ProductPage from "./(product)/page";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import { makePagePath } from "@/lib/functions/makePagePath";
import { Breadcrumb } from "@/lib/types/breadcrumbs";
import { Metadata } from "next";
import { landingConfig } from "@/lib/data/config";
import CatalogPage from "./catalog.template";
import { pagesAPI, getProductImageLink } from "@/lib";

export async function generateMetadata({
    params
}: {
    params: { slug: string[] };
}): Promise<Metadata> {
    if (!params.slug)
        return {
            title: "Каталог"
        };

    if (params.slug[0]) {
        if (params.slug[1] && params.slug[1].includes(".html")) {
            const productMetadata = await productAPI.getProductMainInfo({
                alias: params.slug[1],
                category: params.slug[0]
            });

            return {
                title: productMetadata.page_title,
                description: productMetadata.page_description,
                keywords: productMetadata.page_keywords
            };
        } else {
            const categoryMetadata = await categoryAPI.getCategory({
                category: params.slug[0],
                series: params.slug[1]
            });

            if (!!params.slug[1])
                return {
                    title:
                        categoryMetadata.page_title ||
                        categoryMetadata.category?.page_title,
                    description:
                        categoryMetadata.page_description ||
                        categoryMetadata.category?.page_description,
                    keywords:
                        categoryMetadata.page_keywords ||
                        categoryMetadata.category?.page_keywords
                };
            else
                return {
                    title: categoryMetadata.category?.page_title,
                    description: categoryMetadata.category?.page_description,
                    keywords: categoryMetadata.category?.page_keywords
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
const Category = async ({
    params,
    searchParams
}: {
    params: { slug: string[] };
    searchParams: { page?: number; tab?: ProductPageTabType };
}) => {
    if (!params.slug) {
        const responsePage = await pagesAPI.getPages({});
        const pages: PageData[] | null = responsePage.map((el) => ({
            ...el,
             image: getProductImageLink(el.images[0]?.url) || ""
        }));

        return <CatalogPage pages={pages} />;
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

    const responsePage = await pagesAPI.getPages({path});
    const page: PageData | null = responsePage.map((el) => ({
        ...el,
         image: getProductImageLink(el.images[0]?.url) || ""
    }))[0];

    let pages :PageData | null = null;
    if (params.slug[1]) {
        const response = await pagesAPI.getPages({path: params.slug[0] + '.*{1}'});
        pages = response.map((el) => ({
            ...el,
             image: getProductImageLink(el.images[0]?.url) || ""
        }));
    } else {
        const response = await pagesAPI.getPages({path: page.path + '.*{1}'});
        pages = response.map((el) => ({
            ...el,
             image: getProductImageLink(el.images[0]?.url) || ""
        }));
    }

    try {
        // const response = await categoryAPI.getPages({path:})
        // category = await categoryAPI.getCategory({
        //     category: params.slug[0],
        //     series: params.slug[1]
        // });
        /*
        if (category.category?.path)
            category.category.path = categoryPathToAlias(
                category.category.path
            )!;

        siblings = await categoryAPI.getSeriesSiblings({
            category: params.slug[0],
            series: params.slug[1]
        });
        */
    } catch (error) {
        console.error(error);
    }

    // TODO: проверить работу с несколькими клиентами
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

    if (!page) return notFound();

    return (
       <CategoryTemplate
           category={page}
           pages={pages}
           pageNumber={Number(searchParams.page) || 1}
           breadcrumbs={breadcrumbs}
           /*
           linkBeforeQuery={`/catalog/${params.slug[0]}${
               params.slug[1] ? "/" + params.slug[1] : ""
           }?`}
           */
       />
    );
};

export default Category;
