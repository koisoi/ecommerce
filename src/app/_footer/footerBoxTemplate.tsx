import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";
import { FooterTitle } from "../_shared/footerTitle";

export const FooterBoxTemplate = ({
    title,
    children,
    outerBoxProps,
    innerBoxProps
}: {
    title: string;
    children: ReactNode;
    outerBoxProps?: BoxProps;
    innerBoxProps?: BoxProps;
}) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.5rem", md: "1rem" },
        maxWidth: "250px",

        fontSize: "inherit",

        ...outerBoxProps
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5px",

        ...innerBoxProps
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>{title}</FooterTitle>
            <Box {...innerWrapperProps}>{children}</Box>
        </Box>
    );
};
