import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const PageTitle = ({
    children,
    props
}: {
    children?: ReactNode;
    props?: TypographyProps;
}) => {
    const titleProps: TypographyProps = {
        fontSize: "2.5rem",
        fontWeight: "bolder",
        marginBottom: { xs: "0.5rem", sm: "1rem" },
        lineHeight: { xs: 1, sm: 1.5 },

        color: "text.primary",
        ...props
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default PageTitle;
