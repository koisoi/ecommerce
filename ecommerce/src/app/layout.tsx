import "./globals.css";
import Header from "./(header)/header";
import { Box, BoxProps, ThemeProvider } from "@mui/material";
import { CSSProperties, ReactNode } from "react";
import Footer from "./(footer)/footer";
import BackCallForm from "./(backCallForm)/backCallForm";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { theme } from "./theme";
import { headers } from "next/headers";
import Container from "./(shared)/container.template";
import StoreProvider from "./storeProvider";

// Fixes: Hydration failed because the initial UI does not match what was rendered on the server.
// const DynamicContextProvider = dynamic(() => import('@/app/storeProvider').then(mod => mod.default, {
//     ssr: false
//   })

// const DynamicStoreProvider = dynamic(() => import("@/app/storeProvider"), {
//     ssr: false,
//     loading: () => (
//         <Box sx={{ height: "100vh", width: "100vw" }}>
//             <Loading>Загрузка...</Loading>
//         </Box>
//     )
// });

// export const metadata: Metadata = {
//     title: landingConfig.landing_title
// };

const RootLayout = ({
    children
}: Readonly<{
    children: ReactNode;
    searchParams: { [key: string]: string | string[] | undefined };
}>) => {
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
            fontSize: { xs: "12px", sm: "15px" }
        }
    };

    const bodyProps: { style: CSSProperties } = {
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
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box {...htmlBoxProps}>
                    <head>
                        <meta charSet="UTF-8" />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        {/* <title>{landingConfig.landing_title}</title> */}
                    </head>
                    <body {...bodyProps}>
                        <StoreProvider referer={referer}>
                            <BackCallForm />
                            <Header />
                            <Box
                                padding={{ xs: "1rem", md: "2rem" }}
                                display="flex"
                                justifyContent="center"
                                flexGrow={1}
                            >
                                <Container>{children}</Container>
                            </Box>
                            <Footer />
                        </StoreProvider>
                    </body>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default RootLayout;
