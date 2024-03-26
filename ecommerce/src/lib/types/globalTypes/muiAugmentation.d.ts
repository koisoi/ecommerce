import { BreakpointOverrides } from "@mui/material";

declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xs: true;
        xsm: true;
        sm: true;
        smd: true;
        md: true;
        mlg: true;
        lg: true;
        xlg: true;
        xl: true;
    }

    interface Palette {
        link: Palette["primary"];
        menuBackground: Palette["primary"];
        accent: Palette["primary"];
        accentAlt: Palette["primary"];
    }

    interface PaletteOptions {
        link?: PaletteOptions["primary"];
        menuBackground?: PaletteOptions["primary"];
        accent?: PaletteOptions["primary"];
        accentAlt?: PaletteOptions["primary"];
    }

    interface TypeText {
        dark: string;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        accent: true;
        accentAlt: true;
    }
}
