import { Box, BoxProps } from "@mui/material";
import FooterTitle from "./title.template";
import AppLink from "../(shared)/text/appLink.template";

const UpperMenuBox = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.5rem", md: "1rem" },

        fontSize: "inherit"
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Для покупателей</FooterTitle>
            <Box {...innerWrapperProps}>
                <AppLink href="/delivery" footer>
                    Доставка и оплата
                </AppLink>
                <AppLink href="/warranty" footer>
                    Гарантия и возврат
                </AppLink>
                <AppLink href="/contacts" footer>
                    Контактная информация
                </AppLink>
            </Box>
        </Box>
    );
};

export default UpperMenuBox;
