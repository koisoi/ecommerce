import ProductCard, {
    ProductCardProps
} from "@/app/(shared)/productCard/productCard.template";
import { CategoryItem, getImageLink } from "@/lib";
import { categoryPathToAlias } from "@/lib/functions/catalogPathTransform";
import { getProductLink } from "@/lib/functions/getProductLink";
import { Box, Tab, TabProps, Tabs, TabsProps } from "@mui/material";

const SimliarProductsSlider = ({ products }: { products: CategoryItem[] }) => {
    const productCardProps = (item: CategoryItem): ProductCardProps => {
        return {
            cartItem: {
                alias: item.alias,
                title: item.title,
                price: item.price,
                articul: item.articul,
                url: getProductLink(
                    categoryPathToAlias(item.category.path)!,
                    item.alias
                ),
                imgLink: getImageLink(item.images[0].url),
                amount: 1
            },
            newProduct: item.is_new,
            recommended: item.is_recommend,
            initialCardMediaProps: {
                sx: {
                    minHeight: { md: "190px", xl: "310px" },
                    height: { md: "190px", xl: "310px" },
                    minWidth: "165px"
                }
            },
            initialCardProps: {
                sx: {
                    height: "100%",
                    width: { xs: "unset", md: "340px" }
                }
            },
            linkProps: {
                sx: { height: { xs: "100%", md: "190px", xl: "310px" } }
            },
            categoryItem: item
        };
    };

    const tabsProps: TabsProps = {
        variant: "scrollable",

        value: false,

        sx: {
            minHeight: "max-content",
            overflow: "visible",
            ".MuiTabs-scrollableX": {
                overflowX: "visible"
            }
        }
    };

    const tabProps: TabProps = {
        disableRipple: true,
        component: "div",

        sx: {
            textTransform: "none",
            overflow: "visible",
            minHeight: "100%",
            textAlign: "left"
        }
    };

    return (
        <Box>
            <Tabs {...tabsProps}>
                {products.map((product) => (
                    <Tab
                        key={product.id}
                        label={<ProductCard {...productCardProps(product)} />}
                        {...tabProps}
                    />
                ))}
            </Tabs>
        </Box>
    );
};

export default SimliarProductsSlider;
