import { LinkProps, Link as MUILink, Typography } from "@mui/material";
import Link from "next/link";

const CatalogCategory = ({
    children,
    amount,
}: {
    children: React.ReactNode;
    amount: number;
}) => {
    const navLinkProps: LinkProps = {
        color: "primary.main",

        sx: {
            textDecoration: "none",

            ":hover": {
                color: "primary.dark",
            },
        },
    };

    return (
        <Link href="#" style={{ textDecoration: "none" }}>
            <MUILink {...navLinkProps}>
                {children}
                <Typography color="text.disabled" display="inline">
                    <sup>{amount}</sup>
                </Typography>
            </MUILink>
        </Link>
    );
};

export default CatalogCategory;
