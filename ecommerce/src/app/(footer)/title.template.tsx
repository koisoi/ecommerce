import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const FooterTitle = ({ children }: { children: ReactNode }) => {
    const titleProps: TypographyProps = {
        color: "text.primary",
        fontSize: { xs: "1.2rem", md: "1.7rem" },
        lineHeight: { xs: 1, md: 1.5 },
        fontWeight: "bold"
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default FooterTitle;
