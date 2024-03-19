import { landingConfig } from "@/lib";
import { Box, BoxProps } from "@mui/material";
import Link from "next/link";

const Logo = ({ mobile }: { mobile?: boolean }) => {
    const logoContainerProps: BoxProps = {
        width: {
            xs: "90px",
            md: "120px"
        }
        // display: "flex",
        // justifyContent: "center"
    };

    const logoProps = {
        src: mobile
            ? landingConfig.logoImgMobileLink
            : landingConfig.logoImgLink,
        alt: landingConfig.landing_title,
        width: "100%",
        style: {
            margin: "auto",
            display: "flex",
            justifyContent: "center"
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

export default Logo;
