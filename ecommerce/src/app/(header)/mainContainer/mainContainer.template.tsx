"use client";

import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import HeaderSearchBox from "../searchBox.template";
import DesktopHeaderButton, {
    DesktopHeaderButtonProps
} from "../desktopHeaderButton.template";
import { ShoppingCart } from "@mui/icons-material";
import { useThemeColors } from "@/lib";
import Link from "next/link";
import {
    ChangeEventHandler,
    KeyboardEventHandler,
    MouseEventHandler
} from "react";
import BackCallForm from "@/app/(backCallForm)/backCallForm";

const HeaderMainContainerTemplate = ({
    onCartClick,
    backCallOpen,
    onBackCallButtonClick,
    onBackCallClose,
    onSearch,
    searchQuery,
    onSearchQueryChange,
    onSearchEnter
}: {
    onCartClick: MouseEventHandler<HTMLButtonElement>;
    backCallOpen: boolean;
    onBackCallButtonClick: MouseEventHandler<HTMLButtonElement>;
    onBackCallClose: MouseEventHandler<HTMLButtonElement>;
    onSearch: MouseEventHandler<HTMLButtonElement>;
    searchQuery: string;
    onSearchQueryChange: ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement
    >;
    onSearchEnter: KeyboardEventHandler<HTMLDivElement>;
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

    const backCallButtonProps: ButtonProps = {
        variant: "contained",

        onClick: onBackCallButtonClick,

        sx: {
            textTransform: "none",
            boxShadow: "none",

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    const buttonsRowProps: BoxProps = {
        display: { xs: "none", sm: "flex" },
        flexDirection: "row",
        gap: "20px",
        flexGrow: 1,

        height: "min-content"
    };

    const cartButtonProps: DesktopHeaderButtonProps = {
        upperText: "Корзина",
        lowerText: "0.00 €",
        onClick: onCartClick
    };

    const addressProps: TypographyProps = {
        color: "text.disabled"
    };

    return (
        <>
            <BackCallForm open={backCallOpen} onClose={onBackCallClose} />

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
                                <Typography {...addressProps}>
                                    Адрес магазина: у. Пушкина дом Колотушкина
                                </Typography>
                            </Box>
                        </Box>
                        <HeaderSearchBox
                            onSearch={onSearch}
                            searchQuery={searchQuery}
                            onSearchQueryChange={onSearchQueryChange}
                            onSearchEnter={onSearchEnter}
                        />
                    </Box>
                    <Box {...buttonsRowProps}>
                        <Button {...backCallButtonProps}>
                            Обратный звонок
                        </Button>
                        <DesktopHeaderButton
                            {...cartButtonProps}
                            id="desktop-header-button"
                        >
                            <ShoppingCart />
                        </DesktopHeaderButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HeaderMainContainerTemplate;
