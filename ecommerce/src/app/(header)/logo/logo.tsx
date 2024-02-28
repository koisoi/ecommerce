import { landingConfig } from "@/app/config";
import LogoTemplate from "./logo.template";

const Logo = () => {
    return <LogoTemplate logoLink={landingConfig.logoImgLink} />;
};

export default Logo;
