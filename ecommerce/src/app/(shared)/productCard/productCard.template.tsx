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
import { InstantBuyButtonTemplate } from "../buyButtons/buyButtons.template";
import { NextLinkProps, useThemeColors } from "@/lib";
import Price from "../price.template";
import { Url } from "next/dist/shared/lib/router/router";
import ProductLink from "../productLink.template";
import ShoppingCartButton from "../buyButtons/buyButtons";
import { CartItem } from "@/lib/types/cart";

export type ProductCardProps = {
    cartItem: CartItem;
    discount?: number;
    newProduct?: boolean;
    sale?: boolean;
    recommended?: boolean;
    cardProps?: CardProps;
    cardMediaProps?: CardMediaProps;
};

const ProductCard = ({
    discount,
    newProduct,
    sale,
    recommended,
    cardProps,
    cardMediaProps,
    cartItem
}: ProductCardProps) => {
    const colors = useThemeColors();

    const initialCardProps: CardProps = {
        ...cardProps,

        sx: {
            width: "100%",

            boxShadow: "none",
            border: "1px solid",
            borderColor: "divider",

            ":hover": {
                boxShadow: "0 0 15px 1px " + colors.divider
            },

            ...cardProps?.sx
        }
    };

    const imageLinkProps: NextLinkProps = {
        href: cartItem.url,

        style: {
            display: "inline-block",
            height: "310px",
            width: "100%",

            cursor: "pointer"
        }
    };

    const initialCardMediaProps: CardMediaProps = {
        image: cartItem.imgLink,

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
                <ProductLink url={cartItem.url}>{cartItem.title}</ProductLink>
                <Typography {...articleTextProps}>
                    Артикул: {cartItem.articul}
                </Typography>
            </CardContent>
            <CardActions {...actionRowProps}>
                <Price
                    variant="small"
                    price={cartItem.price}
                    props={{ flexGrow: 1 }}
                />
                <InstantBuyButtonTemplate
                    props={buttonProps}
                    onClick={() => {}}
                />
                <ShoppingCartButton props={buttonProps} item={cartItem} />
            </CardActions>
        </Card>
    );
};

export default ProductCard;
