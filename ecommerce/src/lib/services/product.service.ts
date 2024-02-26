import { NetworkError } from "..";
import {
    MainProductInfo,
    ProductRequest,
    ProductReview
} from "../types/product";
import { Service } from "./base.service";

class ProductService extends Service {
    /**
     * Получение основной информации о товаре
     * @param category alias категории
     * @param series необязательный, alias серии
     * @param alias alias товара
     */
    public async getProductMainInfo({
        category,
        alias
    }: ProductRequest): Promise<MainProductInfo> {
        return fetch(
            `${this.baseURL}/catalog/backend/product?path=${category}&alias=${alias}&format=json`,
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
            .then((data) => data.product);
    }

    /**
     * Получение основных характеристик
     * @param alias alias товара
     */
    public async getProductShortCharacteristics({
        alias
    }: {
        alias: string | null;
    }): Promise</*TODO: изменить */ any> {
        return fetch(
            `${this.baseURL}/filters/backend/product-filters?alias=${alias}&mode=main&format=json`,
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
            .then((data) => data.filters["Основные характеристики"]);
    }

    /**
     * Получение всех характеристик
     * @param alias alias товара
     */
    public async getProductFullCharacteristics({
        alias
    }: {
        alias: string | null;
    }): Promise</*TODO: изменить */ any> {
        return fetch(
            `${this.baseURL}/filters/backend/product-filters?alias=${alias}&mode=full&format=json`,
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
            .then((data) =>
                data.filters.length === 0 ? undefined : data.filters
            );
    }

    /**
     * Получение отзывов
     * @param alias alias товара
     */
    public async getProductReviews({
        alias
    }: {
        alias: string | null;
    }): Promise<ProductReview[]> {
        return fetch(
            `${this.baseURL}/catalog/backend/reviews?alias=${alias}&format=json`,
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
            .then((data) => data.reviews);
    }

    /**
     * Получение похожих товаров
     * @param alias alias товара
     */
    public async getProductSiblings({
        alias
    }: {
        alias: string | null;
    }): Promise</*TODO: изменить */ any> {
        return fetch(
            `${this.baseURL}/catalog/backend/siblings?alias=${alias}&format=json`,
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
}

export const productAPI = new ProductService("");
