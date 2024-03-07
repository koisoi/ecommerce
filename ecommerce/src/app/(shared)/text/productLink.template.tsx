import { Link, LinkProps, Typography, TypographyProps } from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";
import { default as NextLink } from "next/link";

export type ProductLinkProps = {
    url: Url;
    children?: ReactNode;
    props?: TypographyProps;
};

const ProductLink = ({ url, children, props }: ProductLinkProps) => {
    const linkProps: LinkProps = {
        component: NextLink,
        // @ts-ignore
        href: url,

        fontSize: { xs: "1.3rem", md: "1rem" },
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

    return <Link {...linkProps}>{children}</Link>;
};

export default ProductLink;
