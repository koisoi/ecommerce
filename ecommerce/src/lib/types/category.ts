export type CategoryListItem = { title: string; path: string; image?: string };

// TODO: поменять ключи объектов
export type SeriesInfo = {
    id: number;
    title: string;
    alias: string;
    productsAmount: number;
};

export type CategoryInfo = {
    title: string;
    alias: string;
    page_description?: string;
    series: SeriesInfo[];
    category?: {
        title: string;
        images: [{ id: number; url: string }];
    };
    parent_class: string;
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
        title: string;
    };
    series?: {
        alias: string;
        title: string;
    };
    is_available?: boolean; //FIXME: изменить на availability (строка)
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
