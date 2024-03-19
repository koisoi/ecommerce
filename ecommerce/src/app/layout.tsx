import "./globals.css";
import { Header } from "./(header)/header";
import { Box, BoxProps, ThemeProvider } from "@mui/material";
import { CSSProperties, ReactNode } from "react";
import { Footer } from "./(footer)/footer";
import { BannersCarousel } from "./(banners)/bannersCarousel.client";
import { BackCallForm } from "./(backCallForm)/backCallForm.client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { theme } from "./theme";
import { headers } from "next/headers";
import StoreProvider from "./storeProvider";
import { BannerData, backendAPI, getLinkDomain, landingConfig } from "@/lib";

const RootLayout = async ({
    children
}: Readonly<{
    children: ReactNode;
}>) => {
    let banners: BannerData[] = [];

    try {
        const siteData = await backendAPI.getSite();

        landingConfig.logoImgLink =
            getLinkDomain(siteData.logo_main || "") || "";
        landingConfig.logoImgMobileLink =
            getLinkDomain(siteData.logo_alt || "") || "";

        const response = await backendAPI.getPages({});

        landingConfig.categories = response.map((el) => ({
            ...el,
            image: getLinkDomain(el.images[0]?.url || "") || ""
        }));

        banners = (await backendAPI.getBanners()).map((el) => ({
            ...el,
            src: getLinkDomain(el.src)
        }));
    } catch (error) {
        console.error(error);
    }

    const headersList = headers();
    const referer = headersList.get("referer");

    const htmlBoxProps: BoxProps = {
        component: "html",
        lang: "ru",

        sx: {
            overflow: "auto",
            scrollbarGutter: "stable",
            maxWidth: "100vw",
            minWidth: "320px",
            overflowX: "hidden",
            fontFamily: "Tahoma, sans-serif",
            fontSize: { xs: "13px", sm: "15px" }
        }
    };

    const bodyProps: { style: CSSProperties } = {
        style: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#fff",
            padding: "0!important"
        }
    };

    const innerProps: BoxProps = {
        width: "100%",
        maxWidth: "1350px",
        minHeight: "100%",

        margin: "0 auto",
        paddingX: { xs: "1rem", xl: 0 }
    };

    const rootBoxProps: BoxProps = {
        ...innerProps,
        component: "main",
        padding: { xs: "1rem", md: "2rem" },
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        flexGrow: 1
    };

    return (
        <AppRouterCacheProvider options={{ key: "css" }}>
            <ThemeProvider theme={theme}>
                <Box {...htmlBoxProps}>
                    <head>
                        <meta charSet="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                    </head>
                    <body {...bodyProps}>
                        <StoreProvider referer={referer}>
                            <BackCallForm />
                            <Header props={innerProps} />
                            {!!banners?.length && (
                                <BannersCarousel banners={banners} />
                            )}
                            <Box {...rootBoxProps}>{children}</Box>
                            <Footer props={innerProps} />
                        </StoreProvider>
                    </body>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default RootLayout;
