import AppLink from "../_shared/text/appLink";
import { FooterBoxTemplate } from "./footerBoxTemplate";

export const UpperMenuBox = () => {
    return (
        <FooterBoxTemplate title={"Для покупателей"}>
            <AppLink href="/delivery.html" footer>
                Доставка и оплата
            </AppLink>
            <AppLink href="/warranty.html" footer>
                Гарантия и возврат
            </AppLink>
            <AppLink href="/contacts.html" footer>
                Контактная информация
            </AppLink>
        </FooterBoxTemplate>
    );
};
