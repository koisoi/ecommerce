"use client";

import { Box, BoxProps, Link, LinkProps, SvgIconProps } from "@mui/material";
import FooterTitle from "./title.template";
import AppLink from "../(shared)/text/appLink.template";
import { AccessTimeFilled, Email, LocationOn } from "@mui/icons-material";

const ContactsBox = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px",

        fontSize: "0.95rem"
    };

    const telLinkProps: LinkProps = {
        href: "tel:8-800-987-00-11",

        color: "primary.main",
        fontSize: "1.2rem",
        fontWeight: "bold",
        sx: {
            textDecoration: "none"
        }
    };

    const boxProps: BoxProps = {
        color: "text.secondary",
        fontSize: "15px",

        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    };

    const iconProps: SvgIconProps = {
        fontSize: "inherit",
        sx: {
            marginRight: "10px"
        }
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Контакты</FooterTitle>
            <Link {...telLinkProps}>8-800-987-00-11</Link>
            <AppLink href="mailto:test@test.ru" footer>
                <Email {...iconProps} />
                test@test.ru
            </AppLink>
            <Box {...boxProps}>
                <LocationOn {...iconProps} />
                Санкт-Петербург, ул. Пушкина 36
            </Box>
            <Box {...boxProps}>
                <AccessTimeFilled {...iconProps} />
                Пн-Пт: 10:00 - 20:00
            </Box>
        </Box>
    );
};

export default ContactsBox;
