import PhoneLink from "@/app/(shared)/text/phoneLink.template";
import { Box, BoxProps, LinkProps, TypographyProps } from "@mui/material";

const MobileContactsBox = ({ phoneNumber }: { phoneNumber: string }) => {
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

    const addressProps: TypographyProps = {
        component: "span",
        display: { xs: "none", sm: "inline" }
    };

    return (
        <Box {...contactsBoxProps}>
            <PhoneLink number={phoneNumber} props={linkProps} />
            {/* <Typography {...addressProps}>{storeAddress}</Typography> */}
        </Box>
    );
};

export default MobileContactsBox;
