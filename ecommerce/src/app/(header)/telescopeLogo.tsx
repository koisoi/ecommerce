import { Box, BoxProps, SvgIconProps } from "@mui/material";
import TelescopeCircle from "@/assets/svg/logo-36.svg";
import TelescopeDomain from "@/assets/svg/logo-domain-36.svg";

export const TelescopeLogo = ({ mobile }: { mobile?: boolean }) => {
    const wrapperProps: BoxProps = {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "0.5rem"
    };

    const iconProps: SvgIconProps = {
        height: mobile ? "34px" : "30px"
    };

    const domainProps: SvgIconProps = {
        ...iconProps,
        style: {
            paddingTop: "0.25rem"
        }
    };

    return (
        <Box {...wrapperProps}>
            <TelescopeCircle {...iconProps} />
            {!mobile && <TelescopeDomain {...domainProps} />}
        </Box>
    );
};
