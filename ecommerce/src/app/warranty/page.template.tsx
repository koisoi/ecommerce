import {
    Box,
    BoxProps,
    Table,
    TableBody,
    TableCell,
    TableCellProps,
    TableHead,
    TableRow,
    Typography,
    TypographyProps
} from "@mui/material";
import Container from "../(shared)/container.template";
import PageTitle from "../(shared)/pageTitle.template";
import Title from "../(shared)/title.template";

const WarrantyPageTemplate = () => {
    const warrantyBoxProps: BoxProps = {
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 15px 4px rgba(153, 153, 153, 0.2)",

        width: "100%",
        boxSizing: "border-box",
        padding: "30px",
        marginBottom: "2rem",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        gap: "10px"
    };

    const titleProps: TypographyProps = {
        paddingTop: 0,
        fontSize: "1.5rem"
    };

    const tableTitleProps: TypographyProps = {
        fontWeight: "bold"
    };

    return (
        <Container>
            <PageTitle props={{ marginBottom: "1rem" }}>
                Гарантии и возврат
            </PageTitle>
            <Box {...warrantyBoxProps}>
                <Title props={titleProps}>
                    Какие вы предоставляете гарантии?
                </Title>
                <Typography>
                    На все продаваемые товары действует гарантия производителя.
                    Гарантийные сроки могут варьироваться от одного года до
                    десятков лет. На некоторые товары действует пожизненная
                    гарантия.
                </Typography>
                <Typography>
                    Гарантийный ремонт и замена могут осуществляться как через
                    сервисный центр Telescope1.ru, так и через авторизованные
                    сервисные центры производителей.
                </Typography>
                <Typography>
                    Гарантийный срок можно найти на странице каждого товара,
                    либо можно уточнить его у менеджера магазина.
                </Typography>
            </Box>
            <Title props={titleProps}>Как вернуть товар?</Title>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography {...tableTitleProps}>
                                Возврат товара надлежащего качества
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography {...tableTitleProps}>
                                Возврат товара ненадлежащего качества
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography>
                                Можно вернуть товар надлежащего качества при
                                соблюдении следующих условий:
                            </Typography>
                            <ul>
                                <li>
                                    Прошло не более 14-ти дней с момента
                                    приобретения товара, не считая дня его
                                    покупки;
                                </li>
                                <li>
                                    Сохранен товарный вид самого товара и его
                                    упаковки;
                                </li>
                                <li>
                                    Полностью сохранена комплектация товара
                                    (включая буклеты, инструкции и вторичную
                                    упаковку);
                                </li>
                                <li>
                                    У покупателя есть кассовый и товарный чеки,
                                    подтверждающие покупку.
                                </li>
                            </ul>
                            <Typography>
                                В случае, если в ассортименте не нашлось
                                подходящего товара на замену, возможен возврат
                                денег в течение 3-х дней с момента поступления
                                требования покупателя.
                            </Typography>
                            <Typography>
                                Подробнее см. статью 25 закона &quot;О защите
                                прав потребителя&quot;.
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                Товар ненадлежащего качества (в котором выявлен
                                существенный неустранимый недостаток, возникший
                                до момента передачи товара покупателю)
                                принимается к возврату в течение гарантийного
                                срока предоставляемого производителем.
                            </Typography>
                            <Typography>
                                В случае возникновения спорных ситуаций о
                                причинах возникновения существенного недостака,
                                назначается проверка товара.
                            </Typography>
                            <Typography>
                                Проверка товара ненадлежащего качества
                                производится в срок до 20-ти дней, а технически
                                сложного товара до 45-ти дней.
                            </Typography>
                            <Typography>
                                Замена товара ненадлежащего качества
                                осуществляется в срок до 7-ми дней, а возврат
                                денег в течение 10-ти дней после выставления
                                требования, либо проведения проверки (если она
                                была назначена).
                            </Typography>
                            <Typography>
                                Подробнее см. статьи 18-24 закона &quot;О защите
                                прав потребителя&quot;.
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container>
    );
};

export default WarrantyPageTemplate;
