"use client";

import { catalogService } from "@/services/catalog/catalogService";
import { CatalogItem } from "@/types";
import React from "react";
import CategoryTemplate from "./page.template";

const Category = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [catalogItems, setCatalogItems] = React.useState<CatalogItem[]>([]);

    // TODO: перенести стейты в redux, сделать отмену запроса при демаунте
    React.useEffect(() => {
        catalogService
            .getCatalogItems()
            .then((val) => {
                console.log(catalogItems, val.list);
                setLoading(false);
                setCatalogItems(val.list);
            })
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <CategoryTemplate
            loading={loading}
            catalogItems={catalogItems}
            categoryTitle="Электроника"
            subcategories={[
                "Компьютеры и планшеты",
                "Ноутбуки",
                "Смартфоны",
                "Наушники",
                "Комплектующие",
                "Аксессуары",
                "Телевизоры",
                "Колонки"
            ]}
        />
    );
};

export default Category;
