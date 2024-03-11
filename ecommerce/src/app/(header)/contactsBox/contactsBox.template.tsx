import PhoneLink from "@/app/(shared)/text/phoneLink.template";
import { Box, BoxProps } from "@mui/material";

const HeaderContactsBox = ({ phoneNumber }: { phoneNumber: string }) => {
    // props
    const contactsBoxProps: BoxProps = {
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        width: "max-content",
        maxWidth: "220px"
    };

    // const addressProps: TypographyProps = {
    //     color: "text.disabled",
    //     fontSize: "0.8rem",
    //     noWrap: true
    // };

    return (
        <Box {...contactsBoxProps}>
            <PhoneLink number={phoneNumber} />
            {/* <Typography {...addressProps}>{storeAddress}</Typography> */}
        </Box>
    );
};

export default HeaderContactsBox;
