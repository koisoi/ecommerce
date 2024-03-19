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
        fontSize: "1rem",
        fontWeight: "bold",

        ...props
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default TableTitle;
