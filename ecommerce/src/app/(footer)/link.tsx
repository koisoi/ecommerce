"use client";

import { NextLinkProps } from "@/types";
import { Typography, TypographyProps } from "@mui/material";
import Link, { LinkProps } from "next/link";

const FooterLink = ({
    children,
    href
}: {
    children: React.ReactNode;
    href: string;
}) => {
    const linkProps: NextLinkProps = {
        href,
        style: {
            textDecoration: "none"
        }
    };

    const linkTextProps: TypographyProps = {
        color: "text.secondary",
        fontSize: "15px",

        sx: {
            textDecoration: "none",
            display: "inline-flex",
            flexDirection: "row",
            alignContent: "center",

            ":hover": {
                color: "primary.main"
            }
        }
    };

    return (
        <Link {...linkProps}>
            <Typography {...linkTextProps}>{children}</Typography>
        </Link>
    );
};

export default FooterLink;
