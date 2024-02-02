import { CatalogItem } from "@/types";
import { Service } from "./baseService";

class CatalogService extends Service {
    /**
     * Получение карточек товара
     */
    public async getCatalogItems(): Promise<{ list: CatalogItem[] }> {
        return new Promise((resolve, reject) => {
            const isProd = process.env.NODE_ENV === "production";

            const username: string | undefined = process.env.DEV_SERVER_LOGIN;
            const password: string | undefined = process.env.DEV_SERVER_PASS;

            if ((!username || !password) && isProd) {
                reject(new Error("Username or password is not set."));
                return;
            }

            this.axiosInstance
                .get(
                    isProd
                        ? "index?path=TOP.thermal_riflescopes&landing=1690&format=json"
                        : "index",
                    {
                        auth: isProd
                            ? {
                                  username: "fr123",
                                  password: "123qwe"
                              }
                            : undefined
                    }
                )
                .then(({ data }) => resolve(data))
                .catch(reject);
        });
    }
}

export const catalogService = new CatalogService("/catalog/products/");

// картинки относительно домена telescope1
