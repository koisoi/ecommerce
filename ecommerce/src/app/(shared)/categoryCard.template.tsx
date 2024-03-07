import { CategoryListItem } from "@/lib";
import AppCard, { AppCardProps } from "./appCard.template";
import ProductLink, { ProductLinkProps } from "./text/productLink.template";
import { default as NextLink } from "next/link";
import { Link, LinkProps } from "@mui/material";

const CategoryCard = ({ category }: { category: CategoryListItem }) => {
    const imgLinkProps = (category: CategoryListItem): LinkProps => ({
        component: NextLink,
        href: `/catalog/${category.path}`,
        // href: { pathname: "/catalog", query: { category: category.path } },

        sx: {
            display: "inline-block",
            // height: smallImage ? "200px" : "310px",
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
                height: { xs: "170px", sm: "180px", md: "250px" },
                width: { xs: "140px", md: "200px" },

                ":hover": {
                    color: "primary.main"
                }
            }
        },
        cardMediaProps: {
            sx: {
                height: { xs: "130px", md: "200px" },
                backgroundSize: { xs: "100px", md: "200px" }
            }
        },
        cardMediaChildren: <Link {...imgLinkProps(category)} />
    });

    const linkProps = (category: CategoryListItem): ProductLinkProps => ({
        url: `/catalog/${category.path}`,

        props: {
            fontSize: /*smallText ? "0.9rem" :*/ "1rem",
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
