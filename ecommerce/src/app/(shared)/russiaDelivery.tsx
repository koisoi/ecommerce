import AppLink from "./text/appLink";
import Paragraph from "./text/paragraph";

import PostRF from "@/assets/svg/del-postrf.svg";
import EMS from "@/assets/svg/del-ems.svg";
import DelLin from "@/assets/svg/del-dellin.svg";
import CDEK from "@/assets/svg/del-cdek.svg";
import { LinkProps, TypographyProps } from "@mui/material";

export const RussiaDelivery = ({ noIcons }: { noIcons?: boolean }) => {
    const linksProps: LinkProps = {
        sx: {
            textDecoration: "underline 1px"
        },
        rel: "nofollow noopener"
    };

    const iconsWrapperProps: TypographyProps = {
        display: "inline-flex",
        gap: "0.5rem"
    };

    return (
        <>
            <Paragraph>
                Доставка по России (
                <AppLink href="http://www.dellin.ru/cities/" props={linksProps}>
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
            {!noIcons && (
                <Paragraph props={iconsWrapperProps}>
                    <PostRF />
                    <EMS />
                    <DelLin />
                    <CDEK />
                </Paragraph>
            )}
        </>
    );
};
