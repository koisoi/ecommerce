import { BreakpointOverrides } from "@mui/material";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: true; 
      sm: true;
      smd: true;
      md: true;
      mlg: true;
      lg: true;
      xl: true;
    }
  }