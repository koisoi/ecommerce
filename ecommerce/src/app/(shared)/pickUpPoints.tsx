import { Box, BoxProps } from "@mui/material";
import TableTitle from "./text/tableTitle";
import { MetroStation } from "./metroStation";
import SectionContainer from "./sectionContainer";
import Title from "./text/title";
import { RussiaDelivery } from "./russiaDelivery";
import YandexGo from "@/assets/svg/del-yandex-go.svg";
import { CSSProperties } from "react";

const PickUpPoints = () => {
    const wrapperProps: BoxProps = {
        width: "100%"
    };

    const iconsStyling: CSSProperties = {
        verticalAlign: "middle",
        margin: "0 0.5rem"
    };

    return (
        <Box {...wrapperProps}>
            <SectionContainer>
                <>
                    <Title>Способы получения товара:</Title>
                    <ul>
                        <li>Получение товара в пункте выдачи</li>
                        <li>Собственная курьерская доставка по Москве</li>
                        <li>
                            Собственная курьерская доставка по Санкт-Петербургу
                        </li>
                        <li>
                            Доставка на такси (Yandex Go)
                            <YandexGo style={iconsStyling} />
                            по Москве, Санкт-Петербургу, Нижнему Новгороду
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
                            ул. Сокольническая Слободка, д. 10{" "}
                            <MetroStation>Сокольники</MetroStation>
                        </li>
                    </ul>
                    <TableTitle>Санкт-Петербург:</TableTitle>
                    <ul>
                        <li>
                            ул. Заозерная, д. 3к2{" "}
                            <MetroStation>Фрунзенская</MetroStation>
                        </li>
                    </ul>
                    <TableTitle>Нижний Новгород:</TableTitle>
                    <ul>
                        <li>ул. Саврасова, д. 32</li>
                    </ul>
                </>
                <>
                    <Title>Время работы:</Title>
                    <ul>
                        <li>пн-пт: 10:00 - 19:00</li>
                        <li>сб: 10:00 - 17:00</li>
                        <li>вс: выходной</li>
                    </ul>
                </>
            </SectionContainer>
        </Box>
    );
};

export default PickUpPoints;
