"use client";

import { NextLinkProps } from "@/lib";
import { Typography, TypographyProps } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

const CatalogSubcategory = ({
    children,
    amount,
    seriesAlias,
    categoryAlias
}: {
    children: ReactNode;
    amount?: number;
    seriesAlias: string;
    categoryAlias: string;
}) => {
    const linkProps: NextLinkProps = {
        href: {
            pathname: "/catalog",
            query: { category: categoryAlias, series: seriesAlias }
        },
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

export default CatalogSubcategory;
