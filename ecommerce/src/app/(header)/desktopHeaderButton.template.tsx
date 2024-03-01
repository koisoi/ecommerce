"use client";

import { CartState, useAppSelector } from "@/lib";
import {
    Box,
    BoxProps,
    Button,
    ButtonProps,
    Typography,
    TypographyProps
} from "@mui/material";
import { useRouter } from "next/navigation";
import {
    MouseEventHandler,
    ReactNode,
    RefObject,
    useEffect,
    useState
} from "react";

export type DesktopHeaderButtonProps = {
    children?: ReactNode;
    id?: string;
};
export const dynamic = "force-dynamic";

const DesktopHeaderButton = ({ children, id }: DesktopHeaderButtonProps) => {
    const { items } = useAppSelector(CartState);

    // const
    const router = useRouter();
    const amount = items.reduce<number>(
        (prev, _, i, arr) => prev + arr[i].amount,
        0
    );

    // handlers
    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    // props
    const wrapperProps: ButtonProps = {
        sx: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

            minWidth: "max-content",
            height: "min-content"
        },

        onClick: handleCartClick
    };

    const textWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

        marginLeft: "5px"
    };

    const upperTextProps: TypographyProps = {
        fontSize: "0.9rem",
        lineHeight: "1.2",
        sx: {
            textTransform: "none"
        }
    };

    const lowerTextProps: TypographyProps = {
        fontSize: "0.7rem",
        textTransform: "none"
    };

    return (
        <Button {...wrapperProps} id={id}>
            {children}
            <Box {...textWrapperProps}>
                <Typography {...upperTextProps}>Корзина</Typography>
                <Typography {...lowerTextProps}>Товаров: {amount}</Typography>
            </Box>
        </Button>
    );
};

export default DesktopHeaderButton;
