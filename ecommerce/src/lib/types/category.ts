// TODO: поменять ключи объектов
export type SeriesInfo = {
    title: string;
    alias: string;
    productsAmount: number;
};

export type CategoryInfo = {
    title: string;
    alias: string;
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
    category: {
        path: string;
    };
};

export type CategoryItemsRequest = {
    category: string;
    series?: string | null;
    productsPerPage: number;
    page: number;
};

export type CategoryItemsResponse = {
    totalItemCount: number;
    list: CategoryItem[];
};
