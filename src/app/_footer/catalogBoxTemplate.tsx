import { Box, BoxProps } from "@mui/material";
import { FooterTitle } from "../_shared/footerTitle";
import AppLink from "../_shared/text/appLink";
import { PageData } from "@/lib";

export const CatalogBoxTemplate = ({
    categories
}: {
    categories: PageData[];
}) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.5rem", md: "1rem" },

        fontSize: "inherit"
    };

    const categoriesBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5px"
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Каталог</FooterTitle>
            <Box {...categoriesBoxProps}>
                {categories.map((category) => (
                    <AppLink key={category.path} href={category.url} footer>
                        {category.title}
                    </AppLink>
                ))}
            </Box>
        </Box>
    );
};
