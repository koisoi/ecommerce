"use client";

import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    TextField,
    TextFieldProps,
    Typography,
    TypographyProps
} from "@mui/material";
import CartTable from "../(shared)/cartTable/cartTable";
import PageTitle from "../(shared)/pageTitle.template";
import { useThemeColors } from "@/lib";
import Title from "../(shared)/title.template";

const CartTemplate = () => {
    const colors = useThemeColors();

    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: "20px"
    };

    const leftBoxProps: BoxProps = {
        // width: "100%",
        flexGrow: 1
    };

    const checkoutBoxProps: BoxProps = {
        flexGrow: 1,

        position: "sticky",
        top: "60px",

        height: "fit-content",

        border: "1px solid",
        // borderRadius: "4px",
        borderColor: "divider",

        padding: "20px",
        paddingTop: 0,

        display: "flex",
        flexDirection: "column",
        gap: "20px"
    };

    const contactsBox: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%"
    };

    const inputProps: TextFieldProps = {
        variant: "outlined",
        sx: {
            flexGrow: 1
        }
    };

    const nameInputProps: TextFieldProps = {
        ...inputProps,
        label: "ФИО",
        required: true
    };

    const mailInputProps: TextFieldProps = {
        ...inputProps,
        label: "E-mail",
        type: "email"
    };

    const phoneInputProps: TextFieldProps = {
        ...inputProps,
        label: "Телефон",
        required: true
    };

    const commentaryInputProps: TextFieldProps = {
        ...inputProps,
        label: "Комментарий",
        multiline: true,
        rows: 4
    };

    const buttonProps: ButtonProps = {
        variant: "contained",
        fullWidth: true,

        sx: {
            textTransform: "none",
            fontSize: "1rem",
            boxShadow: "none",

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    const smallTextProps: TypographyProps = {
        fontSize: "0.7rem"
    };

    return (
        <>
            <PageTitle>Корзина</PageTitle>
            <Box {...wrapperProps}>
                <Box {...leftBoxProps}>
                    <CartTable full />
                </Box>
                <Box {...checkoutBoxProps}>
                    <Title>Форма заказа</Title>
                    <Box {...contactsBox}>
                        <TextField {...nameInputProps} />
                        <TextField {...mailInputProps} />
                        <TextField {...phoneInputProps} />
                    </Box>
                    <TextField {...commentaryInputProps} />
                    <Typography {...smallTextProps}>
                        * - поля, обязательные для заполнения
                    </Typography>
                    <Button {...buttonProps}>Оформить заказ</Button>
                </Box>
            </Box>
        </>
    );
};

export default CartTemplate;
