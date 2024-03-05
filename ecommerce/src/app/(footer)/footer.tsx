import { Box, BoxProps } from "@mui/material";
import ContactsBox from "./contactsBox.template";
import CatalogBox from "./catalogBox.template";
import UpperMenuBox from "./upperMenuBox.template";
import SocialNetworksBox from "./socialNetworksBox.template";
import { cookies } from "next/headers";
import { phoneNumber, storeAddress } from "@/lib/data/geoInf";
import { landingConfig } from "@/lib/data/config";

const Footer = () => {
    // const
    const cookieStore = cookies();
    const geo = cookieStore.get("geo")?.value;

    // props
    const wrapperProps: BoxProps = {
        boxSizing: "border-box",
        minWidth: "100%",

        display: "flex",
        justifyContent: "center",

        borderTop: "1px solid",
        borderColor: "divider"
    };

    const innerWrapperProps: BoxProps = {
        maxWidth: "1320px",
        paddingY: { xs: "1rem", md: "2rem" },
        paddingX: "1rem",

        minWidth: { xs: "100%", smd: "0" },
        width: "100%",
        boxSizing: "border-box",

        display: "flex",
        flexDirection: { xs: "column", smd: "row" },
        justifyContent: "space-between",
        gap: { xs: "1rem", sm: "2rem" },

        // fontSize: { xs: "0.8rem", md: "0.95rem" }
        fontSize: "1rem"
    };

    return (
        <footer style={{ boxSizing: "border-box" }}>
            <Box {...wrapperProps}>
                <Box {...innerWrapperProps}>
                    <ContactsBox
                        phone={phoneNumber[geo || "rf"]}
                        address={storeAddress[geo || "rf"]}
                    />
                    <CatalogBox categories={landingConfig.categories} />
                    <UpperMenuBox />
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
