import { Search } from "@mui/icons-material";
import { Button, ButtonProps, TextField, TextFieldProps } from "@mui/material";
import {
    ChangeEventHandler,
    KeyboardEventHandler,
    MouseEventHandler
} from "react";
import SearchPopover from "./searchPopover.client";

const SearchBoxTemplate = ({
    onSearch,
    searchQuery,
    onSearchQueryChange,
    onSearchEnter,
    searchPopoverAnchorEl,
    searchPopoverOpen,
    onPopoverClose,
    searchPage
}: {
    onSearch: MouseEventHandler<HTMLButtonElement>;
    searchQuery: string;
    onSearchQueryChange: ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement
    >;
    onSearchEnter: KeyboardEventHandler<HTMLDivElement>;
    searchPopoverAnchorEl: Element | null;
    searchPopoverOpen: boolean;
    onPopoverClose: (...props: any) => any;
    searchPage?: boolean;
}) => {
    const buttonProps: ButtonProps = {
        variant: "contained",
        size: "small",

        sx: {
            minHeight: "40px",
            minWidth: "0",
            borderRadius: "0 4px 4px 0",
            border: "0",
            boxShadow: "none",

            ":hover": {
                boxShadow: "none"
            }
        },

        onClick: onSearch
    };

    const searchBoxProps: TextFieldProps = {
        size: "small",
        fullWidth: true,
        sx: {
            width: "100%",
            display: { xs: "none", sm: "block" },
            ...(searchPage && {
                maxWidth: "420px",
                width: "100%",
                display: "block"
            }),

            ".MuiInputBase-input": {
                backgroundColor: "white",
                borderRadius: "4px 0 0 4px"
            },

            fieldset: {
                border: searchPage
                    ? "solid 1px rgba(0, 0, 0, 0.23)"
                    : { xs: 0, md: "solid 1px rgba(0, 0, 0, 0.23)" }
            }
        },
        placeholder: "Поиск по каталогу",

        value: searchQuery,
        onChange: onSearchQueryChange,
        onKeyDown: onSearchEnter,

        InputProps: {
            endAdornment: (
                <Button {...buttonProps}>
                    <Search />
                </Button>
            ),
            sx: {
                padding: 0
            }
        }
    };

    return (
        <>
            <TextField {...searchBoxProps} />
            <SearchPopover
                searchQuery={searchQuery}
                anchorEl={searchPopoverAnchorEl}
                open={searchPopoverOpen}
                onClose={onPopoverClose}
                searchPage={searchPage}
            />
        </>
    );
};

export default SearchBoxTemplate;
