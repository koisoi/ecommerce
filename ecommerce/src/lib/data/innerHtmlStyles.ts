import { SxProps, Theme } from "@mui/material";

export const innerHtmlStyles: SxProps<Theme> = {
    fontSize: "1rem",
    strong: {
        color: "primary.main",
        fontWeight: "bold"
    },

    li: {
        marginTop: "0.5rem"
    },

    "ul + p": {
        paddingTop: "1rem"
    },

    "p + p": {
        paddingTop: "0.5rem"
    }
};
