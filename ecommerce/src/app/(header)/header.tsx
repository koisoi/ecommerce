import { Box, BoxProps } from "@mui/material";
import HeaderNavigation from "./navigation.template";
import { landingConfig } from "@/lib/data/config";
import HeaderTopContainer from "./topContainer.template";
import HeaderMainContainer from "./mainContainer/mainContainer.template";
import dynamic from "next/dynamic";

const DynamicHeaderNavigation = dynamic(
    () => import("@/app/(header)/navigation.template")
);

const Header = ({ props }: { props?: BoxProps }) => {
    // props
    const wrapperProps: BoxProps = {
        component: "header",
        boxSizing: "border-box",
        width: "100%",

        display: "flex",
        justifyContent: "center",
        flexDirection: "column",

        ...props,

        marginTop: "0.5rem"
    };

    return (
        <>
            <DynamicHeaderNavigation
                mobile={true}
                categories={Object.values(landingConfig.categories)}
            />
            <Box {...wrapperProps}>
                <HeaderTopContainer />
                <HeaderMainContainer />
            </Box>
            <DynamicHeaderNavigation
                mobile={false}
                categories={Object.values(landingConfig.categories)}
            />
        </>
    );
};

export default Header;
