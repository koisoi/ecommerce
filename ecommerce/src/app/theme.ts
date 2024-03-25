"use client";

import { createTheme } from "@mui/material";
import { landingConfig } from "../lib/data/config";

let theme = createTheme({
    palette: {
        ...landingConfig.colors
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
});

theme = createTheme(theme, {
    palette: {
        ...(theme.palette.accent.main && {
            accent: theme.palette.augmentColor({
                color: { main: theme.palette.accent.main },
                name: "accent"
            })
        }),
        ...(theme.palette.menuBackground.main && {
            menuBackground: theme.palette.augmentColor({
                color: {
                    main: theme.palette.menuBackground.main,
                    light: theme.palette.menuBackground.light
                },
                name: "menuBackground"
            })
        })
    }
});

export { theme };
