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
        ...(theme.palette.accentAlt.main && {
            accentAlt: theme.palette.augmentColor({
                color: { main: theme.palette.accentAlt.main },
                name: "accentAlt"
            })
        }),
        ...(theme.palette.primary.main && {
            menuBackground: theme.palette.augmentColor({
                color: {
                    main: theme.palette.primary.main,
                    light: theme.palette.primary.light
                },
                name: "menuBackground"
            })
        }),
    }
});

export { theme };
