import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import SearchBox from "../(shared)/search/searchBox.client";
import dynamic from "next/dynamic";
import Logo from "./logo";
import ContactsBoxTemplate from "../(shared)/contactsBoxTemplate";
import { landingConfig } from "@/lib";
import { TelescopeLogo } from "./telescopeLogo";

const DynamicCartHeaderButton = dynamic(
    () =>
        import(
            "@/app/(header)/desktopCartHeaderButton/desktopCartHeaderButton.client"
        ),
    {
        ssr: false,
        loading: () => {
            const textProps: TypographyProps = {
                // fontSize: "0.8rem",
                // lineHeight: "1.2",
                color: "primary.main"
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

    const logosWrapper: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1rem"
    };

    const searchWrapperProps: BoxProps = {
        flexGrow: 1
    };

    const cartButtonWrapperProps: BoxProps = {
        height: "50px",
        width: "150px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <>
            <Box {...outerWrapperProps}>
                <Box {...wrapperProps}>
                    <Box {...logosWrapper}>
                        <Logo mobile={mobileHeader} />
                        <TelescopeLogo />
                    </Box>
                    <Box {...searchWrapperProps}>
                        <SearchBox />
                    </Box>
                    <ContactsBoxTemplate
                        phoneNumber={landingConfig.phoneNumber}
                    />
                    <Box {...cartButtonWrapperProps}>
                        <DynamicCartHeaderButton />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HeaderMainContainer;
