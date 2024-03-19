import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import Title from "../../(shared)/text/title";
import TableTitle from "../../(shared)/text/tableTitle";

export type CompletedOrderFormProps = {
    fullName: string;
    email?: string;
    phone: string;
    commentary?: string;
    orderId: string;
};

const CompletedOrderFormTemplate = ({
    fullName,
    email,
    phone,
    commentary,
    orderId
}: CompletedOrderFormProps) => {
    const checkoutBoxProps: BoxProps = {
        position: "sticky",
        top: "60px",

        height: "fit-content",

        border: "1px solid",
        borderColor: "divider",

        padding: "1rem",

        display: "flex",
        flexDirection: "column",
        gap: "1rem"
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
        lineHeight: 1.2
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
