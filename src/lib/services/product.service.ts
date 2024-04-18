import { CategoryItem, NetworkError, landingConfig } from "..";
import { categoryAliasToPath } from "../functions/catalogPathTransform";
import {
    MainProductInfo,
    ProductCharacteristic,
    ProductCharacteristics,
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
            `${this.baseURL}/catalog/backend/product/site_id/${
                landingConfig.id
            }?alias=${alias?.replace(".html", "")}&format=json`,
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
    }): Promise<ProductCharacteristic> {
        return fetch(
            `${this.baseURL}/filters/backend/product-filters/site_id/${
                landingConfig.id
            }?alias=${alias?.replace(".html", "")}&mode=main&format=json`,
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
    }): Promise<ProductCharacteristics> {
        return fetch(
            `${this.baseURL}/filters/backend/product-filters/site_id/${
                landingConfig.id
            }?alias=${alias?.replace(".html", "")}&mode=full&format=json`,
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
    // public async getProductReviews({
    //     alias
    // }: {
    //     alias: string | null;
    // }): Promise<ProductReview[]> {
    //     return fetch(
    //         `${this.baseURL}/catalog/backend/reviews?alias=${alias?.replace(
    //             ".html",
    //             ""
    //         )}&format=json`,
    //         this.options
    //     )
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new NetworkError(
    //                     response.statusText,
    //                     response.status
    //                 );
    //             }
    //             return response.json();
    //         })
    //         .then((data) => data.reviews);
    // }

    /**
     * Получение похожих товаров
     * @param alias alias товара
     */
    public async getProductSiblings({
        alias
    }: {
        alias: string | null;
    }): Promise<CategoryItem[]> {
        return fetch(
            `${this.baseURL}/catalog/backend/siblings/site_id/${
                landingConfig.id
            }?alias=${alias?.replace(".html", "")}&format=json`,
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
