import { Box, BoxProps, Divider } from "@mui/material";
import CatalogBox from "./catalogBox.template";
import UpperMenuBox from "./upperMenuBox.template";
import { landingConfig } from "@/lib/data/config";
import ContactsBox from "./contactsBox.template";

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
                    <ContactsBox phone={landingConfig.phoneNumber} />
                    <CatalogBox
                        categories={Object.values(landingConfig.categories)}
                    />
                    <UpperMenuBox />
                </Box>
            </Box>
        </>
    );
};

export default Footer;
