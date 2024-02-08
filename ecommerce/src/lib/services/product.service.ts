import { Service } from "..";
import { Product, ProductRequest } from "../types/product";

class ProductService extends Service {
    /**
     * Получение информации о товаре
     * @param category alias категории
     * @param series необязательный, alias серии
     * @param alias alias товара
     */
    public async getCategoryItem({
        category,
        series,
        alias
    }: ProductRequest): Promise<Product> {
        return fetch(
            `${this.baseURL}product?path=TOP.${category}&alias=${alias}&format=json`
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

export const productAPI = new ProductService("catalog/backend/");
