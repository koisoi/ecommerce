import { FooterContactsBoxTemplate } from "@/app/_shared/footerContactsBoxTemplate";
import { FooterTitle } from "@/app/_shared/footerTitle";
import { PageData } from "@/lib";
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
    ListItemButtonProps,
    ListItemProps,
    ListProps
} from "@mui/material";
import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { Close } from "@mui/icons-material";
import DeliveryWays from "@/app/_shared/deliveryWays";

export const MobileMenuTemplate = ({
    open,
    onMenuClose,
    categories,
    phone,
    path,
    children
}: {
    open: boolean;
    onMenuClose: (...props: any) => void;
    categories: PageData[];
    phone: string;
    path: string;
    children: ReactNode;
}) => {
    const drawerProps: DrawerProps = {
        open,
        onClose: onMenuClose,

        disableRestoreFocus: true,
        disableScrollLock: true
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",

        width: "250px",
        height: "100%",
        minHeight: "fit-content",
        lineHeight: 1,

        component: "nav"
    };

    const listItemProps: ListItemProps = {
        disablePadding: true
    };

    const listItemButtonProps = (href: string): ListItemButtonProps => ({
        onClick: onMenuClose,
        selected: path === `${href}/` || path === href,
        sx: {
            ...(path === href && {
                pointerEvents: "none"
            })
        }
    });

    const logoListItemProps: ListItemProps = {
        onClick: onMenuClose,
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

    const listProps: ListProps = {
        sx: {
            flexGrow: 1,
            ".MuiListItemButton-root": {
                padding: "0.7rem"
            }
        }
    };

    return (
        <Drawer {...drawerProps}>
            <Box {...wrapperProps}>
                <List {...listProps}>
                    <ListItem {...logoListItemProps}>
                        {children}
                        <IconButton {...iconButtonProps}>
                            <Close />
                        </IconButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/")}>
                            <Link href="/" style={linksStyle}>
                                <FooterTitle>Главная</FooterTitle>
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/delivery")}>
                            <Link href="/delivery.html" style={linksStyle}>
                                Доставка и оплата
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/warranty")}>
                            <Link href="/warranty.html" style={linksStyle}>
                                Гарантия и возврат
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/contacts")}>
                            <Link href="/contacts.html" style={linksStyle}>
                                Контактная информация
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton sx={{ pointerEvents: "none" }}>
                            <FooterTitle>Каталог</FooterTitle>
                        </ListItemButton>
                    </ListItem>

                    {categories.map((category) => (
                        <ListItem key={category.path} {...listItemProps}>
                            <ListItemButton
                                {...listItemButtonProps(category.url)}
                            >
                                <Link href={category.url} style={linksStyle}>
                                    {category.title}
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/search")}>
                            <Link href="/search" style={linksStyle}>
                                <FooterTitle>Поиск</FooterTitle>
                            </Link>
                        </ListItemButton>
                    </ListItem>
                </List>

                <FooterContactsBoxTemplate
                    phone={phone}
                    props={{
                        paddingX: "1rem",
                        paddingY: "0.5rem",
                        sx: { backgroundColor: "divider" }
                    }}
                />
            </Box>
        </Drawer>
    );
};
