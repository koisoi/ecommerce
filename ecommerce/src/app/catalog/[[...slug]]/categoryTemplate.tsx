import { Box, BoxProps } from "@mui/material";
import CategoryProductsGrid from "./categoryProductsGrid";
import { Breadcrumb, PageData } from "@/lib";
import PageTitle from "../../(shared)/text/pageTitle";
import CatalogSeriesTemplate from "./catalogSeriesTemplate";
import BreadcrumbsTemplate from "@/app/(shared)/breadcrumbsTemplate";
import Paragraph from "@/app/(shared)/text/paragraph";

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
    const linksWrapper: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginY: "1rem"
    };

    return (
        <>
            <BreadcrumbsTemplate linksArray={breadcrumbs} />
            <PageTitle>{category.title}</PageTitle>

            <Paragraph>{category.text}</Paragraph>

            {!!pages?.length && (
                <Box {...linksWrapper}>
                    {pages.map((page) => (
                        <CatalogSeriesTemplate
                            page={page}
                            selected={category.path === page.path}
                            key={page.id}
                        ></CatalogSeriesTemplate>
                    ))}
                </Box>
            )}
            <CategoryProductsGrid page={category} pageNumber={pageNumber} />
        </>
    );
};

export default CategoryTemplate;
