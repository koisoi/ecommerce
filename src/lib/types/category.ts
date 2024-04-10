import { PageData } from "..";

export type CategoryListItem = { title: string; path: string; image: string };

export type SeriesInfo = {
    id: number;
    title: string;
    alias: string;
    productsAmount: number;
};

export type PageResponse = {
    id: number;
    title: string;
    path: string;
    page_description?: string;
    page_title?: string;
    page_keywords?: string;
    images: [{ url: string }];
    parent_class: string;
};

export type CategoryInfo = {
    id: number;
    title: string;
    image: string;
    path: string;
    page_description?: string;
    page_title?: string;
    page_keywords?: string;
    series: SeriesInfo[];
    category?: {
        page_title: string;
        page_description: string;
        page_keywords: string;
        title: string;
        path: string;
        images: [{ id: number; url: string }];
    };
    parent_class: string;

    readonly [key: string]: any;
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
        title_single?: string;
    };
    series?: {
        alias: string;
        title: string;
    };
    availability?: "в наличии" | string;
    external_link?: string;
    type: {
        title: string;
    };
};

export type CategoryItemsRequest = {
    page?: PageData;
    productsPerPage?: number;
    pageNumber?: number;
};

export type CategoryItemsResponse = {
    totalItemCount: number;
    list: CategoryItem[];
};
