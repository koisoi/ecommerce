import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const TableTitle = ({
    children,
    props
}: {
    children?: ReactNode;
    props?: TypographyProps;
}) => {
    const titleProps: TypographyProps = {
        fontSize: { xs: "0.8rem", sm: "1rem" },
        fontWeight: "bold",

        ...props
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default TableTitle;
