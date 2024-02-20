import {
    Box,
    BoxProps,
    CircularProgress,
    Typography,
    TypographyProps
} from "@mui/material";
import PageTitle from "../(shared)/text/pageTitle.template";
import { SearchResponse } from "@/lib/services/search.service";
import { ChangeEvent } from "react";
import Loading from "../(shared)/loading.template";
import ProductsGridTemplate, {
    ProductsGridTemplateProps
} from "../(shared)/productsGrid/productsGrid.template";

const SearchPageTemplate = ({
    loading,
    response,
    onPageChange,
    page,
    pagesCount
}: {
    loading: boolean;
    response?: SearchResponse;
    onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
    page: number;
    pagesCount: number;
}) => {
    const productsGridProps: ProductsGridTemplateProps = {
        list: response?.list || [],
        totalItemCount: response?.totalItemCount || 0,
        page,
        pagesCount,
        onPageChange,

        search: true
    };

    const notFoundProps: TypographyProps = {
        color: "text.disabled"
    };

    return (
        <Box>
            <PageTitle>Поиск</PageTitle>
            {loading && <Loading search />}
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
