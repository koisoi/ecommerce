import { Box, BoxProps, TypographyProps } from "@mui/material";
import HeaderSearchBox from "../(header)/search/search";
import Title from "../(shared)/text/title.template";

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
            <HeaderSearchBox searchPage />
        </Box>
    );
};

export default NoQuery;
