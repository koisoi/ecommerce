import { CategoryItemsResponse, PageData, categoryAPI } from "@/lib";
import ProductsGridTemplate from "../../(shared)/productsGrid/productsGrid.template";

const ProductsCategoryGrid = async ({
    page,
    pageNumber
}: {
    page: PageData;
    pageNumber: number;
}) => {
    // const dispatch = useAppDispatch();
    const productsPerPage = 15;
    let response: CategoryItemsResponse | null = null;

    try {
        response = await categoryAPI.getCategoryItems({
            page,
            productsPerPage,
            pageNumber
        });
    } catch (error) {
        console.error(error);
    }

    // FIXME: проверить как работает с несколькими клиентами, если что можно прямо из запроса в сервисе делать store.dispatch() и потом в самом компоненте пагинации получать из стора
    const pagesCount = Math.ceil(
        (response?.totalItemCount || 0) / productsPerPage
    );

    // const [page, setPage] = useState<number>(1);
    // const [pagesCount, setPagesCount] = useState<number>(0);

    // const {
    //     loading,
    //     totalItemCount: totalAmount,
    //     list: products
    // } = useAppSelector(ProductsCategoryGridState);

    // useEffect(() => {
    //     dispatch(setCanFetchCategoryItems(true));
    //     const promise = dispatch(
    //         fetchCategoryItems({
    //             category,
    //             series,
    //             productsPerPage,
    //             page
    //         })
    //     );
    //     promise.catch((error) => console.error(error.message));

    //     return () => {
    //         promise.abort();
    //         dispatch(setCanFetchCategoryItems(false));
    //     };
    // }, [page, category, series]); <=== это должно работать с серверными компнентами без массива заивисмостей т.к. у нас изменение каждой из этих переменных === изменение ссылки === ререндер

    // useEffect(() => {
    //     setPagesCount(Math.ceil(totalAmount / productsPerPage));
    // }, [totalAmount]);

    return (
        <ProductsGridTemplate
            list={response?.list || []}
            totalItemCount={response?.totalItemCount || 0}
            page={pageNumber}
            pagesCount={pagesCount}
            url={page.url}
        />
    );
};

export default ProductsCategoryGrid;
