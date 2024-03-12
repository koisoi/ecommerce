import { Box, BoxProps } from "@mui/material";
import { CSSProperties } from "react";

export type CartImgProps = { alt: string; src: string };

const CartImg = ({ alt, src }: CartImgProps) => {
    const imgBoxProps: BoxProps = {
        width: "75px",
        height: "75px",
    };

    const imgStyle: CSSProperties = {
        maxWidth: "100%",
        height: "100%",
        objectFit: "contain"
    };

    return (
        <Box {...imgBoxProps}>
            <img alt={alt} src={src} style={imgStyle} />
        </Box>
    );
};

export default CartImg;
