"use client";

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
        href: { pathname: "/catalog", query: { category: category.path } },

        style: {
            display: "inline-block",
            height: smallImage ? "200px" : "310px",
            width: "100%",

            cursor: "pointer"
        }
    });

    const appCardProps = (category: CategoryListItem): AppCardProps => ({
        imageLink: category.image || "",
        cardProps: {
            sx: {
                color: "text.primary",
                height: "100%",

                ":hover": {
                    color: "primary.main"
                }
            }
        },
        cardMediaProps: {
            sx: { ...(smallImage && { height: "200px" }) }
        },
        cardMediaChildren: <Link {...imgLinkProps(category)} />
    });

    const linkProps = (category: CategoryListItem): ProductLinkProps => ({
        url: {
            pathname: "/catalog",
            query: { category: category.path }
        },

        props: {
            fontSize: smallText ? "1.05rem" : "1.3rem",
            fontWeight: "bold",
            color: "inherit",

            padding: "10px",
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
