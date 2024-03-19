import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import BackCallButton from "@/app/(shared)/backCallButton/backCallButton";
import SearchBox from "../(shared)/search/searchBox.client";
import dynamic from "next/dynamic";
import Logo from "./logo";
import ContactsBoxTemplate from "../(shared)/contactsBoxTemplate";
import { landingConfig } from "@/lib";

const DynamicCartHeaderButton = dynamic(
    () => import("@/app/(header)/desktopCartHeaderButton.client"),
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
                        <ContactsBoxTemplate
                            phoneNumber={landingConfig.phoneNumber}
                        />
                    </Box>
                    <Box {...searchWrapperProps}>
                        <SearchBox />
                    </Box>
                    <BackCallButton />
                    <DynamicCartHeaderButton />
                </Box>
            </Box>
        </>
    );
};

export default HeaderMainContainer;
