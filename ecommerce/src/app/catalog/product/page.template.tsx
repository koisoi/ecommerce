"use client";

import { Box, BoxProps, Modal, ModalProps } from "@mui/material";
import { CSSProperties, useEffect } from "react";
import ProductPageUpperBox, {
    ProductPageUpperBoxProps
} from "./(upperBox)/productPageUpperBox.template";
import ProductPageLowerBox, {
    ProductPageLowerBoxProps
} from "./(lowerBox)/productPageLowerBoxProps.template";
import Title from "@/app/(shared)/title.template";

const ProductPageTemplate = ({
    title,
    imageLinks,
    articul,
    stock,
    price,
    characteristics,
    fullCharasterictics,
    description,
    feedback,
    simliarProducts,
    complectation,
    loading,

    openedImgLink,
    onImgClick,
    onDragStart,
    onDragStop,
    onImgClose,

    currentTab,
    onTabChange
}: {
    openedImgLink: string | null;
    onImgClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    loading: boolean;
} & ProductPageUpperBoxProps &
    ProductPageLowerBoxProps) => {
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

    const upperBoxProps: ProductPageUpperBoxProps = {
        title,
        imageLinks,
        articul,
        stock,
        price,
        characteristics,
        onImgClick,
        onDragStart,
        onDragStop
    };

    const lowerBoxProps: ProductPageLowerBoxProps = {
        currentTab,
        onTabChange,
        fullCharasterictics,
        description,
        feedback,
        simliarProducts,
        complectation
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
            <ProductPageUpperBox {...upperBoxProps} />
            <ProductPageLowerBox {...lowerBoxProps} />
        </>
    );
};

export default ProductPageTemplate;
