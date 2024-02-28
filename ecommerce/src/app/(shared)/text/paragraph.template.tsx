import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const Paragraph = ({
    children,
    props,
    margin,
    inline
}: {
    children?: ReactNode;
    props?: TypographyProps;
    margin?: boolean;
    inline?: boolean;
}) => {
    const paragraphProps: TypographyProps = {
        fontSize: { xs: "0.8rem", sm: "1rem" },
        ...(margin && { marginTop: "0.9rem" }),
        ...(inline && { display: "inline" }),

        ...props
    };

    return <Typography {...paragraphProps}>{children}</Typography>;
};

export default Paragraph;
