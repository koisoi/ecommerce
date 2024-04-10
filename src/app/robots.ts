import { backendAPI } from "@/lib";
import { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
    const siteData = await backendAPI.getSite();

    return {
        rules: {
            userAgent: "*",
            disallow: [
                "/cart*",
                "/search*",
                "/catalog*page=1$",
                "/*?*",
                "/img/banners*"
            ],
            allow: "/*?page*",
            crawlDelay: 0.5
        },
        sitemap: `${siteData.url || ""}/sitemap.xml`
    };
}
