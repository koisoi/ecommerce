export type PageData = {
    id: number;
    title: string;
    path: string;
    url: string;
    page_title?: string;
    page_description?: string;
    page_keywords?: string;
    text?: string | null;
    images: [{ url: string }?];
    image?: string;
    parent_class: string;
    parent_id: number;
    parent?: PageData;
};
