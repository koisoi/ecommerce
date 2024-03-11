import {
    Box,
    BoxProps,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableProps,
    TableRow,
    TypographyProps
} from "@mui/material";
import PageTitle from "../(shared)/text/pageTitle.template";
import TableTitle from "../(shared)/text/tableTitle.template";
import Paragraph from "../(shared)/text/paragraph.template";
import AppLink from "../(shared)/text/appLink.template";
import Title from "../(shared)/text/title.template";
import AppBreadcrumbs from "../(shared)/breadcrumbs/breadcrumbs.template";
import { warrantyBreadcrumbs } from "@/lib";
import { Metadata } from "next";
import { landingConfig } from "@/lib/data/config";
import SectionContainer from "../(shared)/section.template";

export const metadata: Metadata = {
    title: "Гарантии и возврат"
};

const WarrantyPage = () => {
    const warrantyBoxProps: BoxProps = {
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: `0 0 15px 1px ${landingConfig.colors.divider}`,

        width: "100%",
        boxSizing: "border-box",
        padding: "2rem",
        // marginTop: { xs: "1rem", md: "2rem" },

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1rem"
    };

    const tableProps: TableProps = {
        sx: {
            tableLayout: "fixed",
            ".MuiTableCell-root": {
                paddingLeft: "0 !important"
            }
        }
    };

    return (
        <>
            <AppBreadcrumbs linksArray={warrantyBreadcrumbs} />
            <PageTitle>Гарантии и возврат</PageTitle>
            <SectionContainer>
                {[
                    <Box {...warrantyBoxProps} key={0}>
                        <Title>Какие вы предоставляете гарантии?</Title>
                        <Paragraph>
                            На все продаваемые товары действует гарантия
                            производителя. Гарантийные сроки могут варьироваться
                            от одного года до десятков лет. На некоторые товары
                            действует пожизненная гарантия.
                        </Paragraph>
                        <Paragraph>
                            Гарантийный ремонт и замена могут осуществляться как
                            через сервисный центр Telescope1.ru, так и через
                            авторизованные сервисные центры производителей.
                        </Paragraph>
                        <Paragraph>
                            Гарантийный срок можно найти на странице каждого
                            товара, либо можно уточнить его у менеджера
                            магазина.
                        </Paragraph>
                    </Box>,
                    <>
                        <Title>Как вернуть товар?</Title>

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
                                            Возврат товара ненадлежащего
                                            качества
                                        </TableTitle>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Paragraph>
                                            Можно вернуть товар надлежащего
                                            качества при соблюдении следующих
                                            условий:
                                        </Paragraph>
                                        <Box>
                                            <ul>
                                                <li>
                                                    <Paragraph>
                                                        Прошло не более 14-ти
                                                        дней с момента
                                                        приобретения товара, не
                                                        считая дня его покупки;
                                                    </Paragraph>
                                                </li>
                                                <li>
                                                    <Paragraph>
                                                        Сохранен товарный вид
                                                        самого товара и его
                                                        упаковки;
                                                    </Paragraph>
                                                </li>
                                                <li>
                                                    <Paragraph>
                                                        Полностью сохранена
                                                        комплектация товара
                                                        (включая буклеты,
                                                        инструкции и вторичную
                                                        упаковку);
                                                    </Paragraph>
                                                </li>
                                                <li>
                                                    <Paragraph>
                                                        У покупателя есть
                                                        кассовый и товарный
                                                        чеки, подтверждающие
                                                        покупку.
                                                    </Paragraph>
                                                </li>
                                            </ul>
                                        </Box>
                                        <Paragraph>
                                            В случае, если в ассортименте не
                                            нашлось подходящего товара на
                                            замену, возможен возврат денег в
                                            течение 3-х дней с момента
                                            поступления требования покупателя.
                                        </Paragraph>
                                        <Paragraph>
                                            Подробнее см. статью 25 закона
                                            &quot;О защите прав
                                            потребителя&quot;.
                                        </Paragraph>
                                    </TableCell>
                                    <TableCell>
                                        <Paragraph>
                                            Товар ненадлежащего качества (в
                                            котором выявлен существенный
                                            неустранимый недостаток, возникший
                                            до момента передачи товара
                                            покупателю) принимается к возврату в
                                            течение гарантийного срока
                                            предоставляемого производителем.
                                        </Paragraph>
                                        <Paragraph>
                                            В случае возникновения спорных
                                            ситуаций о причинах возникновения
                                            существенного недостака, назначается
                                            проверка товара.
                                        </Paragraph>
                                        <Paragraph>
                                            Проверка товара ненадлежащего
                                            качества производится в срок до
                                            20-ти дней, а технически сложного
                                            товара до 45-ти дней.
                                        </Paragraph>
                                        <Paragraph>
                                            Замена товара ненадлежащего качества
                                            осуществляется в срок до 7-ми дней,
                                            а возврат денег в течение 10-ти дней
                                            после выставления требования, либо
                                            проведения проверки (если она была
                                            назначена).
                                        </Paragraph>
                                        <Paragraph>
                                            Подробнее см. статьи 18-24 закона
                                            &quot;О защите прав
                                            потребителя&quot;.
                                        </Paragraph>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </>,
                    <>
                        <Title>
                            Возврат товара, полученного транспортной компанией
                        </Title>

                        <Box>
                            <Paragraph>Необходимо сделать следующее:</Paragraph>
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
                                        , сообщить менеджеру магазина о
                                        возникшей проблеме и согласовать способ
                                        отправки товара;
                                    </Paragraph>
                                </li>
                                <li>
                                    <Paragraph>
                                        Отправить товар согласованным способом.
                                    </Paragraph>
                                </li>
                                <li>
                                    <Paragraph>
                                        Оплата доставки при возврате товара
                                        весом до 5 кг осуществляется
                                        покупателем. В противном случае,
                                        продавцом.
                                    </Paragraph>
                                </li>
                            </ol>
                            <Paragraph>
                                Все сроки исчисляются с момента получения товара
                                в транспортной компании.
                            </Paragraph>
                        </Box>
                    </>
                ]}
            </SectionContainer>
        </>
    );
};

export default WarrantyPage;