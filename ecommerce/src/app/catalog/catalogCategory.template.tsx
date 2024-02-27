import { NextLinkProps } from "@/lib";
import { Typography, TypographyProps } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

const CatalogSubcategory = ({
    children,
    amount,
    seriesAlias,
    categoryAlias,
    selected
}: {
    children: ReactNode;
    amount?: number;
    seriesAlias: string;
    categoryAlias: string;
    selected?: boolean;
}) => {
    const linkProps: NextLinkProps = {
        href: {
            pathname: "/catalog",
            query: { category: categoryAlias, series: seriesAlias }
        },

        style: {
            textDecoration: "none",
            pointerEvents: selected ? "none" : "all"
        }
    };

    const textProps: TypographyProps = {
        color: selected ? "text.primary" : "primary.main",

        sx: {
            textDecoration: "none",

            ...(!selected && {
                ":hover": {
                    color: "primary.dark"
                }
            })
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
