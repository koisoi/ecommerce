import {
    LinkProps,
    Table,
    TableBody,
    TableCell,
    TableCellProps,
    TableHead,
    TableRow,
    TypographyProps
} from "@mui/material";
import AppLink from "../(shared)/text/appLink";
import AttentionText from "../(shared)/text/attentionText";
import PageTitle from "../(shared)/text/pageTitle";
import TableTitle from "../(shared)/text/tableTitle";
import { MetroStation } from "../(shared)/metroStation";
import Paragraph from "../(shared)/text/paragraph";
import Title from "../(shared)/text/title";
import ImageSwitcher from "../(shared)/imageSwitcher/imageSwitcher.client";
import { contactsData } from "./contactsData";
import BreadcrumbsTemplate from "../(shared)/breadcrumbsTemplate";
import {
    backendAPI,
    contactsBreadcrumbs,
    formatPhoneNumber,
    landingConfig
} from "@/lib";
import { Metadata } from "next";
import SectionContainer from "../(shared)/sectionContainer";
import PhoneLink from "../(shared)/text/phoneLinkTemplate";

export async function generateMetadata(): Promise<Metadata> {
    const response = await backendAPI.getSite();

    return {
        title: "Контактная информация",
        description: `Контактная информация магазина ${
            response.url || ""
        }. Для консультации и заказа звоните ${formatPhoneNumber(
            landingConfig.phoneNumber
        )}.`
    };
}

// export const metadata: Metadata = {
//     title: "Контактная информация",
//     description: `Контактная информация магазина ${landingConfig.landing_title} Для консультации и заказа звоните +7 (495) 085 17 00.`
// };

const ContactsPage = () => {
    const phoneLinksProps: LinkProps = {
        fontWeight: "bold"
        // color: "text.primary"
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

    const workingHoursProps: TypographyProps = {
        // noWrap: true
        sx: {
            whiteSpace: "nowrap"
        }
    };

    return (
        <>
            <BreadcrumbsTemplate linksArray={contactsBreadcrumbs} />
            <PageTitle>Контактная информация</PageTitle>
            <SectionContainer>
                <SectionContainer level={1}>
                    <AttentionText>
                        Телефон отдела продаж:{" "}
                        <PhoneLink
                            number={landingConfig.phoneNumber}
                            props={phoneLinksProps}
                        />
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
                                <TableCell rowSpan={3}>
                                    <PhoneLink
                                        number={landingConfig.phoneNumber}
                                        props={phoneLinksProps}
                                    />
                                </TableCell>
                                <TableCell {...upMdTableCellProps} rowSpan={3}>
                                    <Paragraph>
                                        пн-пт:{" "}
                                        <AttentionText
                                            inline
                                            props={workingHoursProps}
                                        >
                                            10:00 - 19:00
                                        </AttentionText>
                                    </Paragraph>
                                    <Paragraph>
                                        сб:{" "}
                                        <AttentionText
                                            inline
                                            props={workingHoursProps}
                                        >
                                            10:00 - 17:00
                                        </AttentionText>
                                    </Paragraph>
                                    <Paragraph>
                                        вс:{" "}
                                        <AttentionText
                                            inline
                                            props={workingHoursProps}
                                        >
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
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Paragraph>
                                        196084, Санкт-Петербург, ул. Заозерная,
                                        д. 3к2{" "}
                                        <MetroStation>Фрунзенская</MetroStation>
                                    </Paragraph>
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
                                    <PhoneLink
                                        number="+74950858075"
                                        props={phoneLinksProps}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Paragraph>
                                        пн-пт:{" "}
                                        <AttentionText
                                            inline
                                            props={workingHoursProps}
                                        >
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
                    <Title>Схема проезда в пункт выдачи в Москве</Title>
                    <ImageSwitcher
                        mapElement={contactsData.moscowMap}
                        imageLinks={contactsData.moscowImageLinks}
                        alt="Магазин в Москве"
                    />
                </>

                <>
                    <Title>
                        Схема проезда в пункт выдачи в Санкт-Петербурге
                    </Title>
                    <ImageSwitcher
                        mapElement={contactsData.spbMap}
                        imageLinks={contactsData.spbImageLinks}
                        alt="Магазин в Санкт-Петербурге"
                    />
                </>

                <>
                    <Title>
                        Схема проезда в пункт выдачи в Нижнем Новгороде
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

export default ContactsPage;
