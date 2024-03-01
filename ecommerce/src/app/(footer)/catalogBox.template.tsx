import { Box, BoxProps } from "@mui/material";
import FooterTitle from "./title.template";
import AppLink from "../(shared)/text/appLink.template";
import { CategoryListItem } from "@/lib";

const CatalogBox = ({ categories }: { categories: CategoryListItem[] }) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "15px",

        fontSize: "0.95rem"
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
            {/* <AppLink href="#" footer>
                Электроника
            </AppLink>
            <AppLink href="#" footer>
                Мебель
            </AppLink>
            <AppLink href="#" footer>
                Одежда
            </AppLink>
            <AppLink href="#" footer>
                Правильное питание
            </AppLink> */}
        </Box>
    );
};

export default CatalogBox;
