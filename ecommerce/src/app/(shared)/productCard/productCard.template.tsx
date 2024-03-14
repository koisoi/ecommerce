import {
    CardContent,
    CardActions,
    ButtonProps,
    CardActionsProps,
    Typography,
    CardProps,
    CardMediaProps,
    TypographyProps,
    BoxProps,
    Box,
    CardContentProps,
    Link,
    LinkProps
} from "@mui/material";
import { CategoryItem } from "@/lib";
import Price from "../text/price.template";
import ProductLink from "../text/productLink.template";
import { InstantBuyButton, ShoppingCartButton } from "../buyButtons/buyButtons";
import { CartItem } from "@/lib/types/cart";
import AppCard, { AppCardProps } from "../appCard.template";
import { default as NextLink } from "next/link";

export type ProductCardProps = {
    cartItem: CartItem;
    discount?: number;
    newProduct?: boolean;
    sale?: boolean;
    recommended?: boolean;
    initialCardProps?: CardProps;
    initialCardMediaProps?: CardMediaProps;
    initialCardContentProps?: CardContentProps;
    initialActionRowProps?: CardActionsProps;
    categoryItem: CategoryItem;
    hideButtons?: boolean;
    linkProps?: LinkProps;
};

const ProductCard = ({
    discount,
    newProduct,
    sale,
    recommended,
    initialCardProps,
    initialCardMediaProps,
    initialCardContentProps,
    initialActionRowProps,
    cartItem,
    categoryItem,
    hideButtons,
    linkProps
}: ProductCardProps) => {
    const imageLinkProps: LinkProps = {
        component: NextLink,
        // @ts-ignore
        href: cartItem.url,

        ...linkProps,

        sx: {
            display: "inline-block",
            height: { xs: "100%", md: "200px" },
            width: "100%",

            cursor: "pointer",

            ...linkProps?.sx
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
        ...initialActionRowProps,

        sx: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            rowGap: "5px",
            alignItems: "flex-start",

            padding: 0,
            // paddingTop: 0,

            ".MuiButton-root": {
                margin: 0
            },

            ...initialActionRowProps?.sx
        }
    };

    const buttonProps: ButtonProps = {
        sx: {
            flexGrow: 1,
            width: "100%",
            margin: 0
        }
    };

    const cardProps: CardProps = {
        ...initialCardProps,
        sx: {
            flexDirection: { xs: "row", md: "column" },
            maxWidth: { xs: "350px", md: "unset" },
            padding: { xs: "0.5rem", md: "1rem" },
            ...initialCardProps?.sx
        }
    };

    const cardMediaProps: CardMediaProps = {
        ...initialCardMediaProps,
        sx: {
            height: { xs: "100%", md: "200px" },
            minHeight: { xs: "unset", md: "200px" },
            marginBottom: { xs: 0, md: "1rem" },
            marginRight: { xs: "1rem", md: 0 },

            flexGrow: 1,
            flexBasis: 0,
            ...initialCardMediaProps?.sx
        }
    };

    const appCardProps: AppCardProps = {
        imageLink: cartItem.imgLink.replaceAll("original", "thumbnail"),
        cardProps,
        cardMediaProps,
        cardMediaChildren: (
            <>
                <Link {...imageLinkProps} />
                <Box {...badgeWrapperProps}>
                    {newProduct && <Box {...newProductBadgeProps}>Новинка</Box>}
                    {sale && <Box {...saleBadgeProps}>Распродажа</Box>}
                    {recommended && (
                        <Box {...recommendedBadgeProps}>Рекомендуем</Box>
                    )}
                </Box>
                {discount && <Box {...discountBadgeProps}>-{discount}%</Box>}
            </>
        )
    };

    const cardContentProps: CardContentProps = {
        ...initialCardContentProps,
        sx: {
            flexGrow: 1,
            padding: 0,
            alignItems: "flex-start",
            textAlign: "left",
            ...initialCardContentProps?.sx
        }
    };

    const cardContentWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        flexBasis: 0
    };

    return (
        <AppCard {...appCardProps}>
            <Box {...cardContentWrapperProps}>
                <CardContent {...cardContentProps}>
                    <ProductLink url={cartItem.url}>
                        {categoryItem.category.title_single} {cartItem.title}
                    </ProductLink>
                    <Typography {...articleTextProps}>
                        Артикул: {cartItem.articul}
                    </Typography>
                </CardContent>

                <CardActions {...actionRowProps}>
                    <Price price={cartItem.price} props={{ flexGrow: 1 }} />
                    {!hideButtons && (
                        <>
                            <InstantBuyButton
                                props={buttonProps}
                                item={categoryItem}
                            />
                            <ShoppingCartButton
                                props={buttonProps}
                                item={cartItem}
                            />
                        </>
                    )}
                </CardActions>
            </Box>
        </AppCard>
    );
};

export default ProductCard;
