"use client";

import { Box, BoxProps } from "@mui/material";
import MobileHeaderButton from "../mobileHeaderButton.template";
import { MouseEventHandler, RefObject } from "react";

const HeaderMobileNavigationTemplate = ({
    onCartClick
}: {
    onCartClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    // TODO: добавить кнопки
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
        <Box {...wrapperProps}>
            <MobileHeaderButton variant="menu" />
            <Box {...rightButtonsWrapperProps}>
                {/* FIXME: трехзначные числа */}
                <MobileHeaderButton variant="favorite" />
                <MobileHeaderButton
                    variant="shoppingCart"
                    onClick={onCartClick}
                    id="mobile-shopping-cart-button"
                />
                <MobileHeaderButton variant="accountCircle" />
            </Box>
        </Box>
    );
};

export default HeaderMobileNavigationTemplate;
