import { Box, Typography, TypographyProps } from "@mui/material";
import PageTitle from "../(shared)/text/pageTitle.template";
import Loading from "../(shared)/loading.template";
import ProductsGridTemplate, {
    ProductsGridTemplateProps
} from "../(shared)/productsGrid/productsGrid.template";
import AppBreadcrumbs from "../(shared)/breadcrumbs/breadcrumbs.template";
import { SearchResponse, searchBreadcrumbs } from "@/lib";

const SearchPageTemplate = ({
    loading,
    response,
    // onPageChange,
    page,
    pagesCount,
    linkBeforeQuery
}: {
    loading: boolean;
    response?: SearchResponse;
    // onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
    page: number;
    pagesCount: number;
    linkBeforeQuery: string;
}) => {
    const productsGridProps: ProductsGridTemplateProps = {
        list: response?.list || [],
        totalItemCount: response?.totalItemCount || 0,
        page,
        pagesCount,
        // onPageChange,
        url: linkBeforeQuery,

        search: true
    };

    const notFoundProps: TypographyProps = {
        color: "text.disabled"
    };

    return (
        <Box>
            <AppBreadcrumbs linksArray={searchBreadcrumbs} />
            <PageTitle>Поиск</PageTitle>
            {loading && <Loading>Поиск...</Loading>}
            {!loading && response?.list.length !== 0 && (
                <ProductsGridTemplate {...productsGridProps} />
            )}
            {!loading && response?.list.length === 0 && (
                <Typography {...notFoundProps}>
                    По данному запросу ничего не найдено.
                </Typography>
            )}
        </Box>
    );
};

export default SearchPageTemplate;
