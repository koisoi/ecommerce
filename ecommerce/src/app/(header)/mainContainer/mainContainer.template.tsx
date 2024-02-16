"use client";

import {
    Box,
    BoxProps,
    Popover,
    PopoverProps,
    PopoverVirtualElement
} from "@mui/material";
import HeaderSearchBox from "../searchBox.template";
import DesktopHeaderButton, {
    DesktopHeaderButtonProps
} from "../desktopHeaderButton.template";
import { AccountCircle, Favorite, ShoppingCart } from "@mui/icons-material";
import { useThemeColors } from "@/lib";
import Link from "next/link";
import { MouseEventHandler } from "react";

const HeaderMainContainerTemplate = ({
    onCartClick
}: {
    onCartClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    const colors = useThemeColors();

    const outerWrapperProps: BoxProps = {
        paddingY: "2rem",
        marginX: "auto",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

        width: "95%",
        maxWidth: "1320px"
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", mlg: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: "30px",
        width: "100%",
        paddingX: "10px"
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "30px",

        flexGrow: 2
    };

    const logoAndContactsWrapper: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "30px"
    };

    const logoContainerProps: BoxProps = {
        width: {
            xs: "100%",
            sm: "225px",
            md: "120px",
            lg: "160px",
            xl: "180px"
        },
        maxWidth: "225px",
        display: "flex",
        justifyContent: "center"
    };

    const logoProps = {
        src: "https://telescope1.ru/data/upload/Catalog_Model_Brands/45855_original.svg",
        alt: "Логотип",
        width: "100%",
        style: {
            margin: "auto"
        }
    };

    const contactsBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        minWidth: "max-content"
    };

    const buttonsRowProps: BoxProps = {
        display: { xs: "none", sm: "flex" },
        flexDirection: "row",
        gap: "10px",
        flexGrow: 1,

        height: "min-content"
    };

    const cartButtonProps: DesktopHeaderButtonProps = {
        upperText: "Корзина",
        lowerText: "0.00 €",
        onClick: onCartClick
    };

    return (
        <Box {...outerWrapperProps}>
            <Box {...wrapperProps}>
                <Box {...innerWrapperProps}>
                    <Box {...logoAndContactsWrapper}>
                        <Link href="/">
                            <Box {...logoContainerProps}>
                                <img {...logoProps} />
                            </Box>
                        </Link>
                        <Box {...contactsBoxProps}>
                            <a
                                href="tel:88009870011"
                                style={{
                                    color: colors.primary,
                                    fontWeight: "bold",
                                    textDecoration: "none"
                                }}
                            >
                                8-800-987-00-11
                            </a>
                            <a
                                style={{
                                    color: "#969696",
                                    textDecoration: "none"
                                }}
                                href="mailto:test@test.ru"
                            >
                                test@test.ru
                            </a>
                        </Box>
                    </Box>
                    <HeaderSearchBox />
                </Box>
                <Box {...buttonsRowProps}>
                    <DesktopHeaderButton
                        upperText="Избранное"
                        lowerText="Кол-во: 0"
                    >
                        <Favorite />
                    </DesktopHeaderButton>
                    <DesktopHeaderButton {...cartButtonProps}>
                        <ShoppingCart />
                    </DesktopHeaderButton>
                    <DesktopHeaderButton
                        upperText="Войти / Новый"
                        lowerText="Аккаунт"
                    >
                        <AccountCircle />
                    </DesktopHeaderButton>
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderMainContainerTemplate;
