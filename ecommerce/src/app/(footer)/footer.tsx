"use client";

import { Box, BoxProps } from "@mui/material";
import ContactsBox from "./contactsBox";
import CatalogBox from "./catalogBox";
import UpperMenuBox from "./upperMenuBox";
import SocialNetworksBox from "./socialNetworksBox";

const Footer = () => {
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
        paddingLeft: "10px",
        minWidth: { xs: "100%", sm: "0" },
        width: { lg: "100%", xl: "1300px" },

        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        gap: "20px"
    };

    return (
        <footer>
            <Box {...wrapperProps}>
                <Box {...innerWrapperProps}>
                    <ContactsBox />
                    <CatalogBox />
                    <UpperMenuBox />
                    <SocialNetworksBox />
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
