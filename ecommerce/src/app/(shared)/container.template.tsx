import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";
import Breadcrumbs from "./breadcrumbs/breadcrumbs";

const Container = ({ children }: { children?: ReactNode }) => {
    const wrapperProps: BoxProps = {
        width: "100%",
        maxWidth: "1400px",
        minHeight: "100%",
        fontSize: "15px"
    };

    return (
        <Box {...wrapperProps}>
            <main style={{ width: "100%" }}>
                <Breadcrumbs />

                {children}
            </main>
        </Box>
    );
};

export default Container;
