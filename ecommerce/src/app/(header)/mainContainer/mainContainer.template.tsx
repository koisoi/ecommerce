import { Box, BoxProps, Typography, TypographyProps } from "@mui/material";
import DesktopHeaderButton, {
    DesktopHeaderButtonProps
} from "../desktopHeaderButton.template";
import { ShoppingCart } from "@mui/icons-material";
import { MouseEventHandler } from "react";
import PhoneLink from "@/app/(shared)/text/phoneLink.template";
import BackCallButton from "@/app/(shared)/backCallButton/backCallButton";
import HeaderSearchBox from "../search/search";
import Logo from "../logo/logo";

const HeaderMainContainerTemplate = ({
    onCartClick,
    storeAddress,
    phone,
    cartAmount
}: {
    onCartClick: MouseEventHandler<HTMLButtonElement>;
    storeAddress: string;
    phone: string;
    cartAmount: number;
}) => {
    const outerWrapperProps: BoxProps = {
        paddingY: "2rem",
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
        display: { xs: "none", sm: "flex" },
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        flexGrow: 1,

        height: "min-content"
    };

    const cartButtonProps: DesktopHeaderButtonProps = {
        text: "Корзина",
        onClick: onCartClick,
        lowerText: `Товаров: ${cartAmount}`
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
                                <PhoneLink number={phone} />
                                <Typography {...addressProps}>
                                    {storeAddress}
                                </Typography>
                            </Box>
                        </Box>
                        <HeaderSearchBox />
                    </Box>
                    <Box {...buttonsRowProps}>
                        <BackCallButton />
                        <DesktopHeaderButton {...cartButtonProps}>
                            <ShoppingCart id="desktop-header-button" />
                        </DesktopHeaderButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default HeaderMainContainerTemplate;
