import { Box, BoxProps } from "@mui/material";
import HeaderSearchBox from "./searchBox";
import HeaderButton from "./button";
import { AccountCircle, Favorite, ShoppingCart } from "@mui/icons-material";

const HeaderMainContainer = () => {
    const outerWrapperProps: BoxProps = {
        paddingY: "2rem",
        marginX: "auto",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

        width: "95%",
        maxWidth: "1320px",
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", mlg: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: "30px",
        width: "100%",
        paddingX: "10px",
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "30px",
    };

    const logoContainerProps: BoxProps = {
        width: {
            xs: "100%",
            sm: "225px",
            md: "120px",
            lg: "160px",
            xl: "180px",
        },
        maxWidth: "225px",
        display: "flex",
        justifyContent: "center",
    };

    const logoProps = {
        src: "/logotype.png",
        alt: "Логотип",
        width: "100%",
        style: {
            margin: "auto",
        },
    };

    const contactsBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        minWidth: "max-content",
    };

    const buttonsRowProps: BoxProps = {
        display: { xs: "none", sm: "flex" },
        flexDirection: "row",
        gap: "10px",

        height: "min-content",
    };

    return (
        <Box {...outerWrapperProps}>
            <Box {...wrapperProps}>
                <Box {...innerWrapperProps}>
                    <Box {...logoContainerProps}>
                        <img {...logoProps} />
                    </Box>
                    <Box {...contactsBoxProps}>
                        <a
                            href="tel:88009870011"
                            style={{
                                color: "#3167eb",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                        >
                            8-800-987-00-11
                        </a>
                        <a
                            style={{
                                color: "#969696",
                                textDecoration: "none",
                            }}
                            href="mailto:test@test.ru"
                        >
                            test@test.ru
                        </a>
                    </Box>
                    <HeaderSearchBox />
                </Box>
                <Box {...buttonsRowProps}>
                    <HeaderButton
                        icon={<Favorite />}
                        upperText="Избранное"
                        lowerText="Кол-во: 0"
                    />
                    <HeaderButton
                        icon={<ShoppingCart />}
                        upperText="Корзина"
                        lowerText="0.00 €"
                    />
                    <HeaderButton
                        icon={<AccountCircle />}
                        upperText="Войти / Новый"
                        lowerText="Аккаунт"
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderMainContainer;
