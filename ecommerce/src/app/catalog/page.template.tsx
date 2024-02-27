import CatalogSubcategory from "@/app/catalog/catalogCategory.template";
import { Box, BoxProps, Typography } from "@mui/material";
import ProductsCategoryGrid from "./productsCategoryGrid";
import { CategoryInfo } from "@/lib";
import PageTitle from "../(shared)/text/pageTitle.template";
import Loading from "../(shared)/loading.template";

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

    if (loading) return <Loading>Загрузка категории...</Loading>;

    return (
        <>
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
        </>
    );
};

export default CategoryTemplate;
