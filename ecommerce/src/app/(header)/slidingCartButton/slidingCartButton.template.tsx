"use client";

import CartTable from "@/app/(shared)/cartTable/cartTable";
import { ShoppingCart } from "@mui/icons-material";
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Fade,
    Popover,
    PopoverProps,
    PopoverVirtualElement
} from "@mui/material";
import { MouseEventHandler, RefObject } from "react";

const SlidingCartButtonTemplate = ({
    amount,
    visible,
    onCartClose,
    cartPopoverAnchorEl,
    onClick
}: {
    amount: number;
    visible: boolean;
    onCartClose: (...props: any) => void;
    cartPopoverAnchorEl:
        | Element
        | (() => Element)
        | PopoverVirtualElement
        | (() => PopoverVirtualElement)
        | null;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
    const slidingCartButtonWrapperProps: ButtonProps = {
        disableRipple: true,
        disableFocusRipple: true,

        onClick,

        sx: {
            display: "inline-flex",
            flexDirection: "row",
            position: "absolute",
            top: "100%",
            right: "10px",
            paddingY: "5px",

            borderRadius: "0 0 0.37rem 0.37rem",

            color: "white",
            fontSize: "1rem",
            lineHeight: 1,

            backgroundColor: "primary.main",
            ":hover": {
                backgroundColor: "primary.dark"
            }
        }
    };

    const amountBadgeProps: BoxProps = {
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",

        minWidth: "20px",
        width: "max-content",
        height: "20px",

        fontSize: "0.8rem",
        borderRadius: "100%",

        sx: {
            backgroundColor: "white",
            color: "text.primary"
        }
    };

    const popoverProps: PopoverProps = {
        id: "cartPopover",
        open: !!cartPopoverAnchorEl,
        anchorEl: cartPopoverAnchorEl,
        onClose: onCartClose,
        disableAutoFocus: true,
        disableScrollLock: true,

        anchorOrigin: {
            vertical: 40,
            horizontal: "right"
        },

        transformOrigin: {
            horizontal: "right",
            vertical: "top"
        }
    };

    const cartWrapperProps: BoxProps = {
        maxWidth: "900px"
    };

    // мб лучше использовать Collapse, но он здесь не работает почему-то
    return (
        <>
            <Fade in={visible}>
                <Button {...slidingCartButtonWrapperProps}>
                    <ShoppingCart id="desktop-sliding-header-button" />
                    <Box {...amountBadgeProps}>{amount}</Box>
                </Button>
            </Fade>

            <Popover {...popoverProps}>
                <Box {...cartWrapperProps}>
                    <CartTable />
                </Box>
            </Popover>
        </>
    );
};

export default SlidingCartButtonTemplate;
