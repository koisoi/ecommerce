// export type ProductItem = {
//     id: number,
//     page_title?: string,
//     page_description?: string,
//     page_keywords?: string,
//     alias?: string,
//     title?: string,
//     short_text?: string,
//     text?: string,
//     category_id?: number,
//     order?: number,
//     price?: string,
//     is_hidden?: boolean,
//     articul?: string,
//     brand_id?: number,
//     group_id?: number,
//     rating?: string,
//     video?: string,
//     images_tab: null,
//     details_tab: null,
//     weight: null,
//     width: null,
//     height: null,
//     length: null,
//     type_id?: number,
//     is_new?: boolean,
//     is_recommend?: boolean,
//     warranty?: string,
//     is_available?: boolean,
//     external_link?: string,
//     series_id?: number,
//     country?: string,
//     is_low_price?: boolean,
//     is_available_nn?: boolean,
//     is_available_msk?: boolean,
//     is_available_order?: boolean,
//     recticle: null,
//     flash: null,
//     market_link: null,
//     critical_leftover: null,
//     is_market_monitoring?: boolean,
//     is_interesting?: boolean,
//     complectation?: string,
//     ym_title: null,
//     procurement_current: null,
//     sold?: string,
//     view_link: null,
//     tags_list: null,
//     is_preorder?: boolean,
//     country_id: 1,
//     i3d: null,
//     ym_date: "2023-04-10 00:00:00",
//     is_available_preorder?: boolean,
//     recticle_id: null,
//     price_msk?: string,
//     sold_count?: number,
//     bonus_points: "0",
//     price_nn?: string,
//     price_type?: string,
//     price_nn_type?: string,
//     price_msk_type?: string,
//     price_base?: string,
//     mod_title_1?: string,
//     mod_title_2?: string,
//     mod_title_3?: string,
//     mod_order_1?: number,
//     mod_order_2?: number,
//     mod_order_3?: number,
//     supply_date_msk: "2024-02-06",
//     supply_date_nn: "2024-02-07",
//     is_reliable?: boolean,
//     pickup_date_nn: "2024-02-02",
//     pickup_date_msk: "2024-02-02",
//     courier_date_nn: null,
//     courier_date_msk: "2024-02-02",
//     send_date_nn: null,
//     send_date_msk: "2024-02-02",
//     fake_date_nn: null,
//     fake_date_msk: null,
//     arrived_date_nn: null,
//     arrived_date_msk: null,
//     sold_date: "2024-02-15",
//     procurement_original: null,
//     quantity_msk?: number,
//     quantity_nn?: number,
//     is_available_spb?: boolean,
//     price_spb?: string,
//     price_spb_type?: string,
//     supply_date_spb: "2024-02-07",
//     pickup_date_spb: "2024-02-02",
//     courier_date_spb: "2024-02-02",
//     send_date_spb: null,
//     fake_date_spb: null,
//     arrived_date_spb: null,
//     quantity_spb?: number,
//     procurement_base: null,
//     price_wholesale?: string,
//     is_quarantine?: boolean,
//     suppliers: [
//       {
//         id?: number,
//         price?: string,
//         title?: string,
//         description: null,
//         availability?: string,
//         external_link?: string,
//         external_articul?: string
//       }
//     ],
//     is_warehouse_msk?: boolean,
//     is_warehouse_spb?: boolean,
//     is_warehouse_nn?: boolean,
//     availability?: string,
//     availability_msk?: string,
//     availability_spb?: string,
//     availability_nn?: string
//   }

// TODO: поменять ключи объектов
export type SeriesInfo = {
    title: string;
    alias: string;
    productsAmount: number;
};

export type CategoryInfo = {
    title: string;
    // alias: string;
    page_description?: string;
    series: SeriesInfo[];
};

export type CategoryItem = {
    id: number;
    articul: string;
    images: { id: number; url: string }[];
    title: string;
    price: string;
    alias: string;
    is_new: boolean;
    is_recommend: boolean;
    // sale: boolean;
    // category: {
    //     // принадлежность к категории тоже не нужна, если бэкенд будет категории выдавать по запросу
    //     id: number;
    //     title: string;
    // };
};

export type CategoryItemsRequest = {
    category: string;
    series?: string;
    productsPerPage: number;
    page: number;
};

export type CategoryItemsResponse = {
    totalItemCount: number;
    list: CategoryItem[];
};
