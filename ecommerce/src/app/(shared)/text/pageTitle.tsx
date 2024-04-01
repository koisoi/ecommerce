import { landingConfig } from "@/lib";
import {
    Box,
    BoxProps,
    Divider,
    DividerProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { ReactNode } from "react";

const PageTitle = ({
    children,
    props,
    noDivider
}: {
    children?: ReactNode;
    props?: TypographyProps;
    noDivider?: boolean;
}) => {
    const wrapperProps: BoxProps = {
        marginBottom: "1.5rem"
    };

    const titleProps: TypographyProps = {
        component: "h1",

        fontSize: "2rem",
        fontWeight: "bolder",
        lineHeight: { xs: 1, sm: 1.2 },
        maxWidth: "100vw",

        color: "text.dark",
        ...props
    };

    const dividerProps: DividerProps = {
        sx: {
            marginTop: "0.7rem"
        }
    };

    return (
        <Box {...wrapperProps}>
            <Typography {...titleProps}>{children}</Typography>
            {!noDivider && <Divider {...dividerProps} />}
        </Box>
    );
};

export default PageTitle;
