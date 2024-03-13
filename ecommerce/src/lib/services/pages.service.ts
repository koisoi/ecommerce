import { NetworkError, PageData } from "..";
import { Service } from "./base.service";

class PagesService extends Service {
    public getPages({ path }: { path?: string }): Promise<PageData[]> {
        return fetch(
            `${this.baseURL}/pages/site_id/1?path=${path || ""}&format=json`,
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
                return data.pages;
            });
    }
}

export const pagesAPI = new PagesService("/backend/index");
