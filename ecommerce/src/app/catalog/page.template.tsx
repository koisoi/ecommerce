"use client";

import CatalogSubategory from "@/app/catalog/catalogCategory.template";
import Breadcrumbs from "@/app/(shared)/breadcrumbs.template";
import { Box, BoxProps, Typography } from "@mui/material";
import { CategoryInfo, CategoryItem } from "@/lib/types";
import ProductsCategoryGrid from "./(productsGrid)/productsCategoryGrid";

const CategoryTemplate = ({
    title,
    page_description,
    series,
    category,
    loading
}: CategoryInfo & { loading: boolean; category: string }) => {
    const wrapperProps: BoxProps = {
        maxWidth: "1400px",
        width: "100%",
        paddingX: "40px",

        fontSize: "15px"
    };

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
        <Box {...wrapperProps}>
            <Box {...headerWrapper}>
                <Breadcrumbs />
                <Typography fontSize="38px" fontWeight="bolder">
                    {title}
                </Typography>
            </Box>

            <Typography marginBottom="20px">{page_description}</Typography>

            <Box {...linksWrapper}>
                {series.map((series, i) => (
                    <CatalogSubategory amount={series.productsAmount} key={i}>
                        {series.title}
                    </CatalogSubategory>
                ))}
            </Box>
            <ProductsCategoryGrid category={category} />
        </Box>
    );
};

export default CategoryTemplate;
