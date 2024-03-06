import { LandingConfig } from "@/lib/types/config";

export const landingConfig: LandingConfig = {
    landing: "iray",
    landing_title: "iRay",
    landing_id: 49,
    logoImgLink:
        "https://telescope1.ru/data/upload/Catalog_Model_Brands/45855_original.svg",
    logoImgMobileLink: "/iRay.svg",
    categories: [
        {
            title: "Дальномеры",
            // path: "TOP.range_finders",
            path: "range-finders",
            image: "https://telescope1.ru/data/upload/Catalog_Model_Categories/34598_original.png"
        },
        {
            title: "Тепловизоры",
            // path: "TOP.termovisors",
            path: "termovisors",
            image: "https://telescope1.ru/data/upload/Catalog_Model_Categories/34604_original.png"
        },
        {
            title: "Тепловизионные прицелы",
            // path: "TOP.thermal_riflescopes",
            path: "thermal-riflescopes",
            image: "https://telescope1.ru/data/upload/Catalog_Model_Categories/34603_original.png"
        },
        {
            title: "Ночные прицелы",
            // path: "TOP.night_vision_riflescopes",
            path: "night-vision-riflescopes",
            image: "https://telescope1.ru/data/upload/Catalog_Model_Categories/34602_original.png"
        },
        {
            title: "Тепловизионные насадки",
            // path: "TOP.nv_thermal_attachments",
            path: "nv-thermal-attachments",
            image: "https://telescope1.ru/data/upload/Catalog_Model_Categories/49754_original.png"
        }
    ],
    colors: {
        primary: {
            main: "#bd2126",
            dark: "#7a1619",
            light: "#ff757a"
        },
        secondary: {
            main: "#e3666a",
            dark: "#b04d51",
            light: "#ffb3b5"
        }
    }
};
