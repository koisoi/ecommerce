import PhoneLink from "@/app/(shared)/text/phoneLink.template";
import { Box, BoxProps, LinkProps } from "@mui/material";

const MobileContactsBox = ({
    phoneNumber,
    storeAddress
}: {
    phoneNumber: string;
    storeAddress: string;
}) => {
    // props
    const contactsBoxProps: BoxProps = {
        display: { xs: "flex", md: "none" },
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",

        width: "100vw",
        fontSize: "0.9rem",
        padding: "0.4rem",
        boxSizing: "border-box",

        color: "#fff",

        sx: {
            backgroundColor: "secondary.main"
        }
    };

    const linkProps: LinkProps = {
        color: "inherit"
    };

    return (
        <Box {...contactsBoxProps}>
            <PhoneLink number={phoneNumber} props={linkProps} />
            {storeAddress}
        </Box>
    );
};

export default MobileContactsBox;
