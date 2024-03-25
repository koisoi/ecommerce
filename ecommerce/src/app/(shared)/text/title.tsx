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
        component: "h2",

        fontSize: "1.5rem",
        lineHeight: 1,
        fontWeight: "bold",
        marginBottom: "0.7rem",

        color: "text.dark",
        ...props
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default Title;
