import { NextLinkProps } from "@/lib";
import { Breadcrumb } from "@/lib/types/breadcrumbs";
import {
    Breadcrumbs,
    BreadcrumbsProps,
    Typography,
    TypographyProps
} from "@mui/material";
import Link from "next/link";

const AppBreadcrumbs = ({
    linksArray,
    lastLink
}: {
    linksArray: Breadcrumb[];
    lastLink?: boolean;
}) => {
    const breadcrumbsProps: BreadcrumbsProps = {
        sx: {
            fontSize: { xs: "0.8rem", sm: "1rem" },
            marginBottom: "0.8rem"
        }
    };

    const linkProps: Partial<NextLinkProps> = {
        style: {
            textDecoration: "none",
            fontSize: "inherit"
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

            fontSize: "inherit",
            ":hover": {
                color: "primary.dark"
            }
        }
    };

    const locationTextProps: TypographyProps = {
        ...textProps,
        color: "text.disabled",
        fontSize: "inherit"
    };

    if (!linksArray.length) return null;

    return (
        <Breadcrumbs {...breadcrumbsProps}>
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

export default AppBreadcrumbs;
