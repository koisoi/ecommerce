import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import PhoneLink from "@/app/(shared)/text/phoneLink.template";
import BackCallButton from "@/app/(shared)/backCallButton/backCallButton";
import HeaderSearchBox from "../search/search";
import Logo from "../logo/logo";
import { cookies } from "next/headers";
import { phoneNumber, storeAddress } from "@/lib/data/geoInf";
import dynamic from "next/dynamic";

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

const HeaderMainContainerTemplate = () => {
    // const
    const cookieStore = cookies();
    const geo = cookieStore.get("geo")?.value;

    // props
    const outerWrapperProps: BoxProps = {
        paddingY: { xs: "1rem", md: "2rem" },
        marginX: "auto",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

        width: "95%",
        maxWidth: "1320px"
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

    const contactsBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        maxWidth: "180px"
    };

    const buttonsRowProps: BoxProps = {
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        flexGrow: 1,

        height: "min-content"
    };

    const addressProps: TypographyProps = {
        color: "text.disabled",
        fontSize: "0.8rem"
    };

    return (
        <>
            <Box {...outerWrapperProps}>
                <Box {...wrapperProps}>
                    <Box {...innerWrapperProps}>
                        <Box {...logoAndContactsWrapper}>
                            <Logo />
                            <Box {...contactsBoxProps}>
                                <PhoneLink number={phoneNumber[geo || "rf"]} />
                                <Typography {...addressProps}>
                                    {storeAddress[geo || "rf"]}
                                </Typography>
                            </Box>
                        </Box>
                        <HeaderSearchBox />
                    </Box>
                    <Box {...buttonsRowProps}>
                        <BackCallButton />
                        <DynamicHeaderButton>
                            <ShoppingCart id="desktop-header-button" />
                        </DynamicHeaderButton>
                        {/* <DesktopHeaderButton>
                            <ShoppingCart id="desktop-header-button" />
                        </DesktopHeaderButton> */}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HeaderMainContainerTemplate;
