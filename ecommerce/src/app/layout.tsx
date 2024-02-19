"use client";

import "./globals.css";
import styles from "./page.module.css";
import Header from "./(header)/header.template";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Footer from "./(footer)/footer.template";
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import StoreProvider from "./storeProvider";
import Breadcrumbs from "./(shared)/breadcrumbs/breadcrumbs";
import Container from "./(shared)/container.template";
import { setCart, useAppDispatch } from "@/lib";
import {
    getIp,
    setReferrer,
    setStartUrl,
    setUTM
} from "@/lib/slices/global.slice";
import { useSearchParams } from "next/navigation";
import { getCookie } from "cookies-next";

const theme = createTheme({
    palette: {
        primary: {
            main: "#bd2126",
            dark: "#7a1619",
            light: "#ff757a"
        },
        secondary: {
            main: "#e3666a",
            dark: "#b04d51",
            light: "#ffb3b5"
        },
        text: {
            disabled: "#969696",
            primary: "#212529",
            secondary: "#545454"
        },
        background: {
            default: "#fff"
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            xsm: 300,
            sm: 600,
            smd: 750,
            md: 900,
            mlg: 1050,
            lg: 1200,
            xlg: 1350,
            xl: 1536
        }
    }
});

// https://stackoverflow.com/questions/75406728/how-to-entirely-disable-server-side-rendering-in-next-js-v13
const Dynamic = ({ children }: { children: ReactNode }) => {
    const dispatch = useAppDispatch();
    const params = useSearchParams();

    const source = params.get("utm_source");
    const medium = params.get("utm_medium");
    const campaign = params.get("utm_campaign");
    const content = params.get("utm_content");
    const term = params.get("utm_term");

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
        dispatch(getIp());
        dispatch(setReferrer(document.referrer));
        dispatch(setStartUrl(document.URL));
        dispatch(
            setUTM({
                source: source || undefined,
                medium: medium || undefined,
                campaign: campaign || undefined,
                content: content || undefined,
                term: term || undefined
            })
        );

        const cartCookie = getCookie("cart");
        if (cartCookie) dispatch(setCart(JSON.parse(cartCookie)));
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <>{children}</>;
};

const RootLayout = ({
    children
}: Readonly<{
    children: ReactNode;
}>) => {
    const bodyProps: { className: string; style: CSSProperties } = {
        className: `${styles.mainFont}`,
        style: {
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundColor: theme.palette.background.default,
            padding: "0!important"
        }
    };

    return (
        <html lang="en">
            <body {...bodyProps}>
                <StoreProvider>
                    <Dynamic>
                        <ThemeProvider theme={theme}>
                            <Header />
                            <Box
                                padding="40px"
                                display="flex"
                                justifyContent="center"
                                // minHeight="45vh"
                                flexGrow={1}
                            >
                                <Container>
                                    <Breadcrumbs />
                                    {children}
                                </Container>
                            </Box>
                            <Footer />
                        </ThemeProvider>
                    </Dynamic>
                </StoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
