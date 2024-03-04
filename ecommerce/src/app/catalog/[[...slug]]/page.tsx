import CategoryTemplate from "./page.template";
import CategoriesMenuTemplate from "./categoriesMenu.template";
import { CategoryInfo, SeriesInfo, categoryAPI } from "@/lib";
import { notFound } from "next/navigation";

/**
 * slug пустой - меню категорий
 * slug [0] - категория
 * slug [1] - серия
 */
const Category = async ({
    params,
    searchParams
}: {
    params: { slug: string[] };
    searchParams: { page?: number };
}) => {
    if (!params.slug) return <CategoriesMenuTemplate />;

    let category: CategoryInfo | null = null;
    let siblings: SeriesInfo[] = [];

    try {
        category = await categoryAPI.getCategory({
            category: params.slug[0],
            series: params.slug[1]
        });
        siblings = await categoryAPI.getSeriesSiblings({
            category: params.slug[0],
            series: params.slug[1]
        });
    } catch (error) {
        console.error(error);
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
                    ? category?.title
                    : category?.category?.title || ""
            }
            page_description={category?.page_description}
            series={category?.series || []}
            seriesAlias={params.slug[1]}
            parent_class={""}
            page={Number(searchParams.page) || 1}
        />
    );
};

export default Category;