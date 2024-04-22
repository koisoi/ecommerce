import { PageData } from "@/lib";
import { Box, BoxProps } from "@mui/material";
import CatalogSeriesTemplate from "./catalogSeriesTemplate";

export const CategorySeriesBoxTemplate = ({
    series,
    category,
    props
}: {
    series: PageData[] | null | undefined;
    category?: PageData;
    props?: BoxProps;
}) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1rem"
    };

    return !!series?.length ? (
        <Box {...wrapperProps}>
            {series.map((seria) => (
                <CatalogSeriesTemplate
                    page={seria}
                    selected={category ? category.path === seria.path : false}
                    key={seria.id}
                />
            ))}
        </Box>
    ) : (
        <></>
    );
};
