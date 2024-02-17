import {
    NetworkError,
    OrderData,
    OrderQuery,
    OrderResponse,
    Service,
    StatisticsForm,
    StatisticsQuery,
    StatisticsResponse
} from "..";

class OrderService extends Service {
    constructor(baseURL: string, options?: RequestInit) {
        super(baseURL, options);
        this.baseURL = "https://stat.webtrack.biz" + baseURL;
    }

    /**
     * Авторизация перед отправкой заказа на сервер
     */
    public async authorization(): Promise<any> {
        return fetch(
            `${this.baseURL}?login=landing&key=0bc58985846b6384dff3332178942f6c`,
            this.options
        ).then((response) => {
            if (!response.ok) {
                throw new NetworkError(response.statusText, response.status);
            }
            return response.json();
        });
    }

    /**
     * Отправка заказа на сервер
     */
    public async postOrder(orderData: OrderData): Promise<OrderResponse> {
        const JSONbody: OrderQuery = {
            source: "сайт",
            geo: "rf",
            is_alert: true,
            // Информация о покупателе
            site_info: {
                name: orderData.fullName,
                phone: orderData.phoneNumber,
                email: orderData.email,
                info: orderData.commentary
            },
            status_appeal: "order",
            waybills: {
                wb_0: {
                    type: "sale_out",
                    products: orderData.cart,
                    nds_rate: 20
                }
            },
            transactions: {
                tr_0: {
                    type: "sale_in",
                    // сумма
                    amount_payed: orderData.total,
                    nds_rate: 20
                }
            }
        };

        // const formData = new FormData();
        // Object.keys(JSONbody).forEach((key) =>
        //     formData.append(key, JSONbody[key])
        // );

        return fetch(`${this.baseURL}/sale/remote/appeal-save`, {
            ...this.options,
            method: "POST",
            body: JSON.stringify(JSONbody)
        }).then((response) => {
            if (!response.ok) {
                throw new NetworkError(response.statusText, response.status);
            }
            return response.json();
        });
    }

    /**
     * Отправка статистики (после отправки заказа на сервер)
     */
    public async postStatistics(
        statistics: StatisticsForm
    ): Promise<StatisticsResponse> {
        const body: StatisticsQuery = {
            type: {
                category: "basket",
                action: "add",
                label: "main"
            },
            site_id: 49, // 49 по стандарту,
            parent_id: statistics.parent_id,
            parent_class: "Sale_Model_Appeals",
            source: "сайт",
            ip: statistics.ip,
            referer: statistics.referer,
            start_url: statistics.start_url,
            utm: {},
            yandex: {}
        };

        return fetch(`${this.baseURL}/statv2/remote/action-save`, {
            ...this.options,
            method: "POST",
            body: JSON.stringify(body)
        }).then((response) => {
            if (!response.ok) {
                throw new NetworkError(response.statusText, response.status);
            }
            return response.json();
        });
    }
}

export const orderAPI = new OrderService("");