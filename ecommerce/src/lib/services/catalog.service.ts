import { CategoryItemsRequest, CategoryItemsResponse, NetworkError } from "..";
import { Service } from "./base.service";

class CategoryService extends Service {
    /**
     * Получение карточек товара
     * @param category alias категории
     * @param series необязательный, alias серии
     * @param productsPerPage карточек на страницу
     * @param page страница
     */
    public async getCategoryItems({
        page,
        productsPerPage,
        pageNumber
    }: CategoryItemsRequest): Promise<CategoryItemsResponse> {
        return fetch(
            `${this.baseURL}products/site_id/1?parent_id=${page.parent_id}&parent_class=${page.parent_class}&page=${pageNumber}&limit=${productsPerPage}&format=json`,
            this.options
        )
            .then((response) => {
                if (!response.ok) {
                    throw new NetworkError(
                        response.statusText,
                        response.status
                    );
                }
                return response.json();
            })
            .then((data) => {
                return data.products;
            });
    }
}

export const categoryAPI = new CategoryService("/catalog/backend/");
