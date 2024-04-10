import { Box, BoxProps } from "@mui/material";
import { FooterTitle } from "../_shared/footerTitle";
import AppLink from "../_shared/text/appLink";

export const UpperMenuBox = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.5rem", md: "1rem" },

        fontSize: "inherit"
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "5px"
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Для покупателей</FooterTitle>
            <Box {...innerWrapperProps}>
                <AppLink href="/delivery.html" footer>
                    Доставка и оплата
                </AppLink>
                <AppLink href="/warranty.html" footer>
                    Гарантия и возврат
                </AppLink>
                <AppLink href="/contacts.html" footer>
                    Контактная информация
                </AppLink>
            </Box>
        </Box>
    );
};