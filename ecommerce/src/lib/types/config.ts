import { Organization } from "schema-dts";
import { PageData } from "..";

export type LandingConfig = {
    id: number;
    landing: string;
    landing_title: string;
    landing_id: number;
    url?: string;
    logoImgLink?: string;
    logoImgMobileLink?: string;
    categories: PageData[];
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
    advantages: {
        text: string;
        delivery: string;
        payment: string;
        bonuses: string;
    };
    organizationSchema?: Organization;
};
