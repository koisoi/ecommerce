import PhoneLink from "@/app/(shared)/text/phoneLinkTemplate";
import { Box, BoxProps, LinkProps, TypographyProps } from "@mui/material";

const MobileContactsBoxTemplate = ({
    phoneNumber
}: {
    phoneNumber: string;
}) => {
    // props
    const contactsBoxProps: BoxProps = {
        display: { xs: "flex", md: "none" },
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",

        width: "100%",
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
        </Box>
    );
};

export default MobileContactsBoxTemplate;
