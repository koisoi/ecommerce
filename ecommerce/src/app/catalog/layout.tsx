import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";
import Breadcrumbs from "../(shared)/breadcrumbs/breadcrumbs";

const CategoryLayout = ({ children }: { children: ReactNode }) => {
    const wrapperProps: BoxProps = {
        maxWidth: "1400px",
        width: "100%",

        fontSize: "15px"
    };

    return (
        <Box {...wrapperProps}>
            <Breadcrumbs />
            {children}
        </Box>
    );
};

export default CategoryLayout;
