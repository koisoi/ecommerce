import { Box, BoxProps } from "@mui/material";
import ContactsBox from "./contactsBox.template";
import CatalogBox from "./catalogBox.template";
import UpperMenuBox from "./upperMenuBox.template";
import SocialNetworksBox from "./socialNetworksBox.template";
import { CategoryListItem } from "@/lib";

const FooterTemplate = ({
    phone,
    address,
    categories
}: {
    phone: string;
    address: string;
    categories: CategoryListItem[];
}) => {
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
                    <ContactsBox phone={phone} address={address} />
                    <CatalogBox categories={categories} />
                    <UpperMenuBox />
                    <SocialNetworksBox />
                </Box>
            </Box>
        </footer>
    );
};

export default FooterTemplate;
