import {
    Box,
    BoxProps,
    CircularProgress,
    TypographyProps
} from "@mui/material";
import Title from "./text/title.template";

const Loading = ({ search }: { search?: boolean }) => {
    const wrapperProps: BoxProps = {
        width: "100%",
        height: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
    };

    const titleProps: TypographyProps = {
        color: "primary.main"
    };

    return (
        <Box {...wrapperProps}>
            <CircularProgress size="5rem" />
            <Title props={titleProps}>
                {search ? "Поиск..." : "Отправка..."}
            </Title>
        </Box>
    );
};

export default Loading;
