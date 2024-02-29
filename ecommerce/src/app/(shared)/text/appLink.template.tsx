import { Link, LinkProps, Typography, TypographyProps } from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";
import { default as NextLink } from "next/link";
import { ReactNode } from "react";

const AppLink = ({
    children,
    href,
    footer,
    props
}: {
    children?: ReactNode;
    href?: Url;
    footer?: boolean;
    props?: TypographyProps;
}) => {
    const linkProps: LinkProps = {
        component: NextLink,
        // @ts-ignore
        href: href || "#",

        color: footer ? "text.secondary" : "text.primary",
        fontSize: "inherit",

        ...props,

        sx: {
            textDecoration: "none",
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",

            ":hover": {
                color: "primary.main"
            },

            ...props?.sx
        }
    };

    // const linkTextProps: TypographyProps = {

    // };

    return <Link {...linkProps}>{children}</Link>;
};

export default AppLink;
