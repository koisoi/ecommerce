import { Box, BoxProps } from "@mui/material";
import TableTitle from "./text/tableTitle";
import { MetroStation } from "./metroStation";
import SectionContainer from "./sectionContainer";
import Title from "./text/title";
import { RussiaDelivery } from "./russiaDelivery";
import Paragraph from "./text/paragraph";

const DeliveryWays = () => {
    const wrapperProps: BoxProps = {
        width: "100%"
    };

    return (
        <Box {...wrapperProps}>
            <SectionContainer>
                <>
                    <Title>Способы получения товара:</Title>
                    <ul>
                        <li>
                            <Paragraph>
                                Получение товара в пункте выдачи
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Собственная курьерская доставка по Москве
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Собственная курьерская доставка по
                                Санкт-Петербургу
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Доставка на такси (Yandex Go) по Москве,
                                Санкт-Петербургу, Нижнему Новгороду
                            </Paragraph>
                        </li>
                        <li>
                            <RussiaDelivery noIcons />
                        </li>
                    </ul>
                </>
                <>
                    <Title>Пункты выдачи:</Title>
                    <TableTitle>Москва:</TableTitle>
                    <ul>
                        <li>
                            <Paragraph>
                                ул. Сокольническая Слободка, д. 10{" "}
                                <MetroStation>Сокольники</MetroStation>
                            </Paragraph>
                        </li>
                    </ul>
                    <TableTitle>Санкт-Петербург:</TableTitle>
                    <ul>
                        <li>
                            <Paragraph>
                                ул. Заозерная, д. 3к2{" "}
                                <MetroStation>Фрунзенская</MetroStation>
                            </Paragraph>
                        </li>
                    </ul>
                    <TableTitle>Нижний Новгород:</TableTitle>
                    <ul>
                        <li>
                            <Paragraph>ул. Саврасова, д. 32</Paragraph>
                        </li>
                    </ul>
                </>
                <>
                    <Title>Время работы:</Title>
                    <ul>
                        <li>
                            <Paragraph>пн-пт: 10:00 - 19:00</Paragraph>
                        </li>
                        <li>
                            <Paragraph>сб: 10:00 - 17:00</Paragraph>
                        </li>
                        <li>
                            <Paragraph>вс: выходной</Paragraph>
                        </li>
                    </ul>
                </>
            </SectionContainer>
        </Box>
    );
};

export default DeliveryWays;
