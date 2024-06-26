import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

export const FooterTitle = ({ children }: { children?: ReactNode }) => {
    const titleProps: TypographyProps = {
        color: "text.dark",
        fontSize: "1.2rem",
        lineHeight: 1,
        fontWeight: "bold"
    };

    return <Typography {...titleProps}>{children}</Typography>;
};
