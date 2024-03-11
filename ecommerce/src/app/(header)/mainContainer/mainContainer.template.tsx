import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import BackCallButton from "@/app/(shared)/backCallButton/backCallButton";
import HeaderSearchBox from "../search/search";
import dynamic from "next/dynamic";
import Logo from "../logo";
import { landingConfig } from "@/lib/data/config";
import HeaderContactsBox from "../contactsBox/contactsBox.template";

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

const HeaderMainContainer = ({
    props,
    mobileHeader
}: {
    props?: BoxProps;
    mobileHeader?: boolean;
}) => {
    // props
    const outerWrapperProps: BoxProps = {
        paddingY: "0.4rem",
        marginX: "auto",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

        width: "100%",
        ...(mobileHeader && {
            fontSize: "1rem",
            display: { xs: "flex", md: "none" }
        }),
        ...(!mobileHeader && { display: { xs: "none", md: "flex" } }),
        ...props,

        sx: {
            ...props?.sx
        }
    };

    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "2rem",
        width: "100%"
    };

    const logoAndContactsWrapper: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "2rem"
    };

    const searchWrapperProps: BoxProps = {
        flexGrow: 1
    };

    return (
        <>
            <Box {...outerWrapperProps}>
                <Box {...wrapperProps}>
                    <Box {...logoAndContactsWrapper}>
                        <Logo mobile={mobileHeader} />
                        <HeaderContactsBox
                            phoneNumber={landingConfig.phoneNumber}
                        />
                    </Box>
                    <Box {...searchWrapperProps}>
                        <HeaderSearchBox />
                    </Box>
                    <BackCallButton />
                    <DynamicHeaderButton>
                        <ShoppingCart id="desktop-header-button" />
                    </DynamicHeaderButton>
                </Box>
            </Box>
        </>
    );
};

export default HeaderMainContainer;
