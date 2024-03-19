import { Box, Typography, TypographyProps } from "@mui/material";
import PageTitle from "../(shared)/text/pageTitle";
import Loading from "../(shared)/loading";
import ProductsGridTemplate, {
    ProductsGridTemplateProps
} from "../(shared)/productsGrid/productsGridTemplate";
import BreadcrumbsTemplate from "../(shared)/breadcrumbsTemplate";
import { SearchResponse, searchBreadcrumbs } from "@/lib";

export const SearchPageTemplate = ({
    loading,
    response,
    page,
    pagesCount,
    linkBeforeQuery
}: {
    loading: boolean;
    response?: SearchResponse;
    page: number;
    pagesCount: number;
    linkBeforeQuery: string;
}) => {
    const productsGridProps: ProductsGridTemplateProps = {
        list: response?.list || [],
        totalItemCount: response?.totalItemCount || 0,
        page,
        pagesCount,
        url: linkBeforeQuery,

        search: true
    };

    const notFoundProps: TypographyProps = {
        color: "text.disabled"
    };

    return (
        <Box>
            <BreadcrumbsTemplate linksArray={searchBreadcrumbs} />
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
