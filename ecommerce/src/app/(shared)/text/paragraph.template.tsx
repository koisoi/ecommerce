import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const Paragraph = ({
    children,
    props,
    margin
}: {
    children?: ReactNode;
    props?: TypographyProps;
    margin?: boolean;
}) => {
    const paragraphProps: TypographyProps = {
        fontSize: { xs: "0.8rem", sm: "1rem" },
        ...(margin && { marginTop: "0.9rem" }),

        ...props
    };

    return <Typography {...paragraphProps}>{children}</Typography>;
};

export default Paragraph;
