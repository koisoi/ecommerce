"use client";

import { Typography } from "@mui/material";
import { ReactNode } from "react";

const FooterTitle = ({ children }: { children: ReactNode }) => {
    return (
        <Typography color="text.primary" fontSize="19px" fontWeight="bold">
            {children}
        </Typography>
    );
};

export default FooterTitle;
