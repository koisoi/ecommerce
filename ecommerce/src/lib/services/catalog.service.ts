import { store } from "@/app/storeProvider";
import {
    CategoryInfo,
    CategoryItemsRequest,
    CategoryItemsResponse,
    NetworkError,
    SeriesInfo
} from "..";
import { Service } from "./base.service";

class CategoryService extends Service {
    /**
     * Получение информации для отображения категории
     * @param category alias категории
     */
    public async getCategory({
        category,
        series
    }: {
        category: string | null;
        series?: string | null;
    }): Promise<CategoryInfo> {
        return fetch(
            `${this.baseURL}landing?path=${category}&landing=${
                series || store.getState().GlobalReducer.landing
            }&format=json`,
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
            .then((data) => data.landing);
    }

    public async getSeriesSiblings({
        category,
        series
    }: {
        category: string | null;
        series: string | null;
    }): Promise<SeriesInfo[]> {
        return fetch(
            `${this.baseURL}landing-siblings?path=${category}&landing=${
                series || store.getState().GlobalReducer.landing
            }&format=json`,
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
            .then((data) => data.siblings);
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
            `${this.baseURL}products?path=${category}&landing=${
                series || store.getState().GlobalReducer.landing
            }&page=${page}&limit=${productsPerPage}&format=json`,
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
            .then((data) => data.products);
    }
}

export const categoryAPI = new CategoryService("/catalog/backend/");
