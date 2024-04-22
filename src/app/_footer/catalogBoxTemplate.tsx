import AppLink from "../_shared/text/appLink";
import { PageData } from "@/lib";
import { FooterBoxTemplate } from "./footerBoxTemplate";

export const CatalogBoxTemplate = ({
    categories
}: {
    categories: PageData[];
}) => {
    return (
        <FooterBoxTemplate title={"Каталог"}>
            {categories.map((category) => (
                <AppLink key={category.path} href={category.url} footer>
                    {category.title}
                </AppLink>
            ))}
        </FooterBoxTemplate>
    );
};
