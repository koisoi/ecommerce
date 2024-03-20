import { Breadcrumb, NextLinkProps, landingConfig } from "@/lib";
import {
    Breadcrumbs,
    BreadcrumbsProps,
    Typography,
    TypographyProps
} from "@mui/material";
import Link from "next/link";
import { BreadcrumbList, WithContext } from "schema-dts";

const BreadcrumbsTemplate = ({
    linksArray,
    lastLink
}: {
    linksArray: Breadcrumb[];
    lastLink?: boolean;
}) => {
    const baseUrl =
        typeof window === "undefined"
            ? landingConfig.url
            : window.location.hostname;

    const schema: WithContext<BreadcrumbList> = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: linksArray.map((link, i) => ({
            "@type": "ListItem",
            name: link.title,
            position: i + 1,
            item: {
                "@type": "Thing",
                "@id": baseUrl + link.link
            }
        }))
    };

    const breadcrumbsProps: BreadcrumbsProps = {
        sx: {
            fontSize: "1rem",
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
        <>
            <script
                // id={`breadcrumbs-ld-json-${
                //     linksArray[linksArray.length - 1].title
                // }`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema)
                }}
                // strategy="beforeInteractive"
            />

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
        </>
    );
};

export default BreadcrumbsTemplate;
