"use client";

import { Search } from "@mui/icons-material";
import { Button, ButtonProps, TextField, TextFieldProps } from "@mui/material";

const HeaderSearchBox = () => {
    const buttonProps: ButtonProps = {
        variant: "contained",
        size: "small",

        sx: {
            minHeight: "40px",
            minWidth: "0",
            borderRadius: "0 4px 4px 0"
        }
    };

    const searchBoxProps: TextFieldProps = {
        variant: "outlined",

        size: "small",
        fullWidth: true,
        sx: {
            maxWidth: { sm: "220px", md: "380px", xl: "420px" },
            minWidth: { sm: "220px", md: "380px", xl: "420px" },
            display: { xs: "none", sm: "block" }
        },
        placeholder: "Поиск по каталогу",

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

    return <TextField {...searchBoxProps} />;
};

export default HeaderSearchBox;
