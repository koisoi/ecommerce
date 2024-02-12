"use client";

import CatalogSubcategory from "@/app/catalog/catalogCategory.template";
import { Box, BoxProps, Typography } from "@mui/material";
import ProductsCategoryGrid from "./(productsGrid)/productsCategoryGrid";
import { CategoryInfo } from "@/lib";

const CategoryTemplate = ({
    title,
    page_description,
    series,
    alias,
    seriesAlias,
    loading
}: CategoryInfo & { loading: boolean; seriesAlias: string | null }) => {
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
                <Typography fontSize="38px" fontWeight="bolder">
                    {title}
                </Typography>
            </Box>

            <Typography marginBottom="20px">{page_description}</Typography>

            <Box {...linksWrapper}>
                {series.map((series, i) => (
                    <CatalogSubcategory
                        amount={series.productsAmount}
                        seriesAlias={series.alias}
                        categoryAlias={alias}
                        key={i}
                    >
                        {series.title}
                    </CatalogSubcategory>
                ))}
            </Box>
            <ProductsCategoryGrid category={alias} series={seriesAlias} />
        </>
    );
};

export default CategoryTemplate;
