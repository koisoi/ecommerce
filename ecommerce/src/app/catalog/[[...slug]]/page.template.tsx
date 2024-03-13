import { Box, BoxProps } from "@mui/material";
import ProductsCategoryGrid from "./productsCategoryGrid";
import { PageData } from "@/lib";
import PageTitle from "../../(shared)/text/pageTitle.template";
import CatalogSubcategory from "./catalogSubcategory.template";
import AppBreadcrumbs from "@/app/(shared)/breadcrumbs/breadcrumbs.template";
import { Breadcrumb } from "@/lib/types/breadcrumbs";
import Paragraph from "@/app/(shared)/text/paragraph.template";

const CategoryTemplate = (params: {
    category: PageData;
    pages?: PageData[] | null;
    pageNumber: number;
    breadcrumbs: Breadcrumb[];
}) => {
    const linksWrapper: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginY: "1rem"
    };

    const category = params.category;
    const pages = params.pages;

    return (
        <>
            <AppBreadcrumbs linksArray={params.breadcrumbs} />
            <PageTitle>{category.title}</PageTitle>

            <Paragraph>{category.text}</Paragraph>

            {!!pages?.length && (
                <Box {...linksWrapper}>
                    {pages.map((page) => (
                        <CatalogSubcategory
                            page={page}
                            selected={category.path === page.path}
                            key={page.id}
                        ></CatalogSubcategory>
                    ))}
                </Box>
            )}
            <ProductsCategoryGrid
                page={category}
                pageNumber={params.pageNumber}
            />
        </>
    );
};

/*
const CategoryTemplate = ({
    title,
    text,
    series,
    path,
    seriesAlias,
    page,
    breadcrumbs,
    linkBeforeQuery
}: PageData & {
    seriesAlias: string | null;
    page: number;
    breadcrumbs: Breadcrumb[];
    linkBeforeQuery: string;
}) => {
    const linksWrapper: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginY: "1rem"
    };

    return (
        <>
            <AppBreadcrumbs linksArray={breadcrumbs} />
            <PageTitle>{title}</PageTitle>

            <Paragraph>{text}</Paragraph>

            {!!series.length && (
                <Box {...linksWrapper}>
                    {series.map((series) => (
                        <CatalogSubcategory
                            seriesAlias={series.alias}
                            categoryAlias={path}
                            selected={seriesAlias === series.alias}
                            key={series.id}
                        >
                            {series.title}
                        </CatalogSubcategory>
                    ))}
                </Box>
            )}
            <ProductsCategoryGrid
                category={path}
                series={seriesAlias}
                page={page}
                linkBeforeQuery={linkBeforeQuery}
            />
        </>
    );
};
*/

export default CategoryTemplate;
