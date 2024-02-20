import ProductCard, {
    ProductCardProps
} from "@/app/(shared)/productCard/productCard.template";
import { CategoryItem, getProductImageLink } from "@/lib";
import { Box, Tab, TabProps, Tabs, TabsProps } from "@mui/material";

const SimliarProductsSlider = ({ products }: { products: CategoryItem[] }) => {
    const productCardProps = (item: CategoryItem): ProductCardProps => {
        return {
            cartItem: {
                ...item,
                url: {
                    pathname: "/catalog/product",
                    query: {
                        category: item.category.path,
                        series: item.series?.alias,
                        product: item.alias
                    }
                },
                imgLink: getProductImageLink(item.images[0].url),
                amount: 1
            },
            newProduct: item.is_new,
            recommended: item.is_recommend,
            cardMediaProps: {
                sx: {
                    height: { md: "190px", xl: "310px" }
                }
            }
        };
    };

    const tabsProps: TabsProps = {
        variant: "scrollable",

        value: false
    };

    const tabProps: TabProps = {
        sx: {
            textTransform: "none"
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
