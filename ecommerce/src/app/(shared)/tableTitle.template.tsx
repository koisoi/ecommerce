import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

const TableTitle = ({ children }: { children?: ReactNode }) => {
    const titleProps: TypographyProps = {
        fontSize: { xs: "0.8rem", sm: "1rem" },
        fontWeight: "bold"
    };

    return <Typography {...titleProps}>{children}</Typography>;
};

export default TableTitle;
