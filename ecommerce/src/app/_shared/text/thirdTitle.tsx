import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const ThirdTitle = ({
    children,
    props
}: {
    children?: ReactNode;
    props?: TypographyProps;
}) => {
    const titleProps: TypographyProps = {
        component: "h3",

        fontSize: { xs: "1.2rem", sm: "1.5rem" },
        fontWeight: "bold",
        paddingY: "0.5rem",

        color: "text.dark",
        ...props
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default ThirdTitle;
