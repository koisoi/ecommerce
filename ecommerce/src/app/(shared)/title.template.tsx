import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const Title = ({
    children,
    props
}: {
    children?: ReactNode;
    props?: TypographyProps;
}) => {
    const titleProps: TypographyProps = {
        fontSize: { xs: "1.5rem", sm: "2rem" },
        fontWeight: "bold",
        paddingY: "0.5rem",

        color: "text.primary",
        ...props
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default Title;
