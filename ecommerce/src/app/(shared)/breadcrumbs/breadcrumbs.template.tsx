"use client";

import { NextLinkProps } from "@/lib";
import { Breadcrumbs, Typography, TypographyProps } from "@mui/material";
import Link from "next/link";

const BreadcrumbsTemplate = ({
    linksArray
}: {
    linksArray: { link: string; title: string }[];
}) => {
    const linkProps: Partial<NextLinkProps> = {
        style: {
            textDecoration: "none"
        }
    };

    const textProps: TypographyProps = {
        display: "inline",

        sx: {
            textDecoration: "none"
        }
    };

    const navTextProps: TypographyProps = {
        ...textProps,
        color: "primary.main",

        sx: {
            ...textProps.sx,

            ":hover": {
                color: "primary.dark"
            }
        }
    };

    const locationTextProps: TypographyProps = {
        ...textProps,
        color: "text.disabled"
    };

    return (
        <Breadcrumbs>
            <Link href="/" {...linkProps}>
                <Typography {...navTextProps}>Главная</Typography>
            </Link>
            {linksArray.slice(0, linksArray.length - 1).map((el, i) => (
                <Link href={el.link} key={i} {...linkProps}>
                    <Typography {...navTextProps}>{el.title}</Typography>
                </Link>
            ))}
            <Typography {...locationTextProps}>
                {linksArray[linksArray.length - 1].title}
            </Typography>
        </Breadcrumbs>
    );
};

export default BreadcrumbsTemplate;
