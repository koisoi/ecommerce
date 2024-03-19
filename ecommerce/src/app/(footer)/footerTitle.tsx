import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const FooterTitle = ({ children }: { children: ReactNode }) => {
    const titleProps: TypographyProps = {
        color: "text.primary",
        fontSize: "1.2rem",
        lineHeight: 1,
        fontWeight: "bold"
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default FooterTitle;
