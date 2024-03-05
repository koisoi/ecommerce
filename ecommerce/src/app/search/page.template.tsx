import { Box, Typography, TypographyProps } from "@mui/material";
import PageTitle from "../(shared)/text/pageTitle.template";
import { SearchResponse } from "@/lib/services/search.service";
import { ChangeEvent } from "react";
import Loading from "../(shared)/loading.template";
import ProductsGridTemplate, {
    ProductsGridTemplateProps
} from "../(shared)/productsGrid/productsGrid.template";
import AppBreadcrumbs from "../(shared)/breadcrumbs/breadcrumbs.template";
import { Breadcrumb } from "@/lib/types/breadcrumbs";
import { homePageBreadcrumbs } from "../page";

export const searchBreadcrumbs: Breadcrumb[] = [
    ...homePageBreadcrumbs,
    { link: "/search", title: "Поиск" }
];

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
        linkBeforeQuery,

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
