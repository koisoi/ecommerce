import { Typography } from "@mui/material";
import React from "react";

const FooterTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <Typography
            color="text.primary"
            fontSize="19px"
            fontWeight="bold"
            gutterBottom
        >
            {children}
        </Typography>
    );
};

export default FooterTitle;
