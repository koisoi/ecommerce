import { CategoryItem, NetworkError, ProductReview, landingConfig } from "..";
import { Service } from "./base.service";

class HomePageService extends Service {
    public async getPopularProducts(): Promise<CategoryItem[]> {
        return fetch(
            `${this.baseURL}/products-popular/site_id/${landingConfig.id}?brand=${landingConfig.landing}&limit=10&format=json`,
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

export const homePageAPI = new HomePageService("/catalog/backend");
