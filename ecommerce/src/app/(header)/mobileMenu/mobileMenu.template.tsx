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
    ListItemButtonProps,
    ListItemProps,
    ListItemText,
    ListProps
} from "@mui/material";
import Link from "next/link";
import { CSSProperties } from "react";
import Logo from "../logo";
import { Close } from "@mui/icons-material";

const MobileMenuTemplate = ({
    open,
    onMenuClose,
    categories,
    phone,
    address,
    path,
    catalogPath
}: {
    open: boolean;
    onMenuClose: (...props: any) => void;
    categories: CategoryListItem[];
    phone: string;
    address: string;
    path: string;
    catalogPath: string | null;
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
        minHeight: "fit-content"
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
                padding: "0.5rem"
            }
        }
    };

    return (
        <Drawer {...drawerProps}>
            <Box {...wrapperProps}>
                <List {...listProps}>
                    <ListItem {...logoListItemProps}>
                        <Logo />
                        <IconButton {...iconButtonProps}>
                            <Close />
                        </IconButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/")}>
                            <Link href="/" style={linksStyle}>
                                <ListItemText
                                    primary={<FooterTitle>Главная</FooterTitle>}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/delivery")}>
                            <Link href="/delivery.html" style={linksStyle}>
                                <ListItemText primary="Доставка и оплата" />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/warranty")}>
                            <Link href="/warranty.html" style={linksStyle}>
                                <ListItemText primary="Гарантия и возврат" />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/contacts")}>
                            <Link href="/contacts.html" style={linksStyle}>
                                <ListItemText primary="Контактная информация" />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/catalog")}>
                            <Link href="/catalog" style={linksStyle}>
                                <ListItemText
                                    primary={<FooterTitle>Каталог</FooterTitle>}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    {categories.map((category) => (
                        <ListItem key={category.path} {...listItemProps}>
                            <ListItemButton
                                {...listItemButtonProps(
                                    `/catalog/${category.path}`
                                )}
                            >
                                <Link
                                    href={`/catalog/${category.path}`}
                                    style={linksStyle}
                                >
                                    <ListItemText primary={category.title} />
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <ListItem {...listItemProps}>
                        <ListItemButton {...listItemButtonProps("/search")}>
                            <Link href="/search" style={linksStyle}>
                                <ListItemText
                                    primary={<FooterTitle>Поиск</FooterTitle>}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
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
