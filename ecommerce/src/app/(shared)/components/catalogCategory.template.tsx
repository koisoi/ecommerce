"use client";

import { NextLinkProps } from "@/types";
import { Typography, TypographyProps } from "@mui/material";
import Link from "next/link";

const CatalogSubategory = ({
    children,
    amount
}: {
    children: React.ReactNode;
    amount: number;
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
                <Typography {...supProps}>
                    <sup>{amount}</sup>
                </Typography>
            </Typography>
        </Link>
    );
};

export default CatalogSubategory;
