import {
    AddCard,
    CurrencyRuble,
    LocalShipping,
    LocalShippingOutlined
} from "@mui/icons-material";
import {
    Box,
    BoxProps,
    Divider,
    DividerProps,
    SvgIconProps,
    Typography,
    TypographyProps
} from "@mui/material";
import Title from "./title.template";
import { useMediaQueries } from "@/lib";

const OurAdvantages = ({ props }: { props?: BoxProps }) => {
    const screen = useMediaQueries();

    const wrapperProps: BoxProps = {
        ...props,

        padding: "20px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 15px 4px rgba(153, 153, 153, 0.2)",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",

        width: "100%",
        boxSizing: "border-box"
    };

    const titleProps: TypographyProps = {
        color: "primary.main",
        maxWidth: "fit-content"
    };

    const descriptionProps: TypographyProps = {
        textAlign: "center",
        padding: "20px",
        paddingTop: "0",

        color: "text.secondary",
        fontSize: { xs: "0.9rem", sm: "1rem", md: "0.9rem", mlg: "1rem" }
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        gap: "30px"
    };

    const dividerProps: DividerProps = {
        orientation: screen.md ? "vertical" : "horizontal",
        variant: "middle",
        flexItem: true
    };

    const advantageBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "15px"
    };

    const advantageTextProps: TypographyProps = {
        color: "text.secondary",
        fontSize: { xs: "1.2rem", md: "0.95rem", mlg: "1.2rem" },
        fontWeight: "bold",
        textAlign: "center",

        maxWidth: "300px"
    };

    const iconSpanProps = {
        style: {
            fontSize: "5rem"
        }
    };

    const iconProps: SvgIconProps = {
        fontSize: "inherit",
        color: "primary"
    };

    return (
        <Box {...wrapperProps}>
            <Title props={titleProps}>Наши преимущества</Title>
            <Typography {...descriptionProps}>
                Интернет-магазин Telescope1.ru предлагает своим клиентам широкий
                ассортимент оптического оборудования для любого уровня
                подготовки: от детских до профессиональных. Только самые
                современные устройства от ведущих мировых производителей,
                предназначенные для наблюдений природы и звездного неба, охоты в
                любое время суток и разнообразных биологических исследований.
                Более 8000 наименований оптических приборов (биноклей,
                телескопов, микроскопов, зрительных труб и монокуляров,
                тепловизоров, ПНВ и прицелов), а также большой выбор аксессуаров
                и принадлежностей к этой и прочей оптике.
            </Typography>
            <Box {...innerWrapperProps}>
                <Box {...advantageBoxProps}>
                    <span {...iconSpanProps}>
                        <LocalShippingOutlined {...iconProps} />
                    </span>
                    <Typography {...advantageTextProps}>
                        Бесплатная доставка по Москве и Санкт-Петербургу
                    </Typography>
                </Box>
                <Divider {...dividerProps} />
                <Box {...advantageBoxProps}>
                    <span {...iconSpanProps}>
                        <CurrencyRuble {...iconProps} />
                    </span>
                    <Typography {...advantageTextProps}>
                        Оплата после получения и проверки товара
                    </Typography>
                </Box>
                <Divider {...dividerProps} />
                <Box {...advantageBoxProps}>
                    <span {...iconSpanProps}>
                        <AddCard {...iconProps} />
                    </span>
                    <Typography {...advantageTextProps}>
                        Совершая покупки, вы получаете бонусные баллы
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default OurAdvantages;
