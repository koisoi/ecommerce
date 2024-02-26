"use client";

import "./globals.css";
import styles from "./page.module.css";
import Header from "./(header)/header";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import {
    CSSProperties,
    MouseEventHandler,
    ReactNode,
    useEffect,
    useState
} from "react";
import StoreProvider from "./storeProvider";
import Container from "./(shared)/container.template";
import { setCart, useAppDispatch, useAppSelector } from "@/lib";
import {
    GlobalState,
    getCategoryImages,
    getGeo,
    setGeo,
    setReferrer,
    setStartUrl,
    setUTM
} from "@/lib/slices/global.slice";
import { useSearchParams } from "next/navigation";
import { getCookie } from "cookies-next";
import Footer from "./(footer)/footer";
import BackCallForm from "./(backCallForm)/backCallForm";
import { BackCallState, closeBackCallModal } from "@/lib/slices/backCall.slice";

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

    const { colors } = useAppSelector(GlobalState);
    const { backCallOpen } = useAppSelector(BackCallState);

    const theme = createTheme({
        palette: {
            ...colors,
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

    const handleBackCallClose: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(closeBackCallModal());
    };

    useEffect(() => {
        setHasMounted(true);
    }, []);

    useEffect(() => {
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
        dispatch(getCategoryImages());

        const geo = getCookie("geo");
        if (!geo) dispatch(getGeo());
        else {
            dispatch(setGeo(geo as "rf" | "nn" | "msk" | "spb"));
        }

        const cartCookie = getCookie("cart");
        if (cartCookie) dispatch(setCart(JSON.parse(cartCookie)));
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <BackCallForm open={backCallOpen} onClose={handleBackCallClose} />
            {children}
        </ThemeProvider>
    );
};

const RootLayout = ({
    children
}: Readonly<{
    children: ReactNode;
}>) => {
    const htmlStyle: CSSProperties = {
        overflow: "auto",
        scrollbarGutter: "stable",
        maxWidth: "100vw",
        overflowX: "hidden"
    };

    const bodyProps: { className: string; style: CSSProperties } = {
        className: `${styles.mainFont}`,
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
                <title>iRay</title>
            </head>
            <body {...bodyProps}>
                <StoreProvider>
                    <Dynamic>
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
                    </Dynamic>
                </StoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
