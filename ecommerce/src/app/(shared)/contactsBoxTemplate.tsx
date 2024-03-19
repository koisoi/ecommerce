import PhoneLink from "@/app/(shared)/text/phoneLink.template";
import { Box, BoxProps } from "@mui/material";

const ContactsBoxTemplate = ({ phoneNumber }: { phoneNumber: string }) => {
    // props
    const contactsBoxProps: BoxProps = {
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        width: "max-content",
        maxWidth: "220px"
    };

    return (
        <Box {...contactsBoxProps}>
            <PhoneLink number={phoneNumber} />
        </Box>
    );
};

export default ContactsBoxTemplate;
