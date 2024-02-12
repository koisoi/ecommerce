"use client";

import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    ButtonProps,
    CardActionsProps,
    Typography,
    CardProps,
    CardMediaProps,
    TypographyProps,
    BoxProps,
    Box
} from "@mui/material";
import Link from "next/link";
import { getProductImageLink } from "../../../lib/functions/category/getProductImageLink";
import { InstantBuyButton, ShoppingCartButton } from "../buyButtons.template";
import { NextLinkProps } from "@/lib";
import Price from "../price.template";
import { Url } from "next/dist/shared/lib/router/router";

export type ProductCardProps = {
    imageLink: string;
    title: string;
    articul: string;
    price: string;
    discount?: number;
    newProduct?: boolean;
    sale?: boolean;
    recommended?: boolean;
    productLink: Url;
    cardProps?: CardProps;
    cardMediaProps?: CardMediaProps;
};

const ProductCard = ({
    imageLink,
    title,
    articul,
    price,
    discount,
    newProduct,
    sale,
    recommended,
    cardProps,
    cardMediaProps,
    productLink
}: ProductCardProps) => {
    imageLink = getProductImageLink(imageLink);

    const initialCardProps: CardProps = {
        ...cardProps,

        sx: {
            width: "100%",

            boxShadow: "none",
            border: "1px solid",
            borderColor: "divider",

            ":hover": {
                boxShadow: "0 4px 15px rgba(153, 153, 153, 0.3)"
            },

            ...cardProps?.sx
        }
    };

    const imageLinkProps: NextLinkProps = {
        href: productLink,

        style: {
            display: "inline-block",
            height: "310px",
            width: "100%",

            cursor: "pointer"
        }
    };

    const initialCardMediaProps: CardMediaProps = {
        image: imageLink,

        component: "div",

        ...cardMediaProps,

        sx: {
            width: "100%",
            height: "310px",
            position: "relative",

            backgroundSize: "contain",

            ...cardMediaProps?.sx
        }
    };

    const articleTextProps: TypographyProps = {
        fontSize: "0.9rem",
        color: "text.disabled"
    };

    const badgeWrapperProps: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",

        position: "absolute",
        top: "10px",
        left: "10px",

        fontSize: "75%"
    };

    const badgeProps: BoxProps = {
        display: "inline-block",
        padding: "0.25em 0.4em",

        lineHeight: 1,
        fontWeight: 600,
        textAlign: "center",
        whiteSpace: "nowrap",

        borderRadius: "0.37rem",

        sx: {
            verticalAlign: "baseline"
        }
    };

    const newProductBadgeProps: BoxProps = {
        ...badgeProps,
        sx: {
            backgroundColor: "#eee",
            color: "text.primary"
        }
    };

    const saleBadgeProps: BoxProps = {
        ...badgeProps,
        sx: {
            backgroundColor: "primary.main",
            color: "white"
        }
    };

    const recommendedBadgeProps: BoxProps = {
        ...badgeProps,
        sx: {
            backgroundColor: "secondary.main",
            color: "white"
        }
    };

    const discountBadgeProps: BoxProps = {
        display: "inline-block",
        position: "absolute",
        bottom: 0,
        left: 0,

        padding: "2px 12px 1px",
        borderRadius: "0 20px 20px 0",
        letterSpacing: "1px",
        fontSize: "13px",

        textAlign: "center",

        sx: {
            backgroundColor: "primary.main",
            color: "white"
        }
    };

    const linkProps: NextLinkProps = {
        href: productLink,
        style: {
            textDecoration: "none"
        }
    };

    const titleProps: TypographyProps = {
        fontSize: "15px",
        color: "text.primary",

        sx: {
            textDecoration: "none",

            ":hover": {
                color: "primary.main"
            }
        }
    };

    const actionRowProps: CardActionsProps = {
        sx: {
            display: "flex",
            flexDirection: {
                xs: "column",
                smd: "row",
                md: "column",
                xl: "row"
            },
            justifyContent: "space-between",
            rowGap: "5px",

            paddingX: "16px"
        }
    };

    const buttonsRowProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: "5px"
    };

    const buttonProps: ButtonProps = {
        sx: {
            flexGrow: 1,
            width: {
                xs: "100%",
                smd: "unset",
                md: "100%",
                xl: "unset"
            }
        }
    };

    return (
        <Card {...initialCardProps}>
            <CardMedia {...initialCardMediaProps}>
                <Link {...imageLinkProps} />
                <Box {...badgeWrapperProps}>
                    {newProduct && <Box {...newProductBadgeProps}>Новинка</Box>}
                    {sale && <Box {...saleBadgeProps}>Распродажа</Box>}
                    {recommended && (
                        <Box {...recommendedBadgeProps}>Рекомендуем</Box>
                    )}
                </Box>
                {discount && <Box {...discountBadgeProps}>-{discount}%</Box>}
            </CardMedia>
            <CardContent>
                <Link {...linkProps}>
                    <Typography {...titleProps}>{title}</Typography>
                </Link>
                <Typography {...articleTextProps}>
                    Артикул: {articul}
                </Typography>
            </CardContent>
            <CardActions {...actionRowProps}>
                <Price variant="small" price={price} props={{ flexGrow: 1 }} />
                <InstantBuyButton props={buttonProps} />
                <ShoppingCartButton props={buttonProps} />
            </CardActions>
        </Card>
    );
};

export default ProductCard;
