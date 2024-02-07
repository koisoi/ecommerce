"use client";

import { NextLinkProps } from "@/lib/types";
import { ShoppingCart } from "@mui/icons-material";
import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    ButtonProps,
    Button,
    CardActionsProps,
    Typography,
    CardProps,
    CardMediaProps,
    SvgIconProps,
    TypographyProps,
    BoxProps,
    Box
} from "@mui/material";
import Link from "next/link";
import { getProductImageLink } from "../../../lib/functions/category/getProductImageLink";
import Price from "../price.template";
import { InstantBuyButton, ShoppingCartButton } from "../buyButtons.template";

const ProductCard = ({
    imageLink,
    title,
    articul,
    price,
    discount,
    newProduct,
    sale,
    recommended
}: {
    imageLink: string;
    title: string;
    articul: string;
    price: string;
    discount?: number;
    newProduct?: boolean;
    sale?: boolean;
    recommended?: boolean;
}) => {
    imageLink = getProductImageLink(imageLink);

    const cardProps: CardProps = {
        sx: {
            width: "100%",
            minHeight: "410px",

            boxShadow: "none",
            border: "1px solid",
            borderColor: "divider",

            ":hover": {
                boxShadow: "0 4px 15px rgba(153, 153, 153, 0.3)"
            }
        }
    };

    const imageLinkProps: NextLinkProps = {
        href: "#",

        style: {
            display: "inline-block",
            height: "310px",
            width: "100%",

            cursor: "pointer"
        }
    };

    const cardMediaProps: CardMediaProps = {
        image: imageLink,

        component: "div",

        sx: {
            width: "100%",
            height: "310px",
            position: "relative",

            // pointerEvents: "none",

            backgroundSize: "contain"
        }
    };

    // const favoriteButtonProps: IconButtonProps = {
    //     disableRipple: true,
    //     disableFocusRipple: true,

    //     sx: {
    //         position: "absolute",
    //         top: "10px",
    //         right: "10px",
    //         padding: "0",

    //         color: "text.disabled",

    //         ":hover": {
    //             color: "primary.main"
    //         }
    //     }
    // };

    // const favoriteIconProps: SvgIconProps = {
    //     fontSize: "inherit"
    // };

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
        href: "#",
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
        <Card {...cardProps}>
            <CardMedia {...cardMediaProps}>
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
                {/* TODO: вынести в переиспользуемый компонент + заголовки */}
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
