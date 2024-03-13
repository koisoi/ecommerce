import { CategoryListItem, PageData } from "@/lib";
import AppCard, { AppCardProps } from "./appCard.template";
import ProductLink, { ProductLinkProps } from "./text/productLink.template";
import { default as NextLink } from "next/link";
import { Link, LinkProps } from "@mui/material";
import { landingConfig } from "@/lib/data/config";

const CategoryCard = ({ category }: { category: PageData }) => {
    const imgLinkProps = (category: PageData): LinkProps => ({
        component: NextLink,
        href: category.url,

        sx: {
            display: "inline-block",
            height: { xs: "100px", md: "140px" },
            width: "100%",

            cursor: "pointer"
        }
    });

    const appCardProps = (category: PageData): AppCardProps => {
        return {
            imageLink: category.image || "",
            cardProps: {
                sx: {
                    color: "text.primary",
                    height: { xs: "155px", sm: "unset" },
                    width: { xs: "130px", sm: "150px" },

                    ":hover": {
                        color: "primary.main"
                    },

                    border: {
                        xs: `1px solid ${landingConfig.colors.divider}`,
                        sm: "none"
                    }
                }
            },
            cardMediaProps: {
                sx: {
                    height: { xs: "100px", md: "140px" },
                    backgroundSize: { xs: "100px", md: "140px" }
                }
            },
            cardMediaChildren: <Link {...imgLinkProps(category)} />
        };
    };

    const linkProps = (category: PageData): ProductLinkProps => ({
        url: category.url,

        props: {
            fontSize: "1rem",
            fontWeight: "bold",
            color: "inherit",

            padding: "0.5rem",
            textAlign: "center",

            sx: {
                transition: "0.2s"
            }
        }
    });

    return (
        <AppCard {...appCardProps(category)}>
            <ProductLink {...linkProps(category)}>{category.title}</ProductLink>
        </AppCard>
    );
};

export default CategoryCard;
