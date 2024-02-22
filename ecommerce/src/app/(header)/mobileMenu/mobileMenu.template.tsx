"use client";

import ContactsBox from "@/app/(footer)/contactsBox.template";
import FooterTitle from "@/app/(footer)/title.template";
import { CategoryListItem } from "@/lib";
import {
    Box,
    BoxProps,
    Drawer,
    DrawerProps,
    IconButton,
    IconButtonProps,
    List,
    ListItem,
    ListItemButton,
    ListItemProps,
    ListItemText
} from "@mui/material";
import Link from "next/link";
import { CSSProperties } from "react";
import Logo from "../logo/logo";
import { Close } from "@mui/icons-material";

const MobileMenuTemplate = ({
    open,
    onMenuClose,
    categories,
    phone,
    address
}: {
    open: boolean;
    onMenuClose: (...props: any) => void;
    categories: CategoryListItem[];
    phone: string;
    address: string;
}) => {
    const drawerProps: DrawerProps = {
        open,
        onClose: onMenuClose,
        onClick: onMenuClose,

        disableRestoreFocus: true
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",

        width: "250px",
        height: "100%",
        minHeight: "fit-content"
    };

    const logoListItemProps: ListItemProps = {
        sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }
    };

    const iconButtonProps: IconButtonProps = {
        onClick: onMenuClose
    };

    const linksStyle: CSSProperties = {
        textDecoration: "none",
        color: "inherit"
    };

    return (
        <Drawer {...drawerProps}>
            <Box {...wrapperProps}>
                <List sx={{ flexGrow: 1 }}>
                    <ListItem {...logoListItemProps}>
                        <Logo />
                        <IconButton {...iconButtonProps}>
                            <Close />
                        </IconButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link href="/" style={linksStyle}>
                                <ListItemText
                                    primary={<FooterTitle>Главная</FooterTitle>}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link href="/delivery" style={linksStyle}>
                                <ListItemText primary="Доставка и оплата" />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link href="/warranty" style={linksStyle}>
                                <ListItemText primary="Гарантия и возврат" />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link href="/contacts" style={linksStyle}>
                                <ListItemText primary="Контактная информация" />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <Link href="/catalog" style={linksStyle}>
                                <ListItemText
                                    primary={<FooterTitle>Каталог</FooterTitle>}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    {categories.map((category) => (
                        <ListItem key={category.path} disablePadding>
                            <ListItemButton>
                                <Link
                                    href={{
                                        pathname: "/catalog",
                                        query: { category: category.path }
                                    }}
                                    style={linksStyle}
                                >
                                    <ListItemText primary={category.title} />
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <ContactsBox
                    phone={phone}
                    address={address}
                    props={{
                        paddingX: "16px",
                        paddingY: "8px",
                        sx: { backgroundColor: "divider" }
                    }}
                />
            </Box>
        </Drawer>
    );
};

export default MobileMenuTemplate;
