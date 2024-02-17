import { Box, BoxProps, Typography } from "@mui/material";
import Title from "../(shared)/title.template";

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

    return (
        <Box {...checkoutBoxProps}>
            <Title>Форма заказа</Title>
            <Box {...contactsBox}>
                <Typography>ФИО: {fullName}</Typography>
                <Typography>E-mail: {email || "Не указан"}</Typography>
                <Typography>Телефон: {phone}</Typography>
            </Box>
            <Typography>Комментарий: {commentary || "Отсутствует"}</Typography>
            <Typography>Номер заказа: {orderId}</Typography>
        </Box>
    );
};

export default CompletedOrderFormTemplate;
