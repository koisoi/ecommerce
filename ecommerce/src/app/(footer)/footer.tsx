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
        paddingY: "40px",
        paddingX: "10px",

        minWidth: { xs: "100%", smd: "0" },
        width: { lg: "100%", xl: "1300px" },
        boxSizing: "border-box",

        display: "flex",
        flexDirection: { xs: "column", smd: "row" },
        justifyContent: "space-between",
        gap: "20px"
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
                    <SocialNetworksBox />
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
