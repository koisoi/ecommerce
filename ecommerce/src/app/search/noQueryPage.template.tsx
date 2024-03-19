import { Box, BoxProps, TypographyProps } from "@mui/material";
import SearchBox from "../(shared)/search/searchBox.client";
import Title from "../(shared)/text/title";

const NoQuery = () => {
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

export default NoQuery;
