import { Box, BoxProps, Breadcrumbs } from "@mui/material";
import { ReactNode } from "react";

const Container = ({ children }: { children?: ReactNode }) => {
    const wrapperProps: BoxProps = {
        width: "100%",
        maxWidth: "1400px",
        fontSize: "15px"
    };

    return (
        <Box {...wrapperProps}>
            <Breadcrumbs />
            {children}
        </Box>
    );
};

export default Container;
