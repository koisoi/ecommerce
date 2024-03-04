import { Box, BoxProps } from "@mui/material";
import MobileHeaderButton from "../mobileHeaderButton.template";
import { MouseEventHandler } from "react";
import MobileMenu from "../mobileMenu/mobileMenu";
import dynamic from "next/dynamic";

const DynamicHeaderButton = dynamic(
    () => import("@/app/(header)/mobileHeaderButton.template"),
    {
        ssr: false,
        loading: () => (
            <MobileHeaderButton
                variant="shoppingCart"
                id="mobile-shopping-cart-button"
            />
        )
    }
);

const HeaderMobileNavigationTemplate = ({
    onCartClick,
    cartAmount,
    onMenuOpen
}: {
    onCartClick: MouseEventHandler<HTMLButtonElement>;
    cartAmount: number;
    onMenuOpen: MouseEventHandler<HTMLButtonElement>;
}) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        width: "100%",

        fontSize: "2rem",
        color: "white"
    };

    const rightButtonsWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "row"
    };

    return (
        <>
            <MobileMenu />

            <Box {...wrapperProps}>
                <MobileHeaderButton variant="menu" onClick={onMenuOpen} />
                <Box {...rightButtonsWrapperProps}>
                    <DynamicHeaderButton
                        variant="shoppingCart"
                        onClick={onCartClick}
                        id="mobile-shopping-cart-button"
                        amount={cartAmount}
                    />
                </Box>
            </Box>
        </>
    );
};

export default HeaderMobileNavigationTemplate;
