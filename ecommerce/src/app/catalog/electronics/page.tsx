"use client";

import CatalogCategory from "@/app/(shared)/catalogCategory";
import CatalogNavigation from "@/app/(shared)/catalogNavigation";
import { Box, BoxProps, Typography } from "@mui/material";
import ProductCard from "../(card)/productCard";

const Electronics = () => {
    const wrapperProps: BoxProps = {
        maxWidth: "1320px",
        width: "100%",
        paddingX: "40px",

        fontSize: "15px",
    };

    const headerWrapper: BoxProps = {
        marginBottom: "20px",
    };

    const linksWrapper: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        gap: "25px",
    };

    return (
        <Box {...wrapperProps}>
            <Box {...headerWrapper}>
                <CatalogNavigation />
                <Typography fontSize="38px" fontWeight="bolder">
                    Электроника
                </Typography>
                <Typography color="text.disabled">
                    Товаров в категории: 4
                </Typography>
            </Box>

            <Typography marginBottom="20px">
                В каталоге представлены все новинки электроники на 2021 год
            </Typography>

            <Box {...linksWrapper}>
                <CatalogCategory amount={0}>
                    Компьютеры и планшеты
                </CatalogCategory>
                <CatalogCategory amount={0}>Ноутбуки</CatalogCategory>
                <CatalogCategory amount={0}>Смартфоны</CatalogCategory>
                <CatalogCategory amount={1}>Наушники</CatalogCategory>
                <CatalogCategory amount={0}>Комплектующие</CatalogCategory>
                <CatalogCategory amount={2}>Аксессуары</CatalogCategory>
                <CatalogCategory amount={0}>Телевизоры</CatalogCategory>
                <CatalogCategory amount={0}>Колонки</CatalogCategory>
            </Box>

            <ProductCard
                imageLink="/imageExample.png"
                title="Все возможности карточки товара"
                productLink="#"
            />
        </Box>
    );
};

export default Electronics;
