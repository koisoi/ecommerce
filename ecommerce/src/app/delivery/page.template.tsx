import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TypographyProps
} from "@mui/material";
import Container from "../(shared)/container.template";
import PageTitle from "../(shared)/pageTitle.template";
import Title from "../(shared)/title.template";
import TableTitle from "../(shared)/tableTitle.template";
import Paragraph from "../(shared)/paragraph.template";
import AppLink from "../(shared)/appLink.template";

import YandexGo from "@/assets/svg/del-yandex-go.svg";
import PostRF from "@/assets/svg/del-postrf.svg";
import EMS from "@/assets/svg/del-ems.svg";
import DelLin from "@/assets/svg/del-dellin.svg";
import CDEK from "@/assets/svg/del-cdek.svg";
import Visa from "@/assets/svg/visa.svg";
import MasterCard from "@/assets/svg/mastercard.svg";
import Mir from "@/assets/svg/mir.svg";
import { Description } from "@mui/icons-material";
import { CSSProperties } from "react";
import AttentionText from "../(shared)/attentionText.template";

const DeliveryTemplate = () => {
    const underTableTextProps: TypographyProps = {
        paddingX: "15px",
        marginTop: "1rem",
        marginBottom: "2rem"
    };

    const linksProps: TypographyProps = {
        sx: {
            textDecoration: "underline 1px"
        }
    };

    const iconsStyling: CSSProperties = {
        verticalAlign: "middle",
        margin: "0 5px"
    };

    const resizedIconsStyling: CSSProperties = {
        ...iconsStyling,
        maxHeight: "15px"
    };

    const titleMarginProps: TypographyProps = {
        marginTop: "2rem"
    };

    return (
        <Container>
            <PageTitle>Доставка и оплата</PageTitle>

            <Title>Способы доставки</Title>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableTitle>Способ</TableTitle>
                        </TableCell>
                        <TableCell>
                            <TableTitle>Срок доставки</TableTitle>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                Пункт выдачи заказов: Москва, ул. Сокольническая
                                Слободка, д. 10
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <Paragraph>в день заказа,</Paragraph>
                            <Paragraph>
                                рабочие дни:{" "}
                                <AttentionText inline>
                                    10:00 - 19:00
                                </AttentionText>
                                , сб.:{" "}
                                <AttentionText inline>
                                    10:00 - 17:00
                                </AttentionText>
                                ,
                            </Paragraph>
                            <Paragraph>
                                вс.:{" "}
                                <AttentionText inline>выходной</AttentionText>
                            </Paragraph>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                Пункт выдачи заказов: Санкт-Петербург, ул.
                                Заозерная, д. 3к2
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <Paragraph>в день заказа,</Paragraph>
                            <Paragraph>
                                рабочие дни:{" "}
                                <AttentionText inline>
                                    10:00 - 19:00
                                </AttentionText>
                                , сб.:{" "}
                                <AttentionText inline>
                                    10:00 - 17:00
                                </AttentionText>
                                ,
                            </Paragraph>
                            <Paragraph>
                                вс.:{" "}
                                <AttentionText inline>выходной</AttentionText>
                            </Paragraph>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                Пункт выдачи заказов: Нижний Новгород, ул.
                                Саврасова, д. 32
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <Paragraph>в день заказа,</Paragraph>
                            <Paragraph>
                                рабочие дни:{" "}
                                <AttentionText inline>
                                    10:00 - 19:00
                                </AttentionText>
                                , сб.:{" "}
                                <AttentionText inline>
                                    10:00 - 17:00
                                </AttentionText>
                                ,
                            </Paragraph>
                            <Paragraph>
                                вс.:{" "}
                                <AttentionText inline>выходной</AttentionText>
                            </Paragraph>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                Собственная курьерская доставка по Москве
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <Paragraph>
                                в день заказа или на следующий день,
                            </Paragraph>
                            <Paragraph>
                                рабочие дни:{" "}
                                <AttentionText inline>
                                    10:00 - 19:00
                                </AttentionText>
                                ,
                            </Paragraph>
                            <Paragraph>
                                сб. - вс.:{" "}
                                <AttentionText inline>выходной</AttentionText>
                            </Paragraph>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                Собственная курьерская доставка по
                                Санкт-Петербургу
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <Paragraph>
                                в день заказа или на следующий день,
                            </Paragraph>
                            <Paragraph>
                                рабочие дни:{" "}
                                <AttentionText inline>
                                    10:00 - 19:00
                                </AttentionText>
                                ,
                            </Paragraph>
                            <Paragraph>
                                сб. - вс.:{" "}
                                <AttentionText inline>выходной</AttentionText>
                            </Paragraph>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                Доставка на такси (Yandex Go)
                                <YandexGo style={iconsStyling} />
                                по Москве, Санкт-Петербургу, Нижнему Новгороду
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <AttentionText>в течение 2-3 часов</AttentionText>
                            <Paragraph>
                                отправка осуществляется в часы работы пункта
                                выдачи заказов
                            </Paragraph>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                Доставка по России (
                                <AppLink
                                    href="http://www.dellin.ru/cities/"
                                    props={linksProps}
                                >
                                    Деловые линии
                                </AppLink>
                                ,{" "}
                                <AppLink
                                    href="http://www.emspost.ru/ru/tarifi_sroki/term/"
                                    props={linksProps}
                                >
                                    EMS Почта
                                </AppLink>
                                ,{" "}
                                <AppLink
                                    href="http://www.russianpost.ru/rp/filials/ru/home"
                                    props={linksProps}
                                >
                                    Почта России
                                </AppLink>
                                ,{" "}
                                <AppLink
                                    href="http://www.edostavka.ru/calculator.html"
                                    props={linksProps}
                                >
                                    СДЭК
                                </AppLink>
                                )
                            </Paragraph>
                            <Paragraph>
                                <PostRF />
                                <EMS />
                                <DelLin />
                                <CDEK />
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <Paragraph>
                                <AttentionText inline>2-5 дней</AttentionText>,
                                стоимость доставки зависит от веса и габаритов
                                заказа
                            </Paragraph>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <AttentionText props={underTableTextProps}>
                Доставка по Москве (в пределах МКАД) и Санкт-Петербургу (в
                пределах КАД) курьером Telescope1.ru при заказе от 10 000 p
                осуществляется бесплатно в тот же, либо на следующий рабочий
                день.
            </AttentionText>

            <Title>Способы оплаты</Title>

            <AttentionText>
                Оплата наличными, безналичная оплата для юр. лиц.
            </AttentionText>
            <ul>
                <li>
                    <Paragraph margin>
                        Оплата банковской картой{" "}
                        <Visa style={resizedIconsStyling} />
                        <MasterCard style={resizedIconsStyling} />
                        <Mir style={resizedIconsStyling} />
                    </Paragraph>
                </li>
                <li>
                    <Paragraph margin>
                        Квитанция на оплату через отделение банка
                        <Description sx={iconsStyling} />
                    </Paragraph>
                </li>
            </ul>
            <Paragraph margin>
                Оплата производится через платежный шлюз{" "}
                <AppLink href="http://alfabank.ru/" props={linksProps}>
                    Альфа-Банка
                </AppLink>
            </Paragraph>

            <Title props={titleMarginProps}>
                Оплата после получения и проверки товара
            </Title>

            <Paragraph>
                После того как Вы осмотрели покупку и убедились, что все в
                порядке, Вы платите курьеру наличными или картой.
            </Paragraph>
        </Container>
    );
};

export default DeliveryTemplate;