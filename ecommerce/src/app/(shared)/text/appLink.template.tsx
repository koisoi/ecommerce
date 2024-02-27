import { NextLinkProps } from "@/lib";
import { Typography, TypographyProps } from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
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
    const linkProps: NextLinkProps = {
        href: href || "#",
        style: {
            textDecoration: "none"
        }
    };

    const linkTextProps: TypographyProps = {
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

    return (
        <Link {...linkProps}>
            <Typography {...linkTextProps}>{children}</Typography>
        </Link>
    );
};

export default AppLink;
