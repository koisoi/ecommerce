import { CategoryListItem } from "..";

export type LandingConfig = {
    landing: string;
    landing_id: number;
    logoImgLink: string;
    categories: CategoryListItem[];
    colors: {
        primary: {
            main: string;
            dark: string;
            light: string;
        };
        secondary: {
            main: string;
            dark: string;
            light: string;
        };
    };
};