"use client";

import {
    BoxProps,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableProps,
    TableRow,
    TypographyProps
} from "@mui/material";
import AppLink from "../(shared)/text/appLink.template";
import AttentionText from "../(shared)/text/attentionText.template";
import PageTitle from "../(shared)/text/pageTitle.template";
import TableTitle from "../(shared)/text/tableTitle.template";
import MetroStation from "./metro.template";
import Paragraph from "../(shared)/text/paragraph.template";
import { useMediaQueries } from "@/lib";
import Title from "../(shared)/text/title.template";
import ImageSwitcher from "./imageSwitcher";

const ContactsTemplate = ({
    moscowMap,
    spbMap,
    nnMap,
    moscowImageLinks,
    spbImageLinks,
    nnImageLinks
}: {
    moscowMap: string;
    spbMap: string;
    nnMap: string;
    moscowImageLinks: string[];
    spbImageLinks: string[];
    nnImageLinks: string[];
}) => {
    const screen = useMediaQueries();

    const phoneLinksProps: TypographyProps = {
        fontWeight: "bold",
        noWrap: true
    };

    const tableProps: TableProps = {
        sx: {
            marginBottom: "2rem"
        }
    };

    const marginBottomProps: TypographyProps & BoxProps = {
        marginBottom: "2rem"
    };

    const mailLinkProps: TypographyProps = {
        sx: {
            textDecoration: "underline 1px"
        }
    };

    return (
        <>
            <PageTitle>Контактная информация</PageTitle>

            <AttentionText>
                Бесплатный звонок по России:{" "}
                <AppLink href="tel:88007078195" props={phoneLinksProps}>
                    8 (800) 707-81-95
                </AppLink>
            </AttentionText>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableTitle>Пункт выдачи</TableTitle>
                        </TableCell>
                        <TableCell>
                            <TableTitle>Номер телефона</TableTitle>
                        </TableCell>
                        {screen.md && (
                            <TableCell>
                                <TableTitle>График работы</TableTitle>
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                107113, Москва, ул. Сокольническая Слободка, д.
                                10 <MetroStation>Сокольники</MetroStation> (вход
                                с торца дома со стороны Сокольнического
                                переулка)
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <AppLink
                                href="tel:+74951510900"
                                props={phoneLinksProps}
                            >
                                +7 (495) 151-09-00
                            </AppLink>
                        </TableCell>
                        {screen.md && (
                            <TableCell rowSpan={3}>
                                <Paragraph>
                                    пн-пт:{" "}
                                    <AttentionText inline>
                                        10:00 - 19:00
                                    </AttentionText>
                                </Paragraph>
                                <Paragraph>
                                    сб:{" "}
                                    <AttentionText inline>
                                        10:00 - 17:00
                                    </AttentionText>
                                </Paragraph>
                                <Paragraph>
                                    вс:{" "}
                                    <AttentionText inline>
                                        выходной
                                    </AttentionText>
                                </Paragraph>
                            </TableCell>
                        )}
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                603146, Нижний Новгород, ул. Саврасова, д. 32
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <AppLink
                                href="tel:+78312156667"
                                props={phoneLinksProps}
                            >
                                +7 (831) 215-66-67
                            </AppLink>
                        </TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                196084, Санкт-Петербург, ул. Заозерная, д. 3к2{" "}
                                <MetroStation>Фрунзенская</MetroStation>
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <AppLink
                                href="+78125011013"
                                props={phoneLinksProps}
                            >
                                +7 (812) 501-10-13
                            </AppLink>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Table {...tableProps}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <TableTitle>Сервисный центр</TableTitle>
                        </TableCell>
                        <TableCell>
                            <TableTitle>Номер телефона</TableTitle>
                        </TableCell>
                        <TableCell>
                            <TableTitle>График работы</TableTitle>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Paragraph>
                                Москва, ул. Сокольническая Слободка, д. 10{" "}
                                <MetroStation>Сокольники</MetroStation>
                                (вход с торца дома со стороны Сокольнического
                                переулка)
                            </Paragraph>
                        </TableCell>
                        <TableCell>
                            <AppLink
                                href="tel:+74950858075"
                                props={phoneLinksProps}
                            >
                                +7 (495) 085-80-75
                            </AppLink>
                        </TableCell>
                        <TableCell>
                            <Paragraph>
                                пн-пт:{" "}
                                <AttentionText inline>
                                    10:00 - 18:00
                                </AttentionText>
                            </Paragraph>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Paragraph>
                <Table {...tableProps}>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <TableTitle>Отдел розничных продаж</TableTitle>
                            </TableCell>
                            <TableCell>
                                <AppLink
                                    href="mailto:sales@telescope1.ru"
                                    props={mailLinkProps}
                                >
                                    sales@telescope1.ru
                                </AppLink>{" "}
                                (продажи физическим лицам)
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <TableTitle>
                                    Отдел корпоративных и оптовых продаж
                                </TableTitle>
                            </TableCell>
                            <TableCell>
                                <AppLink
                                    href="mailto:corp@telescope1.ru"
                                    props={mailLinkProps}
                                >
                                    corp@telescope1.ru
                                </AppLink>{" "}
                                (продажи юр. лицам, получение счета возможно
                                через корзину)
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <TableTitle>
                                    Отдел клиентского сервиса
                                </TableTitle>
                            </TableCell>
                            <TableCell>
                                <AppLink
                                    href="mailto:service@telescope1.ru"
                                    props={mailLinkProps}
                                >
                                    service@telescope1.ru
                                </AppLink>{" "}
                                (по вопросам гарантийного обслуживания, ремонта
                                и возврата товара)
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <TableTitle>Отдел закупок</TableTitle>
                            </TableCell>
                            <TableCell>
                                <AppLink
                                    href="mailto:pur@telescope1.ru"
                                    props={mailLinkProps}
                                >
                                    pur@telescope1.ru
                                </AppLink>{" "}
                                (по вопросам предложений дилерства и
                                дистрибуции)
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <TableTitle>Отдел маркетинга</TableTitle>
                            </TableCell>
                            <TableCell>
                                <AppLink
                                    href="mailto:marketing@telescope1.ru"
                                    props={mailLinkProps}
                                >
                                    marketing@telescope1.ru
                                </AppLink>{" "}
                                (по вопросам рекламы и сотрудничества)
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paragraph>

            <Title props={marginBottomProps}>
                Схема проезда в пункт выдачи Telescope1.ru в Москве
            </Title>
            <ImageSwitcher
                mapElement={moscowMap}
                imageLinks={moscowImageLinks}
                alt="Магазин в Москве"
                wrapperProps={marginBottomProps}
            />

            <Title props={marginBottomProps}>
                Схема проезда в пункт выдачи Telescope1.ru в Санкт-Петербурге
            </Title>
            <ImageSwitcher
                mapElement={spbMap}
                imageLinks={spbImageLinks}
                alt="Магазин в Санкт-Петербурге"
                wrapperProps={marginBottomProps}
            />

            <Title props={marginBottomProps}>
                Схема проезда в пункт выдачи Telescope1.ru в Нижнем Новгороде
            </Title>
            <ImageSwitcher
                mapElement={nnMap}
                imageLinks={nnImageLinks}
                alt="Магазин в Нижнем Новгороде"
                wrapperProps={marginBottomProps}
            />

            <Title>Юридическая информация</Title>
            <Paragraph>ООО «1.ПРО»</Paragraph>
            <Paragraph>ОГРН: 1135260010159</Paragraph>
            <Paragraph>
                Юридический адрес: 603146, Российская Федерация, Нижний
                Новгород, ул. Саврасова, д. 32, литер Б, помещение 5
            </Paragraph>
        </>
    );
};

export default ContactsTemplate;
