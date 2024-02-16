import { ShoppingCartOutlined } from "@mui/icons-material";
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    SvgIconProps,
    TypographyProps
} from "@mui/material";
import PageTitle from "../../pageTitle.template";
import Paragraph from "../../paragraph.template";
import { MouseEventHandler, useEffect } from "react";

const EmptyCartTemplate = ({
    onCatalogClick,
    full
}: {
    full?: boolean;
    onCatalogClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    const wrapperProps: BoxProps = {
        width: "100%",
        height: "100%",
        padding: "30px",
        boxSizing: "border-box",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "20px",

        fontSize: { xs: "6rem", sm: full ? "12rem" : "6rem" }
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",

        maxWidth: "410px"
    };

    const iconProps: SvgIconProps = {
        color: "primary",
        fontSize: "inherit"
    };

    const paragraphProps: TypographyProps = {
        maxWidth: "fit-content",
        ...(!full && {
            fontSize: "0.9rem"
        })
    };

    const buttonProps: ButtonProps = {
        variant: "contained",

        disableRipple: true,
        disableFocusRipple: true,

        onClick: onCatalogClick,

        sx: {
            textTransform: "none",
            boxShadow: "none",

            ":hover": {
                boxShadow: "none"
            }
        }
    };

    const titleProps: TypographyProps = {
        margin: 0,
        ...(!full && {
            fontSize: "1.2rem"
        })
    };

    return (
        <Box {...wrapperProps}>
            <ShoppingCartOutlined {...iconProps} />
            <Box {...innerWrapperProps}>
                <PageTitle props={titleProps}>Ваша корзина пуста</PageTitle>
                <Paragraph props={paragraphProps}>
                    Сюда будут попадать товары, которые вы выберете в каталоге,
                    а после этого здесь же можно будет оформить заказ.
                </Paragraph>
                {full && <Button {...buttonProps}>В каталог</Button>}
            </Box>
        </Box>
    );
};

export default EmptyCartTemplate;
