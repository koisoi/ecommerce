export abstract class Service {
    readonly baseURL: string;
    readonly headers: RequestInit;

    constructor(baseURL: string, headers?: RequestInit) {
        this.baseURL = "https://dev.telescope1.ru" + baseURL;
        this.headers = {
            ...headers,
            method: "GET",
            credentials: "include",
            mode: "cors",
            headers: new Headers({
                Authorization: "Basic " + btoa("fr123:123qwe"),
                "Content-Type": "application/json"
            })
        };
    }
}
