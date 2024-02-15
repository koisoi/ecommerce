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
    quant: string; // FIXME: number?
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
    waybills: [
        {
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
        }
    ];
    transactions: [
        {
            type: "sale_in";
            method?: "";
            // сумма
            amount_payed: string;
            nds_rate: 20;
        }
    ];
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
};

export type StatisticsQuery = {
    type: {
        category: "basket";
        action: "add";
        label: "main";
    };
    site_id?: number; // 49 по стандарту,
    parent_id: string;
    parent_class: "Sale_Model_Appeals";
    source: "сайт";
    ip?: string;
    referer: string;
    start_url: string;
    utm: {
        source?: "";
        medium?: "";
        campaign?: "";
        content?: "";
        term?: "";
    };
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
