"use client";

import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import Title from "./text/title";
import TableTitle from "./text/tableTitle";
import { useMediaQueries } from "@/lib";

export type CompletedOrderFormProps = {
    fullName: string;
    email?: string;
    phone: string;
    commentary?: string;
    orderId: string;
    props?: BoxProps;
};

const CompletedOrderFormTemplate = ({
    fullName,
    email,
    phone,
    commentary,
    orderId,
    props
}: CompletedOrderFormProps) => {
    const screen = useMediaQueries();

    const checkoutBoxProps: BoxProps = {
        position: "sticky",
        top: "60px",

        height: "fit-content",

        border: "1px solid",
        borderColor: "divider",

        padding: "1rem",

        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        ...props
    };

    const contactsBox: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%"
    };

    const titleProps: TypographyProps = {
        display: "inline",
        lineHeight: 1
    };

    const orderNumberProps: TypographyProps = {
        fontSize: "1.5rem",
        maxWidth: "fit-content",
        lineHeight: 1.2,
        color: "text.dark",
        // noWrap: screen.sm ? true : false
        sx: {
            whiteSpace: { xs: "wrap", sm: "nowrap" }
        }
    };

    const paragraphProps: TypographyProps = {
        lineHeight: 1
    };

    return (
        <Box {...checkoutBoxProps}>
            <Typography {...orderNumberProps}>
                <Title props={titleProps}>Номер вашего заказа: </Title>
                {orderId}
            </Typography>
            <Box {...contactsBox}>
                <Typography {...paragraphProps}>
                    <TableTitle props={titleProps}>ФИО:</TableTitle> {fullName}
                </Typography>
                <Typography {...paragraphProps}>
                    <TableTitle props={titleProps}>E-mail:</TableTitle>{" "}
                    {email || "Не указан"}
                </Typography>
                <Typography {...paragraphProps}>
                    <TableTitle props={titleProps}>Телефон:</TableTitle> {phone}
                </Typography>
            </Box>
            <Typography {...paragraphProps} maxWidth="fit-content">
                <TableTitle props={titleProps}>Комментарий:</TableTitle>{" "}
                {commentary || "Отсутствует"}
            </Typography>
        </Box>
    );
};

export default CompletedOrderFormTemplate;
