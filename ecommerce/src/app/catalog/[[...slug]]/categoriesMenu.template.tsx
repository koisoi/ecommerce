import CategoryCard from "@/app/(shared)/categoryCard.template";
import { landingConfig } from "@/lib/data/config";
import { Box, BoxProps } from "@mui/material";

const CategoriesMenuTemplate = () => {
    const wrapperProps: BoxProps = {
        paddingY: "50px",

        display: "grid",
        gridTemplateColumns: {
            xl: "1fr 1fr 1fr 1fr",
            lg: "1fr 1fr 1fr",
            sm: "1fr 1fr",
            xs: "1fr"
        },
        gap: "30px"
    };

    return (
        <Box {...wrapperProps}>
            {landingConfig.categories.map((category) => (
                <CategoryCard category={category} key={category.path} />
            ))}
        </Box>
    );
};

export default CategoriesMenuTemplate;
