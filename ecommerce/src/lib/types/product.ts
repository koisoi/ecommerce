import { CategoryItem } from "..";

export type Product = CategoryItem & {
    is_available?: boolean;
    shortCharacteristics: string;
    fullCharacteristics: string;
    description: string;
    feedback?: {
        id: number;
        name: string;
        date: string;
        comment: string;
    }[];
    simliarProducts: CategoryItem[];
};

export type ProductRequest = {
    category: string;
    series?: string;
    alias: string;
};
