import {
    Box,
    BoxProps,
    SvgIcon,
    SvgIconProps,
    Link as MUILink,
    LinkProps
} from "@mui/material";
import VK from "@/assets/svg/vk.svg";
import { NextLinkProps } from "@/lib";
import Link from "next/link";

const HeaderTopContainer = () => {
    const outerWrapperProps: BoxProps = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontSize: "1rem"
    };

    const wrapperProps: BoxProps = {
        // width: { lg: "100%", xl: "1300px" },
        // maxWidth: "1320px",
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
                            <VK fill="#969696" />
                        </SvgIcon>
                    </MUILink>
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderTopContainer;
