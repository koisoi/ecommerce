import { Box, BoxProps } from "@mui/material";
import CategoryProductsGrid from "./categoryProductsGrid";
import { Breadcrumb, PageData, innerHtmlStyles, landingConfig } from "@/lib";
import PageTitle from "../../_shared/text/pageTitle";
import CatalogSeriesTemplate from "../../_shared/catalogSeriesTemplate";
import BreadcrumbsTemplate from "@/app/_shared/breadcrumbsTemplate";
import Paragraph from "@/app/_shared/text/paragraph";
import SectionContainer from "@/app/_shared/sectionContainer";
import { CategorySeriesBoxTemplate } from "@/app/_shared/categorySeriesBoxTemplate";

const CategoryTemplate = ({
    category,
    pages,
    pageNumber,
    breadcrumbs
}: {
    category: PageData;
    pages?: PageData[] | null;
    pageNumber: number;
    breadcrumbs: Breadcrumb[];
}) => {
    return (
        <>
            <BreadcrumbsTemplate linksArray={breadcrumbs} />
            <PageTitle>
                {category.title}
                {pageNumber > 1 && `, страница №${pageNumber}`}
            </PageTitle>

            <SectionContainer level={2}>
                <>
                    {/* {!!pages?.length && (
                        <Box {...linksWrapper}>
                            {pages.map((page) => (
                                <CatalogSeriesTemplate
                                    page={page}
                                    selected={category.path === page.path}
                                    key={page.id}
                                />
                            ))}
                        </Box>
                    )} */}
                    <CategorySeriesBoxTemplate
                        series={pages}
                        category={category}
                    />
                    <CategoryProductsGrid
                        page={category}
                        pageNumber={pageNumber}
                    />
                </>

                {category.text && (
                    <Box
                        dangerouslySetInnerHTML={{ __html: category.text }}
                        sx={innerHtmlStyles}
                    />
                )}
            </SectionContainer>
        </>
    );
};

export default CategoryTemplate;
