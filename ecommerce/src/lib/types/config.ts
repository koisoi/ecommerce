import { Organization } from "schema-dts";
import { PageData } from "..";
import { PaletteOptions } from "@mui/material";

export type LandingConfig = {
    id: number;
    landing: string;
    landing_title: string;
    landing_id: number;
    url?: string;
    logoImgLink?: string;
    logoImgMobileLink?: string;
    categories: PageData[];
    colors: PaletteOptions;
    phoneNumber: string;
    email: string;
    advantages: {
        text: string;
        delivery: string;
        payment: string;
        bonuses: string;
    };
    organizationSchema?: Organization;
};
