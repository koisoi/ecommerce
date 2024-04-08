import { PageData } from "@/lib";
import { LinkProps, Link } from "@mui/material";
import { default as NextLink } from "next/link";

const CatalogSeriesTemplate = ({
    page,
    selected
}: {
    page: PageData;
    selected?: boolean;
}) => {
    const linkProps: LinkProps = {
        component: NextLink,
        href: page.url,

        sx: {
            color: "accentAlt.contrastText",
            backgroundColor: "accentAlt.main",
            textDecoration: "none",
            pointerEvents: selected ? "none" : "all",
            padding: "0.25em 0.4em",
            borderRadius: "0.37rem"
        }
    };

    return <Link {...linkProps}>{page.title}</Link>;
};

export default CatalogSeriesTemplate;
