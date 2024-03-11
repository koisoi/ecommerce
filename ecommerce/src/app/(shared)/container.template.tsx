import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
    const wrapperProps: BoxProps = {
        width: "100%",
        maxWidth: "1400px",
        minHeight: "100%",

        margin: "0 auto"
    };

    return <Box {...wrapperProps}>{children}</Box>;
};

export default Container;
