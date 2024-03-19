import { Box, BoxProps, Divider } from "@mui/material";
import CatalogBoxTemplate from "./catalogBoxTemplate";
import UpperMenuBox from "./upperMenuBox";
import ContactsBoxTemplate from "./contactsBoxTemplate";
import { landingConfig } from "@/lib";

const Footer = ({ props }: { props?: BoxProps }) => {
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
        justifyContent: { xs: "center", md: "space-between" },
        gap: "2rem",

        fontSize: "1rem",
        textAlign: "center"
    };

    return (
        <>
            <Divider />
            <Box {...wrapperProps}>
                <Box {...innerWrapperProps}>
                    <ContactsBoxTemplate phone={landingConfig.phoneNumber} />
                    <CatalogBoxTemplate categories={landingConfig.categories} />
                    <UpperMenuBox />
                </Box>
            </Box>
        </>
    );
};

export default Footer;
