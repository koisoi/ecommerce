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
    const initialCardProps: CardProps = {
        ...cardProps,

        sx: {
            width: "100%",

            boxShadow: "none",
            border: "1px solid",
            borderColor: "divider",
            overflow: "visible",

            display: "flex",
            flexDirection: "column",

            ...cardProps?.sx,

            ":hover": {
                boxShadow: "0 0 15px 1px rgba(0, 0, 0, 0.12)" // + colors.divider
            }
        }
    };

    const initialCardMediaProps: CardMediaProps = {
        image: imageLink,

        component: "div",

        ...cardMediaProps,

        sx: {
            width: "100%",
            position: "relative",
            borderRadius: "4px 4px 0 0",

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
