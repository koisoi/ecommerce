"use client";

import { Box, BoxProps, Modal, ModalProps } from "@mui/material";
import { CSSProperties } from "react";
import Title from "@/app/(shared)/text/title.template";
import ProductPageLowerBox from "./(lowerBox)/productPageLowerBox";
import ProductPageUpperBox from "./(upperBox)/productPageUpperBox";

const ProductPageTemplate = ({
    title,
    loading,

    openedImgLink,
    onImgClose
}: {
    title: string;
    openedImgLink: string | null;
    onImgClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    loading: boolean;
}) => {
    const modalProps: ModalProps = {
        open: !!openedImgLink,
        onClose: onImgClose,
        disableScrollLock: true,

        children: <></>,

        sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
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

    if (loading) return null;

    return (
        <>
            <Modal {...modalProps}>
                <>
                    {!!openedImgLink && (
                        <Box {...fullImgBoxProps}>
                            <img {...fullImgProps} />
                        </Box>
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
