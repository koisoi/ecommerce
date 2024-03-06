import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import BackCallButton from "@/app/(shared)/backCallButton/backCallButton";
import HeaderSearchBox from "../search/search";
import dynamic from "next/dynamic";
import LoadingHeaderContactsBox from "../contactsBox/loadingContactsBox";
import Logo from "../logo";

const DynamicHeaderButton = dynamic(
    () => import("@/app/(header)/desktopHeaderButton.template"),
    {
        ssr: false,
        loading: () => {
            const textProps: TypographyProps = {
                fontSize: "0.8rem",
                lineHeight: "1.2",
                color: "primary.main",
                sx: {
                    textTransform: "none"
                }
            };

            return <Typography {...textProps}>Загрузка корзины...</Typography>;
        }
    }
);

const DynamicContactsBox = dynamic(
    () => import("@/app/(header)/contactsBox/realContactsBox"),
    {
        ssr: false,
        loading: () => <LoadingHeaderContactsBox />
    }
);

const HeaderMainContainer = ({
    props,
    mobileHeader
}: {
    props?: BoxProps;
    mobileHeader?: boolean;
}) => {
    // props
    const outerWrapperProps: BoxProps = {
        paddingY: { xs: "0.4rem", md: "2rem" },
        marginX: "auto",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

        width: "95%",
        maxWidth: "1320px",
        ...(mobileHeader && {
            fontSize: "1rem"
        }),
        ...props,

        sx: {
            ...props?.sx
        }
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: { xs: "column", mlg: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: "30px",
        width: "100%",
        paddingX: "10px"
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "30px",

        flexGrow: 2
    };

    const logoAndContactsWrapper: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "30px"
    };

    const buttonsRowProps: BoxProps = {
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        flexGrow: 1,

        height: "min-content"
    };

    return (
        <>
            <Box {...outerWrapperProps}>
                <Box {...wrapperProps}>
                    <Box {...innerWrapperProps}>
                        <Box {...logoAndContactsWrapper}>
                            <Logo mobile={mobileHeader} />
                            <DynamicContactsBox />
                        </Box>
                        <HeaderSearchBox />
                    </Box>
                    <Box {...buttonsRowProps}>
                        <BackCallButton />
                        <DynamicHeaderButton>
                            <ShoppingCart id="desktop-header-button" />
                        </DynamicHeaderButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HeaderMainContainer;
