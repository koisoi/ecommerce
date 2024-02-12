"use client";

import { NextLinkProps } from "@/lib";
import { Breadcrumbs, Typography, TypographyProps } from "@mui/material";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

const BreadcrumbsTemplate = ({
    linksArray,
    lastLink
}: {
    linksArray: { link: Url; title: string }[];
    lastLink?: boolean;
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
                <Link key={i} {...linkProps} href={el.link}>
                    <Typography {...navTextProps}>{el.title}</Typography>
                </Link>
            ))}
            {!lastLink && (
                <Typography {...locationTextProps}>
                    {linksArray[linksArray.length - 1].title}
                </Typography>
            )}
            {lastLink && (
                <Link
                    {...linkProps}
                    href={linksArray[linksArray.length - 1].link}
                >
                    <Typography {...navTextProps}>
                        {linksArray[linksArray.length - 1].title}
                    </Typography>
                </Link>
            )}
        </Breadcrumbs>
    );
};

export default BreadcrumbsTemplate;
