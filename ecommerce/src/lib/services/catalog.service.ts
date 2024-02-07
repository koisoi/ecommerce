import {
    CategoryInfo,
    CategoryItem,
    CategoryItemsRequest,
    CategoryItemsResponse
} from "@/lib/types";
import { Service } from "./base.service";

class CategoryService extends Service {
    /**
     * Получение информации для отображения категории
     * @param category alias категории
     */
    public async getCategory(category: string): Promise<CategoryInfo> {
        return fetch(
            `${this.baseURL}landing?path=TOP.${category}&landing=iray&format=json`,
            this.headers
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => data.landing);
    }

    /**
     * Получение карточек товара
     * @param category alias категории
     * @param series необязательный, alias серии
     * @param productsPerPage карточек на страницу
     * @param page страница
     */
    public async getCategoryItems({
        category,
        series,
        productsPerPage,
        page
    }: CategoryItemsRequest): Promise<CategoryItemsResponse> {
        return fetch(
            `${this.baseURL}products?path=TOP.${category}&landing=iray&page=${page}&limit=${productsPerPage}&format=json`,
            this.headers
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => data.products);
    }
}

export const categoryAPI = new CategoryService("/catalog/backend/");
