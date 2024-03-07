import CategoryCard from "@/app/(shared)/categoryCard.template";
import { landingConfig } from "@/lib/data/config";
import { Box, BoxProps } from "@mui/material";

const CategoriesMenuTemplate = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        justifyContent: "center",
        sx: {
            flexFlow: "row wrap"
        },
        gap: { xs: "1rem", md: "2rem" }
    };

    return (
        <>
            <Box {...wrapperProps}>
                {landingConfig.categories.map((category) => (
                    <CategoryCard category={category} key={category.path} />
                ))}
            </Box>
        </>
    );
};

export default CategoriesMenuTemplate;
