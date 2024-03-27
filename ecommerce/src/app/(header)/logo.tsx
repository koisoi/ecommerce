import { landingConfig } from "@/lib";
import { Box, BoxProps } from "@mui/material";
import Link from "next/link";

export const Logo = ({ mobile }: { mobile?: boolean }) => {
    const logoContainerProps: BoxProps = {
        width: {
            xs: "90px",
            md: "100px"
        }
    };

    const logoProps = {
        src: mobile
            ? landingConfig.logoImgMobileLink
            : landingConfig.logoImgLink,
        alt: landingConfig.landing_title,
        style: {
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            width: "100%"
        }
    };

    return (
        <Box {...logoContainerProps}>
            <Link href="/">
                <img {...logoProps} />
            </Link>
        </Box>
    );
};
