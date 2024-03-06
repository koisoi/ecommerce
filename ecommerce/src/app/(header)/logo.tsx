import { landingConfig } from "@/lib/data/config";
import { Box, BoxProps } from "@mui/material";
import Link from "next/link";

const Logo = ({ mobile }: { mobile?: boolean }) => {
    const logoContainerProps: BoxProps = {
        width: {
            // xs: "100%",
            sm: "100%",
            md: "120px",
            lg: "160px",
            xl: "180px"
        },
        maxWidth: "225px",
        display: "flex",
        justifyContent: "center"
    };

    const logoProps = {
        src: mobile
            ? landingConfig.logoImgMobileLink
            : landingConfig.logoImgLink,
        alt: "Логотип",
        width: "100%",
        style: {
            margin: "auto"
        }
    };

    return (
        <Link href="/">
            <Box {...logoContainerProps}>
                <img {...logoProps} />
            </Box>
        </Link>
    );
};

export default Logo;
