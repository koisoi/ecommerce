import { CatalogItem } from "@/types";
import { Service } from "../../(shared)/services/baseService";

class CatalogService extends Service {
    /**
     * Получение карточек товара
     */
    public async getCatalogItems(): Promise<{ list: CatalogItem[] }> {
        // return new Promise((resolve, reject) => {
        //     const isProd = process.env.NODE_ENV === "production";

        //     const username: string | undefined = process.env.DEV_SERVER_LOGIN;
        //     const password: string | undefined = process.env.DEV_SERVER_PASS;

        //     if ((!username || !password) && isProd) {
        //         reject(new Error("Username or password is not set."));
        //         return;
        //     }

        //     this.axiosInstance
        //         .get(
        //             "index?path=TOP.thermal_riflescopes&landing=1690&format=json",
        //             {
        //                 auth: {
        //                     username: "fr123",
        //                     password: "123qwe"
        //                 }
        //             }
        //             // isProd
        //             //     ? "index?path=TOP.thermal_riflescopes&landing=1690&format=json"
        //             //     : "index",
        //             // {
        //             //     auth: isProd
        //             //         ? {
        //             //               username: "fr123",
        //             //               password: "123qwe"
        //             //           }
        //             //         : undefined
        //             // }
        //         )
        //         .then(({ data }) => resolve(data))
        //         .catch(reject);
        // });

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

export const catalogService = new CatalogService("/catalog/products/");
