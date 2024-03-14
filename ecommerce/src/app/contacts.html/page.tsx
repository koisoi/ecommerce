import {
    BoxProps,
    LinkProps,
    Table,
    TableBody,
    TableCell,
    TableCellProps,
    TableHead,
    TableRow
} from "@mui/material";
import AppLink from "../(shared)/text/appLink.template";
import AttentionText from "../(shared)/text/attentionText.template";
import PageTitle from "../(shared)/text/pageTitle.template";
import TableTitle from "../(shared)/text/tableTitle.template";
import MetroStation from "./metro.template";
import Paragraph from "../(shared)/text/paragraph.template";
import Title from "../(shared)/text/title.template";
import ImageSwitcher from "./imageSwitcher";
import { contactsData } from "./contactsData";
import AppBreadcrumbs from "../(shared)/breadcrumbs/breadcrumbs.template";
import { contactsBreadcrumbs } from "@/lib";
import { Metadata } from "next";
import SectionContainer from "../(shared)/section.template";

export const metadata: Metadata = {
    title: "Контактная информация"
};

const ContactsTemplate = () => {
    const phoneLinksProps: LinkProps = {
        fontWeight: "bold",
        noWrap: true
    };

    const mailLinkProps: LinkProps = {
        sx: {
            textDecoration: "underline 1px"
        }
    };

    const upMdTableCellProps: TableCellProps = {
        sx: {
            display: { xs: "none", md: "table-cell" }
        }
    };

    return (
        <>
            <AppBreadcrumbs linksArray={contactsBreadcrumbs} />
            <PageTitle>Контактная информация</PageTitle>
            <SectionContainer>
                <SectionContainer level={1}>
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
                                <TableCell {...upMdTableCellProps}>
                                    <TableTitle>График работы</TableTitle>
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Paragraph>
                                        107113, Москва, ул. Сокольническая
                                        Слободка, д. 10{" "}
                                        <MetroStation>Сокольники</MetroStation>{" "}
                                        (вход с торца дома со стороны
                                        Сокольнического переулка)
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
                                <TableCell {...upMdTableCellProps} rowSpan={3}>
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
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Paragraph>
                                        603146, Нижний Новгород, ул. Саврасова,
                                        д. 32
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
                                        196084, Санкт-Петербург, ул. Заозерная,
                                        д. 3к2{" "}
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

                    <Table>
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
                                        Москва, ул. Сокольническая Слободка, д.
                                        10{" "}
                                        <MetroStation>Сокольники</MetroStation>
                                        (вход с торца дома со стороны
                                        Сокольнического переулка)
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

                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <TableTitle>
                                        Отдел розничных продаж
                                    </TableTitle>
                                </TableCell>
                                <TableCell>
                                    <Paragraph>
                                        <AppLink
                                            href="mailto:sales@telescope1.ru"
                                            props={mailLinkProps}
                                        >
                                            sales@telescope1.ru
                                        </AppLink>{" "}
                                        (продажи физическим лицам)
                                    </Paragraph>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TableTitle>
                                        Отдел корпоративных и оптовых продаж
                                    </TableTitle>
                                </TableCell>
                                <TableCell>
                                    <Paragraph>
                                        <AppLink
                                            href="mailto:corp@telescope1.ru"
                                            props={mailLinkProps}
                                        >
                                            corp@telescope1.ru
                                        </AppLink>{" "}
                                        (продажи юр. лицам, получение счета
                                        возможно через корзину)
                                    </Paragraph>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TableTitle>
                                        Отдел клиентского сервиса
                                    </TableTitle>
                                </TableCell>
                                <TableCell>
                                    <Paragraph>
                                        <AppLink
                                            href="mailto:service@telescope1.ru"
                                            props={mailLinkProps}
                                        >
                                            service@telescope1.ru
                                        </AppLink>{" "}
                                        (по вопросам гарантийного обслуживания,
                                        ремонта и возврата товара)
                                    </Paragraph>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TableTitle>Отдел закупок</TableTitle>
                                </TableCell>
                                <TableCell>
                                    <Paragraph>
                                        <AppLink
                                            href="mailto:pur@telescope1.ru"
                                            props={mailLinkProps}
                                        >
                                            pur@telescope1.ru
                                        </AppLink>{" "}
                                        (по вопросам предложений дилерства и
                                        дистрибуции)
                                    </Paragraph>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <TableTitle>Отдел маркетинга</TableTitle>
                                </TableCell>
                                <TableCell>
                                    <Paragraph>
                                        <AppLink
                                            href="mailto:marketing@telescope1.ru"
                                            props={mailLinkProps}
                                        >
                                            marketing@telescope1.ru
                                        </AppLink>{" "}
                                        (по вопросам рекламы и сотрудничества)
                                    </Paragraph>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </SectionContainer>

                <>
                    <Title>
                        Схема проезда в пункт выдачи Telescope1.ru в Москве
                    </Title>
                    <ImageSwitcher
                        mapElement={contactsData.moscowMap}
                        imageLinks={contactsData.moscowImageLinks}
                        alt="Магазин в Москве"
                    />
                </>

                <>
                    <Title>
                        Схема проезда в пункт выдачи Telescope1.ru в
                        Санкт-Петербурге
                    </Title>
                    <ImageSwitcher
                        mapElement={contactsData.spbMap}
                        imageLinks={contactsData.spbImageLinks}
                        alt="Магазин в Санкт-Петербурге"
                    />
                </>

                <>
                    <Title>
                        Схема проезда в пункт выдачи Telescope1.ru в Нижнем
                        Новгороде
                    </Title>
                    <ImageSwitcher
                        mapElement={contactsData.nnMap}
                        imageLinks={contactsData.nnImageLinks}
                        alt="Магазин в Нижнем Новгороде"
                    />
                </>

                <>
                    <Title>Юридическая информация</Title>
                    <Paragraph>ООО «1.ПРО»</Paragraph>
                    <Paragraph>ОГРН: 1135260010159</Paragraph>
                    <Paragraph>
                        Юридический адрес: 603146, Российская Федерация, Нижний
                        Новгород, ул. Саврасова, д. 32, литер Б, помещение 5
                    </Paragraph>
                </>
            </SectionContainer>
        </>
    );
};

export default ContactsTemplate;
