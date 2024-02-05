"use client";

import { NextLinkProps } from "@/types";
import { Favorite, ShoppingCart } from "@mui/icons-material";
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
    Box,
    IconButtonProps,
    IconButton
} from "@mui/material";
import Link from "next/link";

const ProductCard = ({
    imageLink,
    title,
    price,
    productLink,
    discount,
    newProduct,
    sale
}: {
    imageLink: string;
    title: string;
    price: string;
    productLink: string;
    discount?: number;
    newProduct?: boolean;
    sale?: boolean;
}) => {
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

    const favoriteButtonProps: IconButtonProps = {
        disableRipple: true,
        disableFocusRipple: true,

        sx: {
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "0",

            color: "text.disabled",

            ":hover": {
                color: "primary.main"
            }
        }
    };

    const favoriteIconProps: SvgIconProps = {
        fontSize: "inherit"
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
            backgroundColor: "#FC0",
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

    const actionRow: CardActionsProps = {
        sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            paddingX: "16px"
        }
    };

    const shoppingCartButtonProps: ButtonProps = {
        size: "small",
        variant: "outlined",
        color: "primary",

        disableRipple: true,

        sx: {
            textTransform: "none",

            ":hover": {
                backgroundColor: "primary.main",
                color: "white"
            }
        }
    };

    const shoppingCartIconProps: SvgIconProps = {
        fontSize: "inherit",
        sx: {
            fontSize: "0.9rem"
        }
    };

    const buttonTextProps: TypographyProps = {
        fontSize: "0.82rem",
        paddingRight: "4px"
    };

    return (
        <Card {...cardProps}>
            <CardMedia {...cardMediaProps}>
                <Link {...imageLinkProps} />
                <Box {...badgeWrapperProps}>
                    {newProduct && <Box {...newProductBadgeProps}>Новинка</Box>}
                    {sale && <Box {...saleBadgeProps}>Распродажа</Box>}
                </Box>
                <IconButton {...favoriteButtonProps}>
                    <Favorite {...favoriteIconProps} />
                </IconButton>
                {discount && <Box {...discountBadgeProps}>-{discount}%</Box>}
            </CardMedia>
            <CardContent>
                <Link {...linkProps}>
                    <Typography {...titleProps}>{title}</Typography>
                </Link>
            </CardContent>
            <CardActions {...actionRow}>
                {/* вынести в переиспользуемый компонент + заголовки */}
                <Typography fontWeight="bold">{price} ₽</Typography>
                <Button {...shoppingCartButtonProps}>
                    <Typography {...buttonTextProps}>В корзину</Typography>
                    <ShoppingCart {...shoppingCartIconProps} />
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
