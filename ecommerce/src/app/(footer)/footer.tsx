import { Box, BoxProps } from "@mui/material";
import ContactsBox from "./contactsBox.template";
import CatalogBox from "./catalogBox.template";
import UpperMenuBox from "./upperMenuBox.template";
import { phoneNumber, storeAddress } from "@/lib/data/geoInf";
import { landingConfig } from "@/lib/data/config";
import dynamic from "next/dynamic";
import LoadingContactsBox from "./loadingContactsBox";

const DynamicContactsBox = dynamic(
    () => import("@/app/(footer)/realContactsBox"),
    {
        ssr: false,
        loading: () => <LoadingContactsBox />
    }
);

const Footer = () => {
    // props
    const wrapperProps: BoxProps = {
        boxSizing: "border-box",
        minWidth: "100%",

        display: "flex",
        justifyContent: "center",

        borderTop: "1px solid",
        borderColor: "divider",

        marginTop: "2rem"
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
        <footer style={{ boxSizing: "border-box" }}>
            <Box {...wrapperProps}>
                <Box {...innerWrapperProps}>
                    <DynamicContactsBox />
                    <CatalogBox categories={landingConfig.categories} />
                    <UpperMenuBox />
                </Box>
            </Box>
        </footer>
    );
};

export default Footer;
