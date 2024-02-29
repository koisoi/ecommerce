import "./globals.css";
import styles from "./page.module.css";
import Header from "./(header)/header";
import { Box, ThemeProvider } from "@mui/material";
import { CSSProperties, ReactNode } from "react";
import StoreProvider from "./storeProvider";
import Container from "./(shared)/container.template";
import Footer from "./(footer)/footer";
import BackCallForm from "./(backCallForm)/backCallForm";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { theme } from "./theme";
import { landingConfig } from "../lib/data/config";
import { headers } from "next/headers";

const RootLayout = ({
    children
}: Readonly<{
    children: ReactNode;
    searchParams: { [key: string]: string | string[] | undefined };
}>) => {
    const headersList = headers();
    const referer = headersList.get("referer");

    const htmlStyle: CSSProperties = {
        overflow: "auto",
        scrollbarGutter: "stable",
        maxWidth: "100vw",
        overflowX: "hidden"
    };

    const bodyProps: { className: string; style: CSSProperties } = {
        className: styles.mainFont,
        style: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            // minWidth: "100vw",
            backgroundColor: "#fff",
            padding: "0!important",
            boxSizing: "border-box"
        }
    };

    return (
        <html lang="ru" style={htmlStyle}>
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{landingConfig.landing_title}</title>
            </head>
            <body {...bodyProps}>
                <StoreProvider referer={referer}>
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={theme}>
                            <BackCallForm />
                            <Header />
                            <Box
                                padding="40px"
                                display="flex"
                                justifyContent="center"
                                flexGrow={1}
                            >
                                <Container>{children}</Container>
                            </Box>
                            <Footer />
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </StoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
