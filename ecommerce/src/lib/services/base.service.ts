import axios, { AxiosInstance } from "axios";

export abstract class Service {
    private readonly _axiosInstance: AxiosInstance;

    get axiosInstance() {
        return this._axiosInstance;
    }

    constructor(baseURL: string) {
        this._axiosInstance = axios.create({
            // baseURL: "https://dev.telescope1.ru"
            baseURL:
                (process.env.NODE_ENV === "production"
                    ? "https://dev.telescope1.ru"
                    : "http://localhost:8000") + baseURL
            // withCredentials: true, - если в будущем будем использовать куки надо будет разкомментить
        });

        // дефолтная обработка ошибок - добавить попозже
        // this._instance.interceptors.request.use(
        //          (responce) => responce,
        //          (error) => {
        //              if (error.response?.status === 401) {
        //                  store.dispatch(resetState());
        //              }
        //              return Promise.reject(error);
        //         }
        //      );
    }
}
