"use client";

import "./globals.css";
import React from "react";
import styles from "./page.module.css";
import Header from "./(header)/header.template";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Footer from "./(footer)/footer.template";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3167EB",
            dark: "#0e48d7"
        },
        secondary: {
            main: "#6F95F1"
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
const Dynamic = ({ children }: { children: React.ReactNode }) => {
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
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
    children: React.ReactNode;
}>) => {
    const bodyProps: { className: string; style: React.CSSProperties } = {
        className: `${styles.mainFont}`,
        style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default
        }
    };

    return (
        <html lang="en">
            <body {...bodyProps}>
                <Dynamic>
                    <ThemeProvider theme={theme}>
                        <Header />
                        <Box
                            paddingY="40px"
                            display="flex"
                            justifyContent="center"
                            minHeight="100vh"
                        >
                            {children}
                        </Box>
                        <Footer />
                    </ThemeProvider>
                </Dynamic>
            </body>
        </html>
    );
};

export default RootLayout;
