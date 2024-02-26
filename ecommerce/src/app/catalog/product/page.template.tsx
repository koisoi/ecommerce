"use client";

import {
    Box,
    BoxProps,
    IconButton,
    IconButtonProps,
    Modal,
    ModalProps
} from "@mui/material";
import { CSSProperties } from "react";
import Title from "@/app/(shared)/text/title.template";
import ProductPageLowerBox from "./(lowerBox)/productPageLowerBox";
import ProductPageUpperBox from "./(upperBox)/productPageUpperBox";
import Loading from "@/app/(shared)/loading.template";
import { Close } from "@mui/icons-material";
import { useMediaQueries } from "@/lib";

const ProductPageTemplate = ({
    title,
    loading,

    openedImgLink,
    onImgClose
}: {
    title: string;
    openedImgLink: string | null;
    onImgClose: (...props: any) => void;
    loading: boolean;
}) => {
    const screen = useMediaQueries();

    const modalProps: ModalProps = {
        open: !!openedImgLink,
        onClose: onImgClose,
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

        onClick: onImgClose
    };

    if (loading) return <Loading>Загрузка товара...</Loading>;

    return (
        <>
            <Modal {...modalProps}>
                <>
                    {!!openedImgLink && (
                        <>
                            <Box {...fullImgBoxProps}>
                                <img {...fullImgProps} />
                            </Box>
                            <IconButton {...iconButtonProps}>
                                <Close
                                    fontSize={screen.sm ? "large" : "medium"}
                                />
                            </IconButton>
                        </>
                    )}
                </>
            </Modal>

            <Title>{title}</Title>
            <ProductPageUpperBox />
            <ProductPageLowerBox />
        </>
    );
};

export default ProductPageTemplate;
