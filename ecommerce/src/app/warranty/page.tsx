import {
    Box,
    BoxProps,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableProps,
    TableRow,
    Typography,
    TypographyProps
} from "@mui/material";
import PageTitle from "../(shared)/text/pageTitle.template";
import TableTitle from "../(shared)/text/tableTitle.template";
import Paragraph from "../(shared)/text/paragraph.template";
import AppLink from "../(shared)/text/appLink.template";
import Title from "../(shared)/text/title.template";

const WarrantyPage = () => {
    const warrantyBoxProps: BoxProps = {
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.12)", // + theme.palette.divider, //colors.divider,

        width: "100%",
        boxSizing: "border-box",
        padding: "30px",
        marginBottom: "2rem",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px"
    };

    const titleProps: TypographyProps = {
        paddingTop: 0,
        fontSize: { xs: "1.2rem", sm: "1.5rem" }
    };

    const tableProps: TableProps = {
        sx: {
            marginBottom: "2rem"
        }
    };

    const blockBoxProps: BoxProps = {
        paddingX: "15px"
    };

    return (
        <>
            <PageTitle>Гарантии и возврат</PageTitle>

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

            <Table {...tableProps}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableTitle>
                                Возврат товара надлежащего качества
                            </TableTitle>
                        </TableCell>
                        <TableCell>
                            <TableTitle>
                                Возврат товара ненадлежащего качества
                            </TableTitle>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                Можно вернуть товар надлежащего качества при
                                соблюдении следующих условий:
                            </Paragraph>
                            <Box marginTop="0.9rem">
                                <ul>
                                    <li>
                                        <Paragraph>
                                            Прошло не более 14-ти дней с момента
                                            приобретения товара, не считая дня
                                            его покупки;
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph>
                                            Сохранен товарный вид самого товара
                                            и его упаковки;
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph>
                                            Полностью сохранена комплектация
                                            товара (включая буклеты, инструкции
                                            и вторичную упаковку);
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph>
                                            У покупателя есть кассовый и
                                            товарный чеки, подтверждающие
                                            покупку.
                                        </Paragraph>
                                    </li>
                                </ul>
                            </Box>
                            <Paragraph margin>
                                В случае, если в ассортименте не нашлось
                                подходящего товара на замену, возможен возврат
                                денег в течение 3-х дней с момента поступления
                                требования покупателя.
                            </Paragraph>
                            <Paragraph margin>
                                Подробнее см. статью 25 закона &quot;О защите
                                прав потребителя&quot;.
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <Paragraph>
                                Товар ненадлежащего качества (в котором выявлен
                                существенный неустранимый недостаток, возникший
                                до момента передачи товара покупателю)
                                принимается к возврату в течение гарантийного
                                срока предоставляемого производителем.
                            </Paragraph>
                            <Paragraph margin>
                                В случае возникновения спорных ситуаций о
                                причинах возникновения существенного недостака,
                                назначается проверка товара.
                            </Paragraph>
                            <Paragraph margin>
                                Проверка товара ненадлежащего качества
                                производится в срок до 20-ти дней, а технически
                                сложного товара до 45-ти дней.
                            </Paragraph>
                            <Paragraph margin>
                                Замена товара ненадлежащего качества
                                осуществляется в срок до 7-ми дней, а возврат
                                денег в течение 10-ти дней после выставления
                                требования, либо проведения проверки (если она
                                была назначена).
                            </Paragraph>
                            <Paragraph margin>
                                Подробнее см. статьи 18-24 закона &quot;О защите
                                прав потребителя&quot;.
                            </Paragraph>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Title props={titleProps}>
                Возврат товара, полученного транспортной компанией
            </Title>

            <Box {...blockBoxProps}>
                <Paragraph margin>Необходимо сделать следующее:</Paragraph>
                <Box marginTop="0.9rem">
                    <ol>
                        <li>
                            <Paragraph>
                                Позвонить по телефону{" "}
                                <AppLink
                                    href="tel:88007078195"
                                    props={{ fontWeight: "bold" }}
                                >
                                    8 (800) 707-81-95
                                </AppLink>
                                , сообщить менеджеру магазина о возникшей
                                проблеме и согласовать способ отправки товара;
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Отправить товар согласованным способом.
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Оплата доставки при возврате товара весом до 5
                                кг осуществляется покупателем. В противном
                                случае, продавцом.
                            </Paragraph>
                        </li>
                    </ol>
                </Box>
                <Paragraph margin>
                    Все сроки исчисляются с момента получения товара в
                    транспортной компании.
                </Paragraph>
            </Box>
        </>
    );
};

export default WarrantyPage;
