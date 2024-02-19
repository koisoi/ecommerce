"use client";

import CatalogSubcategory from "@/app/catalog/catalogCategory.template";
import { Box, BoxProps, Typography } from "@mui/material";
import ProductsCategoryGrid from "./(productsGrid)/productsCategoryGrid";
import { CategoryInfo } from "@/lib";
import PageTitle from "../(shared)/pageTitle.template";
import Container from "../(shared)/container.template";
import FastOrderForm from "../(fastOrderForm)/fastOrderForm";

const CategoryTemplate = ({
    title,
    page_description,
    series,
    alias,
    seriesAlias,
    loading
}: CategoryInfo & {
    loading: boolean;
    seriesAlias: string | null;
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
        <Container>
            <Box {...headerWrapper}>
                <PageTitle>{title}</PageTitle>
            </Box>

            <Typography marginBottom="20px">{page_description}</Typography>

            <Box {...linksWrapper}>
                {series.map((series) => (
                    <CatalogSubcategory
                        amount={series.productsAmount}
                        seriesAlias={series.alias}
                        categoryAlias={alias}
                        selected={seriesAlias === series.alias}
                        key={series.id}
                    >
                        {series.title}
                    </CatalogSubcategory>
                ))}
            </Box>
            <ProductsCategoryGrid category={alias} series={seriesAlias} />
        </Container>
    );
};

export default CategoryTemplate;
