import { TypographyProps } from "@mui/material";
import { ReactNode } from "react";
import Paragraph from "./paragraph.template";

const AttentionText = ({
    children,
    props,
    inline
}: {
    children?: ReactNode;
    props?: TypographyProps;
    inline?: boolean;
}) => {
    const attentionTextProps: TypographyProps = {
        color: "primary.main",
        fontWeight: "bold",

        ...(inline && { display: "inline", component: "span" }),

        ...props
    };

    return <Paragraph props={attentionTextProps}>{children}</Paragraph>;
};

export default AttentionText;
