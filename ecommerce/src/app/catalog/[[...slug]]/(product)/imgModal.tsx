"use client";

import {
    ProductPageState,
    setOpenedImgLink,
    useAppDispatch,
    useAppSelector,
    useMediaQueries
} from "@/lib";
import { Close } from "@mui/icons-material";
import {
    Box,
    BoxProps,
    IconButton,
    IconButtonProps,
    Modal,
    ModalProps
} from "@mui/material";
import { CSSProperties } from "react";

const ImgModal = ({ title }: { title: string }) => {
    const dispatch = useAppDispatch();
    const screen = useMediaQueries();

    const { openedImgLink } = useAppSelector(ProductPageState);

    const handleImgClose = () => {
        dispatch(setOpenedImgLink(null));
    };

    const modalProps: ModalProps = {
        open: !!openedImgLink,
        onClose: handleImgClose,
        disableScrollLock: true,

        children: <></>,

        sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"

            // position: "relative"
        }
    };

    const fullImgBoxProps: BoxProps = {
        width: "100%",
        maxWidth: "1300px",
        maxHeight: "80vh",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        overflow: "hidden"
    };

    const fullImgProps = {
        src: openedImgLink || "",
        alt: title,

        style: {
            objectFit: "contain",
            maxWidth: "100%"
        } as CSSProperties
    };

    const iconButtonProps: IconButtonProps = {
        size: screen.sm ? "large" : "medium",
        sx: {
            position: "fixed",
            top: "20px",
            right: "20px",
            color: "white"
        },

        onClick: handleImgClose
    };

    return (
        <Modal {...modalProps}>
            <>
                {!!openedImgLink && (
                    <>
                        <Box {...fullImgBoxProps}>
                            <img {...fullImgProps} />
                        </Box>
                        <IconButton {...iconButtonProps}>
                            <Close fontSize={screen.sm ? "large" : "medium"} />
                        </IconButton>
                    </>
                )}
            </>
        </Modal>
    );
};

export default ImgModal;
