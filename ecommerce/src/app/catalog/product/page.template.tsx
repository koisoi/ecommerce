"use client";

import { Box, BoxProps, Modal, ModalProps } from "@mui/material";
import { CSSProperties } from "react";
import { useMediaQueries, useThemeColors } from "@/lib/hooks";
import ProductPageUpperBox, {
    ProductPageUpperBoxProps
} from "./productPageUpperBox.template";
import ProductPageLowerBox, {
    ProductPageLowerBoxProps
} from "./productPageLowerBoxProps.template";
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

    openedImgLink,
    onImgClick,
    onImgClose,

    currentTab,
    onTabChange
}: {
    openedImgLink: string | null;
    onImgClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    loading: boolean;
} & ProductPageUpperBoxProps &
    ProductPageLowerBoxProps) => {
    const colors = useThemeColors();
    const screen = useMediaQueries();

    const modalProps: ModalProps = {
        open: !!openedImgLink,
        onClose: onImgClose,

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
        onImgClick
    };

    const lowerBoxProps: ProductPageLowerBoxProps = {
        currentTab,
        onTabChange,
        fullCharasterictics,
        description,
        feedback,
        simliarProducts
    };

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
