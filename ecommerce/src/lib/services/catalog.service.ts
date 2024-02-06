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
     * @param category Алиас категории
     */
    public async getCategory(category: string): Promise<CategoryInfo> {
        // return new Promise((resolve, reject) => {
        //     this.axiosInstance
        //         .get(category)
        //         .then(({ data }) => resolve(data))
        //         .catch(reject);
        // });

        return fetch(
            `https://dev.telescope1.ru/catalog/backend/landing?path=TOP.${category}&landing=iray&format=json`,
            {
                method: "GET",
                credentials: "include",
                mode: "cors",
                headers: new Headers({
                    Authorization: "Basic " + btoa("fr123:123qwe"),
                    "Content-Type": "application/json"
                })
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => data.landing);
    }

    public async getCategoryItems({
        category,
        series,
        productsPerPage,
        page
    }: CategoryItemsRequest): Promise<CategoryItemsResponse> {
        // return new Promise((resolve, reject) => {
        //     this.axiosInstance
        //         .get(`${category}/${series ? series + "/" : ""}items/${page}`)
        //         .then(({ data }) => resolve(data))
        //         .catch(reject);
        // });

        return fetch(
            `https://dev.telescope1.ru/catalog/backend/products?path=TOP.${category}&landing=iray&page=${page}&limit=${productsPerPage}&format=json`,
            {
                method: "GET",
                credentials: "include",
                mode: "cors",
                headers: new Headers({
                    Authorization: "Basic " + btoa("fr123:123qwe"),
                    "Content-Type": "application/json"
                })
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => data.products);
    }

    /**
     * Получение карточек товара
     */
    public async getCatalogItems(): Promise<{ list: CategoryItem[] }> {
        return new Promise((resolve, reject) => {
            this.axiosInstance
                .get("index")
                .then(({ data }) => resolve(data))
                .catch(reject);
        });

        return fetch(
            "https://dev.telescope1.ru/catalog/products/index?path=TOP.thermal_riflescopes&landing=1690&format=json",
            {
                method: "GET",
                credentials: "include",
                mode: "cors",
                headers: new Headers({
                    Authorization: "Basic " + btoa("fr123:123qwe"),
                    "Content-Type": "application/json"
                })
            }
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
    }
}

export const categoryService = new CategoryService("/catalog/products/");
