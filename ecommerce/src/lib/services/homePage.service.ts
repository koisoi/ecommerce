import { store } from "@/app/storeProvider";
import { CategoryItem, NetworkError, ProductReview } from "..";
import { Service } from "./base.service";

class HomePageService extends Service {
    public async getPopularProducts(): Promise<CategoryItem[]> {
        return fetch(
            `${this.baseURL}/products-popular?brand=${
                store.getState().GlobalReducer.landing
            }&limit=10&format=json`,
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

    public async getLastReviews(): Promise<ProductReview[]> {
        return fetch(
            `${this.baseURL}/last-reviews?brand=${
                store.getState().GlobalReducer.landing
            }&limit=9&format=json`,
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
                return data.reviews;
            });
    }
}

export const homePageAPI = new HomePageService("/catalog/backend");
