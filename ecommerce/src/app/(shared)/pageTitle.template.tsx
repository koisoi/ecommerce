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
        fontSize: { xs: "1.8rem", sm: "2.5rem" },
        fontWeight: "bolder",
        marginBottom: "1rem",

        color: "text.primary",
        ...props
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default PageTitle;
