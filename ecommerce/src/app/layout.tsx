"use client";

import "./globals.css";
import React from "react";
import styles from "./page.module.css";
import Header from "./(header)/header";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Footer from "./(footer)/footer";

const theme = createTheme({
    palette: {
        primary: {
            main: "#3167EB",
            dark: "#0e48d7",
        },
        secondary: {
            main: "#6F95F1",
        },
        text: {
            disabled: "#969696",
            primary: "#212529",
            secondary: "#545454",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            smd: 750,
            md: 900,
            mlg: 1050,
            lg: 1200,
            xl: 1536,
        },
    },
});

const RootLayout = ({
    children,
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
        },
    };

    return (
        <html lang="en">
            <body {...bodyProps}>
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
            </body>
        </html>
    );
};

export default RootLayout;
