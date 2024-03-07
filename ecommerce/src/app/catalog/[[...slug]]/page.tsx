import CategoryTemplate from "./page.template";
import CategoriesMenuTemplate from "./categoriesMenu.template";
import {
    CategoryInfo,
    ProductPageTabType,
    SeriesInfo,
    catalogPageBreadcrumb,
    categoryAPI,
    homePageBreadcrumbs,
    productAPI
} from "@/lib";
import { notFound } from "next/navigation";
import ProductPage from "./(product)/page";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import { Breadcrumb } from "@/lib/types/breadcrumbs";
import AppBreadcrumbs from "@/app/(shared)/breadcrumbs/breadcrumbs.template";
import { Metadata } from "next";
import { landingConfig } from "@/lib/data/config";

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

            console.log(categoryMetadata);

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
    if (!params.slug)
        return (
            <>
                <AppBreadcrumbs linksArray={catalogPageBreadcrumb} />
                <CategoriesMenuTemplate />
            </>
        );

    let category: CategoryInfo | null = null;
    let siblings: SeriesInfo[] = [];

    try {
        category = await categoryAPI.getCategory({
            category: params.slug[0],
            series: params.slug[1]
        });
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

    if (params.slug[1] && !siblings.find((el) => el.alias === params.slug[1])) {
        return (
            <ProductPage
                category={params.slug[0]}
                product={params.slug[1]}
                searchParams={searchParams}
                breadcrumbs={breadcrumbs}
            />
        );
    }

    if (!category) return notFound();
    // const searchParams = useSearchParams();
    // const dispatch = useAppDispatch();
    // const category: string | null = searchParams.get("category");
    // const series: string | null = searchParams.get("series");

    // const {
    //     loading,
    //     title,
    //     page_description,
    //     series: seriesArray,
    //     category: currentCategory,
    //     parent_class
    // } = useAppSelector(CategoryPageState);

    // useEffect(() => {
    //     dispatch(setCanFetchCategory(true));
    //     dispatch(setCanFetchSeriesSiblings(true));

    //     return () => {
    //         dispatch(setCanFetchCategory(false));
    //         dispatch(setCanFetchSeriesSiblings(false));
    //         dispatch(resetBreadcrumbsState());
    //     };
    // }, []);

    // useEffect(() => {
    //     if (!category) return;

    //     const promise = dispatch(fetchCategory({ category, series }));
    //     promise
    //         .unwrap()
    //         .then((val) => {
    //             if (!val || !val.category) return;

    //             dispatch(setCurrentCategoryTitle(val.category.title));
    //             dispatch(setCurrentSeriesTitle(series ? val.title : null));
    //         })
    //         .catch((error) => console.error(error.message));

    //     return () => {
    //         promise.abort();
    //     };
    // }, [category, series]);

    // useEffect(() => {
    //     if (!category) return;

    //     const seriesSiblingsPromise = dispatch(
    //         fetchSeriesSiblings({ category, series })
    //     );
    //     seriesSiblingsPromise
    //         .unwrap()
    //         .catch((error) => console.error(error.message));

    //     return () => {
    //         seriesSiblingsPromise.abort();
    //     };
    // }, [parent_class]);

    // return categoriesMenu

    return (
        <CategoryTemplate
            alias={category?.category?.path || ""}
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
        />
    );
};

export default Category;
