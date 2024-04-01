import { CategoryItem } from "..";

export type MainProductInfo = CategoryItem & {
    page_title?: string;
    page_description?: string;
    page_keywords?: string;
    complectation: string;
    text: string;
};

export type Characteristic = {
    text: string;
    value: string;
    units: string;
};

export type ProductCharacteristic = {
    [key: string]: Characteristic;
};

export type ProductCharacteristics = {
    [key: string]: ProductCharacteristic;
};

export type ProductReview = {
    id: number;
    name: string;
    pro?: string;
    contra?: string;
    comment?: string;
    created: string;
};

export type FullProductInfo = MainProductInfo & {
    shortCharacteristics?: ProductCharacteristic;
    fullCharacteristics: ProductCharacteristics;
    reviews: ProductReview[];
    siblings: CategoryItem[];
};

export type ProductRequest = {
    category: string | null;
    alias: string | null;
};

export type ProductPageTabType =
    | "allCharasteristics"
    | "description"
    // | "feedback"
    | "complectation"
    | "pickUp";
