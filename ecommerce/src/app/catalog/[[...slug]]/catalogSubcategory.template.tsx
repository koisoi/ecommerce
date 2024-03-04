import { NextLinkProps } from "@/lib";
import { Typography, TypographyProps } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

const CatalogSubcategory = ({
    children,
    seriesAlias,
    categoryAlias,
    selected
}: {
    children: ReactNode;
    seriesAlias: string;
    categoryAlias: string;
    selected?: boolean;
}) => {
    const linkProps: NextLinkProps = {
        href: `/catalog/${categoryAlias}/${seriesAlias}`,
        // href: {
        //     pathname: "/catalog",
        //     query: { category: categoryAlias, series: seriesAlias }
        // },

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
            <Typography {...textProps}>{children}</Typography>
        </Link>
    );
};

export default CatalogSubcategory;
