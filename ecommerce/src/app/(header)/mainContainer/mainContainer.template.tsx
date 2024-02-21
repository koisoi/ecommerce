"use client";

import {
    Box,
    BoxProps,
    Typography,
    TypographyProps,
    LinkProps
} from "@mui/material";
import DesktopHeaderButton, {
    DesktopHeaderButtonProps
} from "../desktopHeaderButton.template";
import { ShoppingCart } from "@mui/icons-material";
import { useThemeColors } from "@/lib";
import Link from "next/link";
import { MouseEventHandler } from "react";
import PhoneLink from "@/app/(shared)/text/phoneLink.template";
import BackCallButton from "@/app/(shared)/backCallButton/backCallButton";
import HeaderSearchBox from "../search/search";

const HeaderMainContainerTemplate = ({
    onCartClick,
    storeAddress,
    phone
}: {
    onCartClick: MouseEventHandler<HTMLButtonElement>;
    storeAddress: string;
    phone: string;
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
            // xs: "100%",
            sm: "100%",
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
        width: "max-content",
        maxWidth: "180px"
    };

    const buttonsRowProps: BoxProps = {
        display: { xs: "none", sm: "flex" },
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        flexGrow: 1,

        height: "min-content"
    };

    const cartButtonProps: DesktopHeaderButtonProps = {
        text: "Корзина",
        onClick: onCartClick
    };

    const addressProps: TypographyProps = {
        color: "text.disabled",
        fontSize: "0.8rem"
    };

    const phoneLinkProps: LinkProps = {
        href: "tel:88009870011",
        sx: {
            color: colors.primary,
            fontWeight: "bold",
            textDecoration: "none"
        }
    };

    return (
        <>
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
                                <PhoneLink number={phone} />
                                <Typography {...addressProps}>
                                    {storeAddress}
                                </Typography>
                            </Box>
                        </Box>
                        <HeaderSearchBox />
                    </Box>
                    <Box {...buttonsRowProps}>
                        <BackCallButton />
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
