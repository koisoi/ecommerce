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
        fontSize: "2rem",
        lineHeight: { xs: 1, sm: 1.5 },
        fontWeight: "bold",
        paddingY: "0.5rem",

        color: "text.primary",
        ...props
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default Title;
