import { Box, BoxProps, Typography } from "@mui/material";
import ProductsCategoryGrid from "./productsCategoryGrid";
import { CategoryInfo } from "@/lib";
import PageTitle from "../../(shared)/text/pageTitle.template";
import CatalogSubcategory from "./catalogSubcategory.template";

const CategoryTemplate = ({
    title,
    page_description,
    series,
    alias,
    seriesAlias,
    page
}: CategoryInfo & {
    seriesAlias: string | null;
    page: number;
}) => {
    const headerWrapper: BoxProps = {
        marginBottom: "20px"
    };

    const linksWrapper: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
        marginBottom: "25px"
    };

    return (
        <>
            <Box {...headerWrapper}>
                <PageTitle>{title}</PageTitle>
            </Box>

            <Typography marginBottom="20px">{page_description}</Typography>

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
            />
        </>
    );
};

export default CategoryTemplate;
