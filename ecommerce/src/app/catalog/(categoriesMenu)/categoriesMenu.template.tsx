"use client";

import AppCard, { AppCardProps } from "@/app/(shared)/appCard.template";
import CategoryCard from "@/app/(shared)/categoryCard.template";
import Loading from "@/app/(shared)/loading.template";
import ProductLink, {
    ProductLinkProps
} from "@/app/(shared)/text/productLink.template";
import { CategoryListItem, NextLinkProps } from "@/lib";
import { Box, BoxProps } from "@mui/material";
import Link from "next/link";

const CategoriesMenuTemplate = ({
    categories,
    loading
}: {
    categories: CategoryListItem[];
    loading: boolean;
}) => {
    const wrapperProps: BoxProps = {
        paddingY: "50px",

        display: "grid",
        gridTemplateColumns: {
            xl: "1fr 1fr 1fr 1fr",
            lg: "1fr 1fr 1fr",
            sm: "1fr 1fr",
            xs: "1fr"
        },
        gap: "30px"
    };

    if (loading) return <Loading>Загрузка...</Loading>;

    return (
        <Box {...wrapperProps}>
            {categories.map((category) => (
                <CategoryCard category={category} key={category.path} />
            ))}
        </Box>
    );
};

export default CategoriesMenuTemplate;
