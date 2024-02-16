export type OrderForm = {
    fullName: string;
    email: string;
    phoneNumber: string;
    commentary: string;
};

export type CartProduct = {
    articul: string;
    // цена
    amount_original: string;
    // кол-во
    quant: string;
    bonus_points?: string;
};

export type OrderData = OrderForm & {
    cart: CartProduct[];
    total: string;
};

export type OrderQuery = {
    source: "сайт";
    geo: "rf"; // 'rf' | 'msk' | 'spb' | 'nn'
    is_alert: true;
    // Информация о покупателе
    site_info: {
        name: string;
        phone: string;
        email?: string;
        city?: string;
        address?: string;
        info?: string;
    };
    status_appeal: "order";
    waybills: {
        wb_0: {
            type: "sale_out";
            method?:
                | "shop"
                | "courier"
                | "yandex_go"
                | "post_rf"
                | "sdek"
                | "dellin";
            products: CartProduct[];
            nds_rate: 20;
        };
    };
    transactions: {
        tr_0: {
            type: "sale_in";
            method?: "";
            // сумма
            amount_payed: string;
            nds_rate: 20;
        };
    };

    readonly [key: string]: any;
};

export type OrderResponse = {
    status: "ok" | "fail";
    appeal: {
        id: string;
    };
};

export type StatisticsForm = {
    parent_id: string; // id заказа
    ip: string;
    referer: string;
    start_url: string;
    utm: UTMParams;
};

export type UTMParams = {
    source?: string; // param utm_source
    medium?: string; // param utm_medium
    campaign?: string; // param utm_campaign
    content?: string; // param utm_content
    term?: string; // param utm_term
};

export type StatisticsQuery = {
    type: {
        category: "basket";
        action: "add";
        label: "main";
    };
    site_id?: number; // 49 по стандарту
    parent_id: string;
    parent_class: "Sale_Model_Appeals";
    source: "сайт";
    ip?: string;
    referer: string;
    start_url: string;
    utm: UTMParams;
    yandex: {
        clientID?: "";
        yclid?: "";
        ysclid?: "";
    };
};

export type StatisticsResponse = {
    status: "ok" | "fail";
    action: any[];
};
