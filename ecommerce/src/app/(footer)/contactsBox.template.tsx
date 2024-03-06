import {
    Box,
    BoxProps,
    ButtonProps,
    LinkProps,
    SvgIconProps
} from "@mui/material";
import FooterTitle from "./title.template";
import AppLink from "../(shared)/text/appLink.template";
import { Email, LocationOn } from "@mui/icons-material";
import PhoneLink from "../(shared)/text/phoneLink.template";
import BackCallButton from "../(shared)/backCallButton/backCallButton";

const ContactsBox = ({
    phone,
    address,
    props
}: {
    phone: string;
    address: string;
    props?: BoxProps;
}) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.5rem", md: "1rem" },

        boxSizing: "border-box",

        fontSize: "inherit",

        ...props
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "5px"
    };

    const boxProps: BoxProps = {
        color: "text.secondary",

        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    };

    const iconProps: SvgIconProps = {
        fontSize: "inherit",
        sx: {
            marginRight: "10px"
        }
    };

    const phoneLinkProps: LinkProps = {
        fontSize: "1.2rem"
    };

    const backCallButtonProps: ButtonProps = {
        sx: { maxWidth: "300px" }
    };

    return (
        <Box {...wrapperProps}>
            <FooterTitle>Контакты</FooterTitle>
            <Box {...innerWrapperProps}>
                <PhoneLink number={phone} props={phoneLinkProps} />
                <AppLink href="mailto:sales@telescope1.ru" footer>
                    <Email {...iconProps} />
                    sales@telescope1.ru
                </AppLink>
                <Box {...boxProps}>
                    <LocationOn {...iconProps} />
                    {address}
                </Box>
            </Box>
            <BackCallButton props={backCallButtonProps} />
        </Box>
    );
};

export default ContactsBox;
