import { CategoryItemsResponse, NetworkError, landingConfig } from "..";
import { Service } from "./base.service";

export type SearchResponse = CategoryItemsResponse;

export type SearchQuery = {
    query: string;
    productsPerPage: number;
    page: number;
};

class SearchService extends Service {
    /**
     * Поиск товаров
     * @param query поисковой запрос
     * @param productsPerPage карточек на страницу
     * @param page страница
     */
    public async search({
        query,
        productsPerPage,
        page
    }: SearchQuery): Promise<SearchResponse> {
        return fetch(
            `${this.baseURL}/site_id/${landingConfig.id}?brand=${landingConfig.landing}&term=${query}&page=${page}&limit=${productsPerPage}&format=json`,
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

export const searchAPI = new SearchService("/catalog/backend/search");
