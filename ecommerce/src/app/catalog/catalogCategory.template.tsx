"use client";

import { NextLinkProps } from "@/lib/types";
import { Typography, TypographyProps } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

const CatalogSubategory = ({
    children,
    amount
}: {
    children: ReactNode;
    amount?: number;
}) => {
    const linkProps: NextLinkProps = {
        href: "#",
        style: {
            textDecoration: "none"
        }
    };

    const textProps: TypographyProps = {
        color: "primary.main",

        sx: {
            textDecoration: "none",

            ":hover": {
                color: "primary.dark"
            }
        }
    };

    const supProps: TypographyProps = {
        color: "text.disabled",
        display: "inline"
    };

    return (
        <Link {...linkProps}>
            <Typography {...textProps}>
                {children}
                {amount ?? (
                    <Typography {...supProps}>
                        <sup>{amount}</sup>
                    </Typography>
                )}
            </Typography>
        </Link>
    );
};

export default CatalogSubategory;
