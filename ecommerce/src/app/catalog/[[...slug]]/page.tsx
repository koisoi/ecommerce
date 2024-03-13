import CategoryTemplate from "./page.template";
import {
    CategoryInfo,
    ProductPageTabType,
    SeriesInfo,
    catalogPageBreadcrumb,
    categoryAPI,
    productAPI
} from "@/lib";
import { notFound } from "next/navigation";
import ProductPage from "./(product)/page";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import { Breadcrumb } from "@/lib/types/breadcrumbs";
import { Metadata } from "next";
import { landingConfig } from "@/lib/data/config";
import CatalogPage from "./catalog.template";

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
    if (!params.slug) return <CatalogPage />;

    if (params.slug[1] && params.slug[1].includes(".html")) {
        return (
            <ProductPage
                category={params.slug[0]}
                product={params.slug[1]}
                searchParams={searchParams}
            />
        );
    }

    const category: CategoryInfo | null =
        landingConfig.categories[params.slug[0]];
    console.log(landingConfig.categories);
    let siblings: SeriesInfo[] = [];

    try {
        // const response = await categoryAPI.getPages({path:})
        // category = await categoryAPI.getCategory({
        //     category: params.slug[0],
        //     series: params.slug[1]
        // });
        if (category.category?.path)
            category.category.path = categoryPathToAlias(
                category.category.path
            )!;

        siblings = await categoryAPI.getSeriesSiblings({
            category: params.slug[0],
            series: params.slug[1]
        });
    } catch (error) {
        console.error(error);
    }

    const breadcrumbs: Breadcrumb[] = [
        ...catalogPageBreadcrumb,
        {
            link: `/catalog/${params.slug[0]}`,
            title: category?.category?.title || ""
        }
    ];

    // TODO: проверить работу с несколькими клиентами
    if (params.slug[1])
        breadcrumbs.push({
            link: `/catalog/${params.slug[0]}/${params.slug[1]}`,
            title: category?.title || ""
        });

    if (!category) return notFound();

    return (
        <CategoryTemplate
            id={category.id}
            path={category?.category?.path || ""}
            title={
                category?.series
                    ? category?.category?.title || ""
                    : category?.title
            }
            page_description={category?.page_description}
            series={category?.series || []}
            seriesAlias={params.slug[1]}
            parent_class={""}
            page={Number(searchParams.page) || 1}
            breadcrumbs={breadcrumbs}
            linkBeforeQuery={`/catalog/${params.slug[0]}${
                params.slug[1] ? "/" + params.slug[1] : ""
            }?`}
            image={category?.image}
        />
    );
};

export default Category;
