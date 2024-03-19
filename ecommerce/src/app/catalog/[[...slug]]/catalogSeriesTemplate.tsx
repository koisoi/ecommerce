import Paragraph from "@/app/(shared)/text/paragraph";
import { NextLinkProps, PageData } from "@/lib";
import { TypographyProps } from "@mui/material";
import Link from "next/link";

const CatalogSeriesTemplate = ({
    page,
    selected
}: {
    page: PageData;
    selected?: boolean;
}) => {
    const linkProps: NextLinkProps = {
        href: page.url,

        style: {
            textDecoration: "none",
            pointerEvents: selected ? "none" : "all"
        }
    };

    const textProps: TypographyProps = {
        color: selected ? "text.primary" : "primary.main",

        sx: {
            textDecoration: "none",
            lineHeight: { xs: "1", md: "1.5" },

            ...(!selected && {
                ":hover": {
                    color: "primary.dark"
                }
            })
        }
    };

    return (
        <Link {...linkProps}>
            <Paragraph props={textProps}>{page.title}</Paragraph>
        </Link>
    );
};

export default CatalogSeriesTemplate;
