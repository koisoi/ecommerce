import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import ProductsCategoryGrid from "./productsCategoryGrid";
import { CategoryInfo } from "@/lib";
import PageTitle from "../../(shared)/text/pageTitle.template";
import CatalogSubcategory from "./catalogSubcategory.template";
import AppBreadcrumbs from "@/app/(shared)/breadcrumbs/breadcrumbs.template";
import { Breadcrumb } from "@/lib/types/breadcrumbs";
import Paragraph from "@/app/(shared)/text/paragraph.template";

const CategoryTemplate = ({
    title,
    page_description,
    series,
    alias,
    seriesAlias,
    page,
    breadcrumbs,
    linkBeforeQuery
}: CategoryInfo & {
    seriesAlias: string | null;
    page: number;
    breadcrumbs: Breadcrumb[];
    linkBeforeQuery: string;
}) => {
    const linksWrapper: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        // rowGap: "0.5rem",
        // columnGap: "1rem",
        // marginBottom: "25px"
        marginY: "1rem"
    };

    const descriptionProps: TypographyProps = {};

    return (
        <>
            <AppBreadcrumbs linksArray={breadcrumbs} />
            <Box>
                <PageTitle>{title}</PageTitle>
            </Box>

            <Paragraph>{page_description}</Paragraph>
            {/* <Typography>{page_description}</Typography> */}

            <Box {...linksWrapper}>
                {series.map((series) => (
                    <CatalogSubcategory
                        seriesAlias={series.alias}
                        categoryAlias={alias}
                        selected={seriesAlias === series.alias}
                        key={series.id}
                    >
                        {series.title}
                    </CatalogSubcategory>
                ))}
            </Box>
            <ProductsCategoryGrid
                category={alias}
                series={seriesAlias}
                page={page}
                linkBeforeQuery={linkBeforeQuery}
            />
        </>
    );
};

export default CategoryTemplate;
