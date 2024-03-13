import { CategoryInfo, CategoryListItem } from "..";

export type LandingConfig = {
    landing: string;
    landing_title: string;
    landing_id: number;
    logoImgLink: string;
    logoImgMobileLink: string;
    categories: Page[];
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
        divider: string;
    };
    phoneNumber: string;
};
