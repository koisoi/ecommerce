"use client";

import "./globals.css";
import styles from "./page.module.css";
import Header from "./(header)/header.template";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Footer from "./(footer)/footer.template";
import { CSSProperties, ReactNode, useEffect, useState } from "react";
import StoreProvider from "./storeProvider";

const theme = createTheme({
    palette: {
        primary: {
            main: "#bd2126",
            dark: "#7a1619"
        },
        secondary: {
            main: "#e3666a",
            dark: "#b04d51"
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
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
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
            justifyContent: "space-between",
            minHeight: "100vh",
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
                                minHeight="100vh"
                            >
                                {children}
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
