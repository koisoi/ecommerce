import { Link, LinkProps } from "@mui/material";
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
    props?: LinkProps;
}) => {
    const linkProps: LinkProps = {
        component: NextLink,
        // @ts-ignore
        href: href || "#",

        color: footer ? "text.primary" : "link.main",
        fontSize: "inherit",

        ...props,

        sx: {
            textDecoration: "none",
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: { xs: "center", smd: "flex-start" },

            ":hover": {
                color: footer ? "primary.main" : "link.main"
            },

            ...props?.sx
        }
    };

    return <Link {...linkProps}>{children}</Link>;
};

export default AppLink;
