import {
    Box,
    BoxProps,
    ButtonProps,
    LinkProps,
    SvgIconProps
} from "@mui/material";
import { FooterTitle } from "./footerTitle";
import AppLink from "./text/appLink";
import { Email } from "@mui/icons-material";
import PhoneLink from "./text/phoneLinkTemplate";
import BackCallButton from "./backCallButton/backCallButton.client";
import { landingConfig } from "@/lib";

export const FooterContactsBoxTemplate = ({
    props,
    phone
}: {
    props?: BoxProps;
    phone: string;
}) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.5rem", md: "1rem" },
        alignItems: { xs: "center", smd: "flex-start" },

        boxSizing: "border-box",

        fontSize: "inherit",

        ...props
    };

    const innerWrapperProps: BoxProps = {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        textAlign: { xs: "left", smd: "center" }
    };

    const iconProps: SvgIconProps = {
        fontSize: "inherit",
        sx: {
            marginRight: "0.4rem"
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
                <AppLink href={`mailto:${landingConfig.email}`} footer>
                    <Email {...iconProps} />
                    {landingConfig.email}
                </AppLink>
            </Box>
            <BackCallButton props={backCallButtonProps} />
        </Box>
    );
};
