import { Box, BoxProps } from "@mui/material";
import HeaderMobileNavigationTemplate from "./mobileNavigation/mobileNavigation.template";
import { PageData } from "@/lib";
import MobileContactsBox from "./contactsBox/mobileContactsBox";
import { landingConfig } from "@/lib/data/config";
import HeaderDesktopNavigationTemplate from "./desktopNavigation/desktopNavigation.template";

const HeaderNavigation = ({
    mobile,
    categories
}: {
    mobile: boolean;
    categories: PageData[];
}) => {
    // // const
    // const router = useRouter();
    // const dispatch = useAppDispatch();

    // // handlers
    // const handleDesktopTabClick = (path: string): void => {
    //     router.push(path);
    // };

    // useEffect(() => {
    //     dispatch(setLogoSrc(logoSrc));
    //     dispatch(setMobileLogoSrc(logoMobileSrc));
    // }, []);

    const outerWrapperProps: BoxProps = {
        component: mobile ? "header" : "nav",

        position: "sticky",
        top: "-1px",
        zIndex: 11,
        boxSizing: "border-box",

        display: "flex",
        flexDirection: "column"
    };

    const wrapperProps: BoxProps = {
        justifyContent: { xs: "normal", md: "center" },

        width: "100%",
        minHeight: { xs: "45px", md: "50px" },
        display: { xs: mobile ? "flex" : "none", md: mobile ? "none" : "flex" },

        // ...boxProps,

        sx: {
            backgroundColor: "primary.main"

            // ...boxProps?.sx
        }
    };

    return (
        <Box {...outerWrapperProps}>
            {mobile && (
                <MobileContactsBox phoneNumber={landingConfig.phoneNumber} />
            )}
            <Box {...wrapperProps}>
                {mobile && <HeaderMobileNavigationTemplate />}
                {!mobile && (
                    <HeaderDesktopNavigationTemplate categories={categories} />
                )}
            </Box>
        </Box>
    );
};

export default HeaderNavigation;
