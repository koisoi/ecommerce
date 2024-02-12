import ProductCard, {
    ProductCardProps
} from "@/app/(shared)/productCard/productCard.template";
import { CategoryItem } from "@/lib";
import { Box, Tab, TabProps, Tabs, TabsProps } from "@mui/material";

const SimliarProductsSlider = ({ products }: { products: CategoryItem[] }) => {
    const productCardProps = ({
        articul,
        images,
        title,
        price,
        is_new,
        is_recommend,
        alias,
        category
    }: CategoryItem): ProductCardProps => {
        return {
            title,
            imageLink: images[0].url,
            articul,
            price,
            newProduct: is_new,
            recommended: is_recommend,
            cardMediaProps: {
                sx: {
                    height: { md: "190px", xl: "310px" }
                }
            },
            productLink: {
                pathname: "/catalog/product",
                query: {
                    category: category.path,
                    alias
                }
            }
        };
    };

    const tabsProps: TabsProps = {
        variant: "scrollable"
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
