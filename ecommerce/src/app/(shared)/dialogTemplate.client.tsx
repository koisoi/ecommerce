"use client";

import { useMediaQueries } from "@/lib";
import { Dialog, DialogProps } from "@mui/material";
import { ReactNode } from "react";

export const DialogTemplate = ({
    children,
    props
}: {
    props: DialogProps;
    children?: ReactNode;
}) => {
    const screen = useMediaQueries();

    const dialogProps: DialogProps = {
        disableScrollLock: true,
        fullScreen: !screen.sm,

        ...props,

        sx: {
            ".MuiDialogContent-root": {
                justifyContent: "flex-start"
            },
            ...props?.sx
        }
    };

    return <Dialog {...dialogProps}>{children}</Dialog>;
};

// export default AppDialog;
