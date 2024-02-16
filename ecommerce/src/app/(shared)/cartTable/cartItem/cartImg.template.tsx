import { Box, BoxProps } from "@mui/material";
import { CSSProperties } from "react";

export type CartImgProps = { alt: string; src: string };

const CartImg = ({ alt, src }: CartImgProps) => {
    const imgBoxProps: BoxProps = {
        width: { xs: "120px", md: "75px" },
        height: { xs: "120px", md: "75px" },
        minWidth: "75px",
        minHeight: "75px"
    };

    const imgStyle: CSSProperties = {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain"
    };

    return (
        <Box {...imgBoxProps}>
            <img alt={alt} src={src} style={imgStyle} />
        </Box>
    );
};

export default CartImg;
