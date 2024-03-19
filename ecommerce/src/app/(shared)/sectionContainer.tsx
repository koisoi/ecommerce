import { Box, BoxProps } from "@mui/material";
import React, { ReactNode } from "react";

const SectionContainer = ({
    children,
    level = 0
}: {
    children?: ReactNode;
    level?: number;
}) => {
    let wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column"
    };

    switch (level) {
        case 1:
            wrapperProps.gap = "1rem";
            break;

        case 2:
            wrapperProps.gap = "0.5rem";
            break;

        default:
            wrapperProps.gap = "2rem";
            break;
    }

    const sectionProps: BoxProps = {
        component: "section"
    };

    return (
        <Box {...wrapperProps}>
            {/* {children?.map((el, i) => (
                <Box key={i} {...sectionProps}>
                    {el}
                </Box>
            ))} */}
            {React.Children.map(children, (el, i) => (
                <Box key={i} {...sectionProps}>
                    {el}
                </Box>
            ))}
        </Box>
    );
};

export default SectionContainer;
