import { CategoryListItem, NextLinkProps } from "@/lib";
import AppCard, { AppCardProps } from "./appCard.template";
import Link from "next/link";
import ProductLink, { ProductLinkProps } from "./text/productLink.template";

const CategoryCard = ({
    category,
    smallText,
    smallImage
}: {
    category: CategoryListItem;
    smallText?: boolean;
    smallImage?: boolean;
}) => {
    const imgLinkProps = (category: CategoryListItem): NextLinkProps => ({
        href: `/catalog/${category.path}`,
        // href: { pathname: "/catalog", query: { category: category.path } },

        style: {
            display: "inline-block",
            // height: smallImage ? "200px" : "310px",
            width: "100%",

            cursor: "pointer"
        }
    });

    const appCardProps = (category: CategoryListItem): AppCardProps => ({
        imageLink: category.image || "",
        cardProps: {
            sx: {
                color: "text.primary",
                height: { xs: "190px", md: "240px" },
                width: { xs: "150px", md: "200px" },

                ":hover": {
                    color: "primary.main"
                }
            }
        },
        cardMediaProps: {
            sx: { height: { xs: "150px", md: "200px" } }
        },
        cardMediaChildren: <Link {...imgLinkProps(category)} />
    });

    const linkProps = (category: CategoryListItem): ProductLinkProps => ({
        url: `/catalog/${category.path}`,
        // url: {
        //     pathname: "/catalog",
        //     query: { category: category.path }
        // },

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
