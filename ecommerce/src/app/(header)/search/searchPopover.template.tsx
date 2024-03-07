import { SearchResponse } from "@/lib/services/search.service";
import {
    LinkProps,
    List,
    ListItem,
    ListProps,
    Popover,
    PopoverProps,
    Typography,
    TypographyProps
} from "@mui/material";
import SearchPopoverItem from "./searchPopoverItem.template";
import { Url } from "next/dist/shared/lib/router/router";
import AppLink from "@/app/(shared)/text/appLink.template";
import AttentionText from "@/app/(shared)/text/attentionText.template";

const SearchPopoverTemplate = ({
    open,
    anchorEl,
    onClose,
    loading,
    response,
    seeMoreHref,
    limit,
    searchPage
}: {
    open: boolean;
    anchorEl: Element | null;
    onClose: (...props: any) => any;
    loading: boolean;
    response?: SearchResponse;
    seeMoreHref: Url;
    limit: number;
    searchPage?: boolean;
}) => {
    const popoverProps: PopoverProps = {
        id: "searchPopover",
        open,
        anchorEl,
        onClose,
        disableAutoFocus: true,
        disableScrollLock: true,

        sx: {
            display: searchPage ? "block" : { xs: "none", sm: "block" },
            maxHeight: "80vh"
        },

        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        }

        // anchorOrigin, transformOrigin
    };

    const listProps: ListProps = {
        dense: true,

        sx: {
            minWidth: { sm: "220px", md: "380px", xl: "420px" }
        }
    };

    const noResponseTextProps: TypographyProps = {
        color: "text.disabled",
        sx: {
            minWidth: { sm: "190px", md: "350px", xl: "390px" },
            padding: "15px"
        }
    };

    const linkProps: LinkProps = {
        sx: {
            paddingTop: "8px",

            ":hover": {
                color: "primary.main",
                textDecoration: "underline 1px"
            }
        }
    };

    return (
        <Popover {...popoverProps}>
            {loading && (
                <Typography {...noResponseTextProps}>
                    Поиск товаров...
                </Typography>
            )}
            {!loading &&
                ((!!response && response.totalItemCount === 0) ||
                    !response) && (
                    <Typography {...noResponseTextProps}>
                        По данному запросу ничего не найдено.
                    </Typography>
                )}
            {!loading && !!response && response.totalItemCount > 0 && (
                <List {...listProps}>
                    {response.list.map((el) => (
                        <SearchPopoverItem
                            item={el}
                            onClick={onClose}
                            key={el.alias}
                        />
                    ))}
                    {response.totalItemCount > limit && (
                        <ListItem>
                            <AppLink href={seeMoreHref} props={linkProps}>
                                <AttentionText>
                                    Посмотреть все результаты
                                </AttentionText>
                            </AppLink>
                        </ListItem>
                    )}
                </List>
            )}
        </Popover>
    );
};

export default SearchPopoverTemplate;
