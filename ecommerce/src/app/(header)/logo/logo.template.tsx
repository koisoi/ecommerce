import { Box, BoxProps } from "@mui/material";
import Link from "next/link";

const LogoTemplate = ({ logoLink }: { logoLink: string }) => {
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
        // TODO: поменять
        src: logoLink,
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

export default LogoTemplate;
