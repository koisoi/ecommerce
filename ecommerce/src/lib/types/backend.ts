export type SiteData = {
    id: number;
    title: string;
    url: string;
    page_title?: string;
    page_description?: string;
    page_keywords?: string;
    text?: string | null;
    images: [{ url: string }, { url: string }];
    logo_main?: string;
    logo_alt?: string;
};

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

export type BannerData = {
    id: number;
    url: string;
    src: string;
    width: string;
    height: string;
    backgrounds: [{ descktop: string }, { mobile: string }];
};
