import { Box, BoxProps } from "@mui/material";
import FooterTitle from "./title.template";
import AppLink from "../(shared)/text/appLink.template";
import { CategoryListItem } from "@/lib";

const CatalogBox = ({ categories }: { categories: CategoryListItem[] }) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.5rem", md: "1rem" },

        fontSize: "inherit"
    };

    const categoriesBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Каталог</FooterTitle>
            <Box {...categoriesBoxProps}>
                {categories.map((category) => (
                    <AppLink
                        key={category.path}
                        href={`/catalog/${category.path}`}
                        footer
                    >
                        {category.title}
                    </AppLink>
                ))}
            </Box>
        </Box>
    );
};

export default CatalogBox;
