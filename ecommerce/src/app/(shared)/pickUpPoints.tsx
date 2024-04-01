import { Box, BoxProps } from "@mui/material";
import TableTitle from "./text/tableTitle";
import { MetroStation } from "./metroStation";
import SectionContainer from "./sectionContainer";

const PickUpPoints = () => {
    const wrapperProps: BoxProps = {
        width: "100%"
    };

    return (
        <Box {...wrapperProps}>
            <SectionContainer>
                <>
                    <TableTitle>Москва:</TableTitle>
                    <ul>
                        <li>
                            ул. Сокольническая Слободка, д. 10{" "}
                            <MetroStation>Сокольники</MetroStation>
                        </li>
                        {/* <li>пн-пт: 10:00 - 19:00</li>
                <li>сб: 10:00 - 17:00</li>
                <li>вс: выходной</li> */}
                    </ul>
                </>
                <>
                    <TableTitle>Санкт-Петербург:</TableTitle>
                    <ul>
                        <li>
                            ул. Заозерная, д. 3к2{" "}
                            <MetroStation>Фрунзенская</MetroStation>
                        </li>
                    </ul>
                </>
                <>
                    <TableTitle>Нижний Новгород:</TableTitle>
                    <ul>
                        <li>ул. Саврасова, д. 32</li>
                    </ul>
                </>
                <>
                    <TableTitle>Время работы:</TableTitle>
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
