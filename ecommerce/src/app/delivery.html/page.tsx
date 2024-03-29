import {
    LinkProps,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TypographyProps
} from "@mui/material";
import PageTitle from "../(shared)/text/pageTitle";
import Title from "../(shared)/text/title";
import TableTitle from "../(shared)/text/tableTitle";
import Paragraph from "../(shared)/text/paragraph";
import AppLink from "../(shared)/text/appLink";

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
import AttentionText from "../(shared)/text/attentionText";
import BreadcrumbsTemplate from "../(shared)/breadcrumbsTemplate";
import {
    backendAPI,
    deliveryBreadcrumbs,
    formatPhoneNumber,
    landingConfig
} from "@/lib";
import { Metadata } from "next";
import SectionContainer from "../(shared)/sectionContainer";

export async function generateMetadata(): Promise<Metadata> {
    const response = await backendAPI.getSite();

    return {
        title: "Доставка и оплата",
        description: `Информация о доставке и способах оплаты тепловизионного оборудования в магазине ${
            response.url || ""
        }. По вопросам оплаты и доставки звоните ${formatPhoneNumber(
            landingConfig.phoneNumber
        )}.`
    };
}

// export const metadata: Metadata = {
//     title: "Доставка и оплата"
// };

const DeliveryPage = () => {
    const linksProps: LinkProps = {
        sx: {
            textDecoration: "underline 1px"
        }
    };

    const iconsStyling: CSSProperties = {
        verticalAlign: "middle",
        margin: "0 0.5rem"
    };

    const resizedIconsStyling: CSSProperties = {
        ...iconsStyling,
        maxHeight: "1rem"
    };

    const iconsWrapperProps: TypographyProps = {
        display: "inline-flex",
        gap: "0.5rem"
    };

    return (
        <>
            <BreadcrumbsTemplate linksArray={deliveryBreadcrumbs} />
            <PageTitle>Доставка и оплата</PageTitle>

            <SectionContainer>
                <>
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
                                        Пункт выдачи заказов: Москва, ул.
                                        Сокольническая Слободка, д. 10
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
                                        <AttentionText inline>
                                            выходной
                                        </AttentionText>
                                    </Paragraph>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Paragraph>
                                        Пункт выдачи заказов: Санкт-Петербург,
                                        ул. Заозерная, д. 3к2
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
                                        <AttentionText inline>
                                            выходной
                                        </AttentionText>
                                    </Paragraph>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Paragraph>
                                        Пункт выдачи заказов: Нижний Новгород,
                                        ул. Саврасова, д. 32
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
                                        <AttentionText inline>
                                            выходной
                                        </AttentionText>
                                    </Paragraph>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Paragraph>
                                        Собственная курьерская доставка по
                                        Москве
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
                                        <AttentionText inline>
                                            выходной
                                        </AttentionText>
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
                                        <AttentionText inline>
                                            выходной
                                        </AttentionText>
                                    </Paragraph>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Paragraph>
                                        Доставка на такси (Yandex Go)
                                        <YandexGo style={iconsStyling} />
                                        по Москве, Санкт-Петербургу, Нижнему
                                        Новгороду
                                    </Paragraph>
                                </TableCell>
                                <TableCell>
                                    <AttentionText>
                                        в течение 2-3 часов
                                    </AttentionText>
                                    <Paragraph>
                                        отправка осуществляется в часы работы
                                        пункта выдачи заказов
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
                                    <Paragraph props={iconsWrapperProps}>
                                        <PostRF />
                                        <EMS />
                                        <DelLin />
                                        <CDEK />
                                    </Paragraph>
                                </TableCell>
                                <TableCell>
                                    <Paragraph>
                                        <AttentionText inline>
                                            2-5 дней
                                        </AttentionText>
                                        , стоимость доставки зависит от веса и
                                        габаритов заказа
                                    </Paragraph>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <AttentionText>
                        Доставка по Москве (в пределах МКАД) и Санкт-Петербургу
                        (в пределах КАД) курьером осуществляется бесплатно в тот
                        же, либо на следующий рабочий день.
                    </AttentionText>
                </>

                <>
                    <Title>Способы оплаты</Title>

                    <AttentionText>
                        Оплата наличными, безналичная оплата для юр. лиц.
                    </AttentionText>
                    <ul>
                        <li>
                            <Paragraph>
                                Оплата банковской картой{" "}
                                <Visa style={resizedIconsStyling} />
                                <MasterCard style={resizedIconsStyling} />
                                <Mir style={resizedIconsStyling} />
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Квитанция на оплату через отделение банка
                                <Description sx={iconsStyling} />
                            </Paragraph>
                        </li>
                    </ul>
                    <Paragraph>
                        Оплата производится через платежный шлюз{" "}
                        <AppLink href="http://alfabank.ru/" props={linksProps}>
                            Альфа-Банка
                        </AppLink>
                    </Paragraph>
                </>

                <>
                    <Title>Оплата после получения и проверки товара</Title>

                    <Paragraph>
                        После того как Вы осмотрели покупку и убедились, что все
                        в порядке, Вы платите курьеру наличными или картой.
                    </Paragraph>
                </>
            </SectionContainer>
        </>
    );
};

export default DeliveryPage;
