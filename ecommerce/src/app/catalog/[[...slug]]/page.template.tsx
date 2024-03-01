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
    seriesAlias
}: CategoryInfo & {
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
        <>
            <Box {...headerWrapper} id="mememehehe">
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
        </>
    );
};

export default CategoryTemplate;
