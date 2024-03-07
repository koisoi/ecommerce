import { Box, BoxProps } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
    const wrapperProps: BoxProps = {
        component: "main",

        width: "100%",
        maxWidth: "1400px",
        minHeight: "100%"
        // fontSize: "15px"
    };

    return <Box {...wrapperProps}>{children}</Box>;
};

export default Container;
