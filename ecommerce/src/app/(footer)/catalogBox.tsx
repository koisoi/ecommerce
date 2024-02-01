import { Box, BoxProps } from "@mui/material";
import FooterTitle from "./title";
import FooterLink from "./link";

const CatalogBox = () => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Каталог</FooterTitle>
            <FooterLink href="#">Электроника</FooterLink>
            <FooterLink href="#">Мебель</FooterLink>
            <FooterLink href="#">Одежда</FooterLink>
            <FooterLink href="#">Правильное питание</FooterLink>
        </Box>
    );
};

export default CatalogBox;
