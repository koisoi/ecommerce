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
            flexDirection: "row",
            justifyContent: "space-between",

            paddingX: "16px"
        }
    };

    const buttonsRowProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: "5px",

        width: "100%"
    };

    const buttonProps: ButtonProps = {
        size: "small",
        variant: "outlined",

        disableRipple: true,

        sx: {
            textTransform: "none"
        }
    };

    const instantBuyButtonProps: ButtonProps = {
        ...buttonProps,
        color: "secondary",

        sx: {
            ...buttonProps.sx,

            ":hover": {
                backgroundColor: "secondary.main",
                color: "white"
            }
        }
    };

    const shoppingCartButtonProps: ButtonProps = {
        ...buttonProps,
        color: "primary",

        sx: {
            ...buttonProps.sx,

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

    const priceProps: TypographyProps = {
        display: "inline-block",
        minWidth: "max-content",

        fontWeight: "bold"
    };

    const buttonTextProps: TypographyProps = {
        fontSize: "0.82rem"
    };

    const cartButtonTextProps: TypographyProps = {
        ...buttonTextProps,
        paddingRight: "4px"
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
                {/* <IconButton {...favoriteButtonProps}>
                    <Favorite {...favoriteIconProps} />
                </IconButton> */}
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
                <Typography {...priceProps}>{price} ₽</Typography>
                <Box {...buttonsRowProps}>
                    <Button {...instantBuyButtonProps}>
                        <Typography {...buttonTextProps}>
                            Быстрый заказ
                        </Typography>
                    </Button>
                    <Button {...shoppingCartButtonProps}>
                        <Typography {...cartButtonTextProps}>
                            В корзину
                        </Typography>
                        <ShoppingCart {...shoppingCartIconProps} />
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
