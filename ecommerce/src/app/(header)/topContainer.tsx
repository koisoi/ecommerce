import { Instagram, YouTube } from "@mui/icons-material";
import { Box, BoxProps, SvgIconProps } from "@mui/material";

const HeaderTopContainer = () => {
    const outerWrapperProps: BoxProps = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    };

    const wrapperProps: BoxProps = {
        // minWidth: "768px",
        width: "70%",
        maxWidth: "1320px",
        paddingX: "10px",

        display: { xs: "none", md: "flex" },
        flexDirection: "row",

        color: "#969696",
    };

    const leftBoxProps: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        flexGrow: 1,
    };

    const leftItemProps: BoxProps = {
        paddingY: "7.5px",
        paddingX: "15px",
        sx: {
            ":hover": {
                color: "#212529",
                cursor: "pointer",
            },
        },
    };

    const rightBoxProps: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        flexGrow: 1,
        justifyContent: "flex-end",
    };

    const iconProps: SvgIconProps = {
        fontSize: "small",
        sx: {
            padding: "7.5px",
            ":hover": {
                color: "#212529",
                cursor: "pointer",
            },
        },
    };

    return (
        <Box {...outerWrapperProps}>
            <Box {...wrapperProps}>
                <Box {...leftBoxProps}>
                    <Box {...leftItemProps}>
                        Политика конфиденциальности и оферта
                    </Box>
                    <Box {...leftItemProps}>Обмен и возврат</Box>
                    <Box {...leftItemProps}>Блог</Box>
                    <Box {...leftItemProps}>Обратная связь</Box>
                </Box>
                <Box {...rightBoxProps}>
                    <Instagram {...iconProps} />
                    <YouTube {...iconProps} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderTopContainer;
