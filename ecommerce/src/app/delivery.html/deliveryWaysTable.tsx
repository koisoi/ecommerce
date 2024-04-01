import {
    LinkProps,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TypographyProps
} from "@mui/material";
import AttentionText from "../(shared)/text/attentionText";
import TableTitle from "../(shared)/text/tableTitle";
import Paragraph from "../(shared)/text/paragraph";

import YandexGo from "@/assets/svg/del-yandex-go.svg";
import { CSSProperties } from "react";
import { RussiaDelivery } from "./russiaDelivery";

export const DeliveryWaysTable = () => {
    const iconsStyling: CSSProperties = {
        verticalAlign: "middle",
        margin: "0 0.5rem"
    };

    return (
        <>
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
                            <RussiaDelivery />
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

            <AttentionText>
                Доставка по Москве (в пределах МКАД) и Санкт-Петербургу (в
                пределах КАД) курьером осуществляется бесплатно в тот же, либо
                на следующий рабочий день.
            </AttentionText>
        </>
    );
};
