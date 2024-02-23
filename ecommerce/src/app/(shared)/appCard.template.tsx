"use client";

import { useThemeColors } from "@/lib";
import { Card, CardMedia, CardMediaProps, CardProps } from "@mui/material";
import { ReactNode } from "react";

export type AppCardProps = {
    imageLink: string;
    children?: ReactNode;
    cardMediaChildren?: ReactNode;
    cardProps?: CardProps;
    cardMediaProps?: CardMediaProps;
};

const AppCard = ({
    children,
    cardProps,
    imageLink,
    cardMediaProps,
    cardMediaChildren
}: AppCardProps) => {
    const colors = useThemeColors();

    const initialCardProps: CardProps = {
        ...cardProps,

        sx: {
            width: "100%",

            boxShadow: "none",
            border: "1px solid",
            borderColor: "divider",
            overflow: "visible",

            ...cardProps?.sx,

            ":hover": {
                boxShadow: "0 0 15px 1px " + colors.divider
            }
        }
    };

    const initialCardMediaProps: CardMediaProps = {
        image: imageLink,

        component: "div",

        ...cardMediaProps,

        sx: {
            width: "100%",
            height: "310px",
            position: "relative",

            backgroundSize: "contain",

            ...cardMediaProps?.sx
        }
    };

    return (
        <Card {...initialCardProps}>
            <CardMedia {...initialCardMediaProps}>
                {cardMediaChildren}
            </CardMedia>
            {children}
        </Card>
    );
};

export default AppCard;