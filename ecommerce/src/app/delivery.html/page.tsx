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

import Visa from "@/assets/svg/visa.svg";
import MasterCard from "@/assets/svg/mastercard.svg";
import Mir from "@/assets/svg/mir.svg";
import { DeliveryWaysTable } from "./deliveryWaysTable";

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
        },
        rel: "nofollow noopener"
    };

    const iconsStyling: CSSProperties = {
        verticalAlign: "middle",
        margin: "0 0.5rem"
    };

    const resizedIconsStyling: CSSProperties = {
        ...iconsStyling,
        maxHeight: "1rem"
    };

    return (
        <>
            <BreadcrumbsTemplate linksArray={deliveryBreadcrumbs} />
            <PageTitle>Доставка и оплата</PageTitle>

            <SectionContainer>
                <DeliveryWaysTable />

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
