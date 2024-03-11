"use client";

import { createTheme } from "@mui/material";
import { landingConfig } from "../lib/data/config";

export const theme = createTheme({
    palette: {
        ...landingConfig.colors,
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
    },
    typography: {
        fontFamily: "inherit",
        button: {
            fontSize: "1rem"
        }
    }
    // components: {
    //     MuiButtonBase: {
    //         styleOverrides: {
    //             root: {
    //                 fontSize: "1rem"
    //             }
    //         }
    //     }
    // }
});
