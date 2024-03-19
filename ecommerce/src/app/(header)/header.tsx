import { Box, BoxProps } from "@mui/material";
import HeaderTopContainer from "./topContainer";
import HeaderMainContainer from "./headerMainContainer";
import dynamic from "next/dynamic";
import { landingConfig } from "@/lib";

const DynamicHeaderNavigation = dynamic(
    () => import("@/app/(header)/navigation.template")
);

const Header = ({ props }: { props?: BoxProps }) => {
    // props
    const wrapperProps: BoxProps = {
        component: "header",
        boxSizing: "border-box",
        width: "100%",

        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        flexDirection: "column",

        ...props,

        marginY: "0.5rem"
    };

    return (
        <>
            <DynamicHeaderNavigation mobile />
            <Box {...wrapperProps}>
                <HeaderTopContainer />
                <HeaderMainContainer />
            </Box>
            <DynamicHeaderNavigation />
        </>
    );
};

export default Header;
