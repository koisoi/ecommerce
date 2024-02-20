import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const SecondTitle = ({
    children,
    props
}: {
    children?: ReactNode;
    props?: TypographyProps;
}) => {
    const titleProps: TypographyProps = {
        fontSize: { xs: "1.2rem", sm: "1.5rem" },
        fontWeight: "bold",
        paddingY: "0.5rem",

        color: "text.primary",
        ...props
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default SecondTitle;
