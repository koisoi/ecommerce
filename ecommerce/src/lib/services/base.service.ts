export abstract class Service {
    baseURL: string;
    readonly options: RequestInit;

    constructor(baseURL: string, options?: RequestInit) {
        this.baseURL = "https://dev.telescope1.ru" + baseURL;
        this.options = {
            method: "GET",
            credentials: "include",
            mode: "cors",
            headers: new Headers({
                Authorization: "Basic " + btoa("fr123:123qwe"),
                "Content-Type": "application/json"
            }),
            ...options
        };
    }
}
