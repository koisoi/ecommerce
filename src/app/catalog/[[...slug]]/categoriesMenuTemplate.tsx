import CategoryCardTemplate from "@/app/_shared/categoryCardTemplate";
import { PageData } from "@/lib";
import { Box, BoxProps } from "@mui/material";

const CategoriesMenuTemplate = ({ pages }: { pages: PageData[] }) => {
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
            {
                <Box {...wrapperProps}>
                    {pages.map((page) => (
                        <CategoryCardTemplate category={page} key={page.path} />
                    ))}
                </Box>
            }
        </>
    );
};

export default CategoriesMenuTemplate;
