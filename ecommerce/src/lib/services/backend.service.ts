import { NetworkError, PageData, SiteData } from "..";
import { landingConfig } from "../data/config";
import { Service } from "./base.service";

class BackendService extends Service {
    public getSite(): Promise<SiteData> {
        return fetch(
            `${this.baseURL}/site/site_id/${landingConfig.id}?format=json`,
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
                return data.site;
            });
    }

    public getPages({ path }: { path?: string }): Promise<PageData[]> {
        return fetch(
            `${this.baseURL}/pages/site_id/${landingConfig.id}?path=${
                path || ""
            }&format=json`,
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

export const backendAPI = new BackendService("/backend/index");
