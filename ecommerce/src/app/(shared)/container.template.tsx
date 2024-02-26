import { Box, BoxProps } from "@mui/material";
import { CSSProperties, ReactNode } from "react";
import Breadcrumbs from "./breadcrumbs/breadcrumbs";

const Container = ({ children }: { children?: ReactNode }) => {
    const wrapperProps: BoxProps = {
        width: "100%",
        maxWidth: "1400px",
        minHeight: "100%",
        fontSize: "15px"
    };

    const bodyStyle: CSSProperties = {
        width: "100%",
        height: "100%"
    };

    return (
        <Box {...wrapperProps}>
            <main style={bodyStyle}>
                <Breadcrumbs />
                {children}
            </main>
        </Box>
    );
};

export default Container;
