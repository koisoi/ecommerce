"use client";

import CatalogSubategory from "@/app/(shared)/catalogCategory.template";
import CatalogNavigation from "@/app/(shared)/catalogNavigation.template";
import { Box, BoxProps, Typography } from "@mui/material";
import ProductCard from "./(shared)/card/productCard.template";
import { CatalogItem } from "@/types";
import { getImageLink } from "./(shared)/card/functions/getImageLink";

const CategoryTemplate = ({
    categoryTitle,
    subcategories,
    catalogItems,
    loading
}: {
    categoryTitle: string;
    // TODO: поменять на тип категорий с сервера + кол-во товаров в категории + id
    subcategories: string[];
    catalogItems: CatalogItem[];
    loading: boolean;
}) => {
    const wrapperProps: BoxProps = {
        maxWidth: "1320px",
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

    const cardsWrapperProps: BoxProps = {
        width: "100%",

        display: "grid",
        gap: "20px",
        gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            mlg: "1fr 1fr 1fr 1fr"
        } // TODO: Если сделаем меню с фильтрами, оставить 3 колонны макс.
    };

    return (
        <Box {...wrapperProps}>
            <Box {...headerWrapper}>
                <CatalogNavigation />
                <Typography fontSize="38px" fontWeight="bolder">
                    {categoryTitle}
                </Typography>
                <Typography color="text.disabled">
                    Товаров в категории: {catalogItems.length}
                </Typography>
            </Box>

            <Typography marginBottom="20px">
                В каталоге представлены все новинки электроники на 2021 год
            </Typography>

            <Box {...linksWrapper}>
                {/* <CatalogSubategory amount={0}>
                    Компьютеры и планшеты
                </CatalogSubategory>
                <CatalogSubategory amount={0}>Ноутбуки</CatalogSubategory>
                <CatalogSubategory amount={0}>Смартфоны</CatalogSubategory>
                <CatalogSubategory amount={1}>Наушники</CatalogSubategory>
                <CatalogSubategory amount={0}>Комплектующие</CatalogSubategory>
                <CatalogSubategory amount={2}>Аксессуары</CatalogSubategory>
                <CatalogSubategory amount={0}>Телевизоры</CatalogSubategory>
                <CatalogSubategory amount={0}>Колонки</CatalogSubategory> */}
                {subcategories.map((subc, i) => (
                    <CatalogSubategory amount={0} key={i}>
                        {subc}
                    </CatalogSubategory>
                ))}
            </Box>

            <Box {...cardsWrapperProps}>
                {loading && "Загрузка товаров..."}
                {!loading &&
                    catalogItems.length &&
                    catalogItems.map((item) => (
                        <ProductCard
                            key={item.id}
                            imageLink={getImageLink(item.images[0].url)}
                            title={item.title}
                            price={item.price}
                            productLink="#"
                            newProduct
                            sale
                        />
                    ))}
            </Box>
        </Box>
    );
};

export default CategoryTemplate;
