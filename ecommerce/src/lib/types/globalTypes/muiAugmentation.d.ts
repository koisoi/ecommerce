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
}
