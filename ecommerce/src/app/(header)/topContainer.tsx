import {
    Box,
    BoxProps,
    SvgIcon,
    SvgIconProps,
    Link as MUILink,
    LinkProps
} from "@mui/material";
import VK from "@/assets/svg/vk.svg";
import { NextLinkProps, landingConfig } from "@/lib";
import Link from "next/link";

export const HeaderTopContainer = () => {
    const outerWrapperProps: BoxProps = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontSize: "0.9rem"
    };

    const wrapperProps: BoxProps = {
        width: "100%",

        display: { xs: "none", md: "flex" },
        flexDirection: "row",

        color: "text.disabled"
    };

    const leftBoxProps: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        flexGrow: 1,
        gap: "1rem",
        alignItems: "center",

        minWidth: "max-content"
    };

    const linkProps: NextLinkProps = {
        href: "#",
        style: {
            textDecoration: "none",
            color: "inherit"
        }
    };

    const leftItemProps: BoxProps = {
        sx: {
            ":hover": {
                color: "text.secondary",
                cursor: "pointer"
            }
        }
    };

    const rightBoxProps: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        flexGrow: 1,
        justifyContent: "flex-end",
        gap: "0.5rem"
    };

    const iconProps: SvgIconProps = {
        fontSize: "small",
        sx: {
            ":hover": {
                cursor: "pointer"
            }
        }
    };

    const MUILinkProps: LinkProps = {
        color: "text.disabled",
        target: "_blank"
    };

    return (
        <Box {...outerWrapperProps}>
            <Box {...wrapperProps}>
                <Box {...leftBoxProps}>
                    <Box {...leftItemProps}>
                        <Link {...linkProps} href="/delivery.html">
                            Доставка и оплата
                        </Link>
                    </Box>
                    <Box {...leftItemProps}>
                        <Link {...linkProps} href="/warranty.html">
                            Гарантия и возврат
                        </Link>
                    </Box>
                    <Box {...leftItemProps}>
                        <Link {...linkProps} href="/contacts.html">
                            Контактная информация
                        </Link>
                    </Box>
                </Box>
                <Box {...rightBoxProps}>
                    <MUILink
                        href="https://vk.com/telescope1_ru"
                        {...MUILinkProps}
                    >
                        <SvgIcon {...iconProps}>
                            <VK fill={landingConfig.colors.text?.disabled} />
                        </SvgIcon>
                    </MUILink>
                </Box>
            </Box>
        </Box>
    );
};
