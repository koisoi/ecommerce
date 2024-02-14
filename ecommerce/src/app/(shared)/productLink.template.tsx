import { NextLinkProps } from "@/lib";
import { Typography, TypographyProps } from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode } from "react";

const ProductLink = ({
    url,
    children,
    props
}: {
    url: Url;
    children: ReactNode;
    props?: TypographyProps;
}) => {
    const linkProps: NextLinkProps = {
        href: url,
        style: {
            textDecoration: "none"
        }
    };

    const titleProps: TypographyProps = {
        fontSize: "0.95rem",
        color: "text.primary",

        ...props,

        sx: {
            textDecoration: "none",

            ":hover": {
                color: "primary.main"
            },

            ...props?.sx
        }
    };

    return (
        <Link {...linkProps}>
            <Typography {...titleProps}>{children}</Typography>
        </Link>
    );
};

export default ProductLink;
