import { CategoryItemsResponse, PageData, categoryAPI } from "@/lib";
import ProductsGridTemplate from "../../_shared/productsGrid/productsGridTemplate";

const CategoryProductsGrid = async ({
    page,
    pageNumber
}: {
    page: PageData;
    pageNumber: number;
}) => {
    const productsPerPage = 20;
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

export default CategoryProductsGrid;
