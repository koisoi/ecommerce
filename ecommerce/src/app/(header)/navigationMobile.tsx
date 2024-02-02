import { Box, BoxProps } from "@mui/material";

const HeaderMobileNavigation = () => {
    const navigationProps: { style: React.CSSProperties } = {
        style: {
            position: "sticky",
            top: "-1px",
            zIndex: 11
        }
    };

    const wrapperProps: BoxProps = {
        display: { xs: "flex", md: "none" },
        justifyContent: "space-between",

        width: "100vw",
        height: "45px",
        paddingX: "15px",

        sx: {
            backgroundColor: "primary.main"
        }
    };

    // TODO: Не забыть добавить кнопки
    return (
        <nav {...navigationProps}>
            <Box {...wrapperProps}></Box>
        </nav>
    );
};

export default HeaderMobileNavigation;
