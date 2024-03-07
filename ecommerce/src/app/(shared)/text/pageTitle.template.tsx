import { Divider, Typography, TypographyProps } from "@mui/material";
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
    const titleProps: TypographyProps = {
        fontSize: "2.5rem",
        fontWeight: "bolder",
        marginBottom: "1.3rem",
        lineHeight: { xs: 1, sm: 1.2 },

        color: "text.primary",
        ...props
    };

    return (
        <>
            <Typography {...titleProps}>
                {children}
                {!noDivider && <Divider />}
            </Typography>
        </>
    );
};

export default PageTitle;
