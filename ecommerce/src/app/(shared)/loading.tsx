import {
    Box,
    BoxProps,
    CircularProgress,
    TypographyProps
} from "@mui/material";
import Title from "./text/title";
import { ReactNode } from "react";

const Loading = ({
    children,
    props
}: {
    children?: ReactNode;
    props?: BoxProps;
}) => {
    const wrapperProps: BoxProps = {
        width: "100%",
        height: "100%",
        flexGrow: 1,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",

        ...props
    };

    const titleProps: TypographyProps = {
        color: "primary.main"
    };

    return (
        <Box {...wrapperProps}>
            <CircularProgress size="5rem" />
            <Title props={titleProps}>{children}</Title>
        </Box>
    );
};

export default Loading;
