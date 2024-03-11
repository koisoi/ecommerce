import { CategoryListItem } from "@/lib";
import AppCard, { AppCardProps } from "./appCard.template";
import ProductLink, { ProductLinkProps } from "./text/productLink.template";
import { default as NextLink } from "next/link";
import { Link, LinkProps } from "@mui/material";
import { landingConfig } from "@/lib/data/config";

const CategoryCard = ({ category }: { category: CategoryListItem }) => {
    const imgLinkProps = (category: CategoryListItem): LinkProps => ({
        component: NextLink,
        href: `/catalog/${category.path}`,

        sx: {
            display: "inline-block",
            height: { xs: "140px", md: "200px" },
            width: "100%",

            cursor: "pointer"
        }
    });

    const appCardProps = (category: CategoryListItem): AppCardProps => ({
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
    });

    const linkProps = (category: CategoryListItem): ProductLinkProps => ({
        url: `/catalog/${category.path}`,

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
