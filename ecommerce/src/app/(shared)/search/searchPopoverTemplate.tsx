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
import SearchPopoverItemTemplate from "./searchPopoverItemTemplate";
import { Url } from "next/dist/shared/lib/router/router";
import AppLink from "@/app/(shared)/text/appLink";
import AttentionText from "@/app/(shared)/text/attentionText";
import { SearchResponse } from "@/lib";

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
    };

    const listProps: ListProps = {
        dense: true,

        sx: {
            width: "100%"
        }
    };

    const noResponseTextProps: TypographyProps = {
        color: "text.disabled",
        sx: {
            padding: "1rem"
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
                        <SearchPopoverItemTemplate
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
