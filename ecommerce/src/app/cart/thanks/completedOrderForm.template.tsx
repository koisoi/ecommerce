import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import Title from "../../(shared)/title.template";
import TableTitle from "../../(shared)/tableTitle.template";

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
        maxWidth: "fit-content",

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
        width: "100%",
        maxWidth: "fit-content"
    };

    const titleProps: TypographyProps = {
        display: "inline"
    };

    const orderNumberProps: TypographyProps = {
        fontSize: "1.5rem",
        maxWidth: "fit-content"
    };

    return (
        <Box {...checkoutBoxProps}>
            <Typography {...orderNumberProps}>
                <Title props={titleProps}>Номер вашего заказа: </Title>
                {orderId}
            </Typography>
            <Box {...contactsBox}>
                <Typography>
                    <TableTitle props={titleProps}>ФИО:</TableTitle> {fullName}
                </Typography>
                <Typography>
                    <TableTitle props={titleProps}>E-mail:</TableTitle>{" "}
                    {email || "Не указан"}
                </Typography>
                <Typography>
                    <TableTitle props={titleProps}>Телефон:</TableTitle> {phone}
                </Typography>
            </Box>
            <Typography maxWidth="fit-content">
                <TableTitle props={titleProps}>Комментарий:</TableTitle>{" "}
                {commentary || "Отсутствует"}
            </Typography>
        </Box>
    );
};

export default CompletedOrderFormTemplate;
