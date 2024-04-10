import { Box, BoxProps, TypographyProps } from "@mui/material";
import SearchBox from "../_shared/search/searchBox.client";
import Title from "../_shared/text/title";

export const NoQuery = () => {
    const wrapperProps: BoxProps = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    };

    const titleProps: TypographyProps = {
        gutterBottom: true
    };

    return (
        <Box {...wrapperProps}>
            <Title props={titleProps}>Введите свой запрос:</Title>
            <SearchBox searchPage />
        </Box>
    );
};
