import { YouTube } from "@mui/icons-material";
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
        // minWidth: "768px",
        width: { lg: "100%", xl: "1300px" },
        maxWidth: "1320px",
        paddingX: { lg: "10px", xl: "0" },

        display: { xs: "none", md: "flex" },
        flexDirection: "row",

        color: "text.disabled"
    };

    const leftBoxProps: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        flexGrow: 1,

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
        paddingY: "7.5px",
        paddingX: "15px",
        sx: {
            ":hover": {
                color: "#212529",
                cursor: "pointer"
            }
        }
    };

    const rightBoxProps: BoxProps = {
        display: "flex",
        flexWrap: "wrap",
        flexGrow: 1,
        justifyContent: "flex-end"
    };

    const iconProps: SvgIconProps = {
        fontSize: "small",
        sx: {
            padding: "7.5px",
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
                    <MUILink
                        href="https://www.youtube.com/watch?v=WYgzpw7FaRI"
                        {...MUILinkProps}
                    >
                        <YouTube {...iconProps} />
                    </MUILink>
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderTopContainer;
