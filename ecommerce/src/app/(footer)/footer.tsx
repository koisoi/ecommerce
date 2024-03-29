import { Box, BoxProps, Divider } from "@mui/material";
import { CatalogBoxTemplate } from "./catalogBoxTemplate";
import { UpperMenuBox } from "./upperMenuBox";
import { FooterContactsBoxTemplate } from "../(shared)/footerContactsBoxTemplate";
import { landingConfig } from "@/lib";
import PickUpPoints from "../(shared)/pickUpPoints";
import { FooterTitle } from "../(shared)/footerTitle";

export const Footer = ({ props }: { props?: BoxProps }) => {
    // props
    const wrapperProps: BoxProps = {
        component: "footer",

        display: "flex",
        justifyContent: "center",

        borderTop: "1px solid",
        borderColor: "divider",

        marginTop: "2rem",

        ...props
    };

    const innerWrapperProps: BoxProps = {
        maxWidth: "1320px",
        paddingY: { xs: "1rem", md: "2rem" },
        paddingX: "1rem",

        width: "100%",
        boxSizing: "border-box",

        display: "flex",
        flexDirection: { xs: "column", smd: "row" },
        justifyContent: { xs: "center", smd: "space-between" },
        gap: "2rem",

        fontSize: "1rem",
        textAlign: { xs: "center", smd: "left" }
    };

    const pickUpPointsBoxProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.5rem", md: "1rem" }
    };

    return (
        <>
            <Divider />
            <Box {...wrapperProps}>
                <Box {...innerWrapperProps}>
                    <FooterContactsBoxTemplate
                        phone={landingConfig.phoneNumber}
                    />
                    <CatalogBoxTemplate categories={landingConfig.categories} />
                    <UpperMenuBox />
                    <Box {...pickUpPointsBoxProps}>
                        <FooterTitle>Пункты выдачи</FooterTitle>
                        <PickUpPoints />
                    </Box>
                </Box>
            </Box>
        </>
    );
};
