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
import {
    CartItem,
    CategoryItem,
    categoryPathToAlias,
    landingConfig
} from "@/lib";
import Price from "./text/priceTemplate";
import ProductLink from "./text/productLinkTemplate";
import {
    InstantBuyButton,
    ShoppingCartButton
} from "./buyButtons/buyButtons.client";
import { default as NextLink } from "next/link";
import { CardTemplate, AppCardProps } from ".";
import { Product, WithContext } from "schema-dts";
import Script from "next/script";

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

const ProductCardTemplate = ({
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
    const schema: WithContext<Product> = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: categoryItem.category.title_single
            ? `${categoryItem.category.title_single} ${categoryItem.title}`
            : categoryItem.title,
        image: categoryItem.images.map(
            (image) => landingConfig.url + image.url
        ),
        sku: categoryItem.articul,
        brand: {
            "@type": "Brand",
            name: landingConfig.landing_title
        },
        offers: {
            "@type": "Offer",
            url: `${landingConfig.url}/catalog/${categoryPathToAlias(
                categoryItem.category.path
            )}/${categoryItem.alias}`,
            priceCurrency: "RUR",
            price: categoryItem.price,
            priceValidUntil: new Date().toISOString().substring(0, 10),
            itemCondition: "NewCondition",
            availability:
                categoryItem.availability === "в наличии"
                    ? "InStock"
                    : "SoldOut",
            seller: landingConfig.organizationSchema
        }
    };

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
            backgroundColor: "accent.main",
            color: "accent.contrastText",
            verticalAlign: "baseline"
        }
    };

    // const newProductBadgeProps: BoxProps = {
    //     ...badgeProps,
    //     sx: {
    //         backgroundColor: "#eee",
    //         color: "text.primary"
    //     }
    // };

    // const recommendedBadgeProps: BoxProps = {
    //     ...badgeProps,
    //     sx: {
    //         backgroundColor: "secondary.main",
    //         color: "white"
    //     }
    // };

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
                    {newProduct && <Box {...badgeProps}>Новинка</Box>}
                    {recommended && <Box {...badgeProps}>Рекомендуем</Box>}
                </Box>
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
        <>
            <Script
                id={`product-card-ld-json-${categoryItem.alias}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schema)
                }}
            />

            <CardTemplate {...appCardProps}>
                <Box {...cardContentWrapperProps}>
                    <CardContent {...cardContentProps}>
                        <ProductLink url={cartItem.url}>
                            {categoryItem.category.title_single || ""}{" "}
                            {cartItem.title}
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
            </CardTemplate>
        </>
    );
};

export default ProductCardTemplate;
