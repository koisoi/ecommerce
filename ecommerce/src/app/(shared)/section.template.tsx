import { Box, BoxProps } from "@mui/material";
import { ReactNode } from "react";

const SectionContainer = ({ children }: { children?: ReactNode[] }) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "2rem"
    };

    const sectionProps: BoxProps = {
        component: "section"
    };

    return (
        <Box {...wrapperProps}>
            {children?.map((el, i) => (
                <Box key={i} {...sectionProps}>
                    {el}
                </Box>
            ))}
        </Box>
    );
};

export default SectionContainer;
