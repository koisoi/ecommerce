import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const Paragraph = ({
    children,
    props,
    inline
}: {
    children?: ReactNode;
    props?: TypographyProps;
    inline?: boolean;
}) => {
    const paragraphProps: TypographyProps = {
        fontSize: "1rem",
        ...(inline && { display: "inline" }),

        sx: {
            "& + &": {
                marginTop: "0.5rem"
            },

            "ol + &": {
                marginTop: "0.5rem"
            },

            "ul + &": {
                marginTop: "0.5rem"
            }
        },

        ...props
    };

    return <Typography {...paragraphProps}>{children}</Typography>;
};

export default Paragraph;
