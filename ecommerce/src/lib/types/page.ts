export type PageData = {
    id: number;
    title: string;
    path: string;
    url: string;
    page_title?: string;
    page_description?: string;
    page_keywords?: string;
    images: [{ url: string }];
    parent_class: string;
    parent?: PageData;
};
