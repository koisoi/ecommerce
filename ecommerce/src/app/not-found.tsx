import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import Link from "next/link";

const NotFound = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        height: "100%"
    };

    // const innerWrapperProps: BoxProps = {
    //     display: "flex",
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",

    //     width: "fit-content",
    //     height: "fit-content"
    // };

    const titleProps: TypographyProps = {
        color: "primary.main",
        fontSize: "10rem",
        lineHeight: 1
    };

    const rightBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px"
    };

    const subtitleProps: TypographyProps = {
        color: "primary.main",
        fontSize: "1.5rem"
    };

    const buttonProps: ButtonProps = {
        variant: "contained",

        disableFocusRipple: true,
        disableRipple: true,

        sx: {
            textTransform: "none",
            fontSize: "1.2rem"
        }
    };

    return (
        <Box {...wrapperProps}>
            <Typography {...titleProps}>404</Typography>
            <Box {...rightBoxProps}>
                <Typography {...subtitleProps}>Страница не найдена</Typography>
                <Link href="/">
                    <Button {...buttonProps}>На главную</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default NotFound;
