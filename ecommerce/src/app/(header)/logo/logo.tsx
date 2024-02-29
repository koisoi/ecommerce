import { landingConfig } from "@/lib/data/config";
import LogoTemplate from "./logo.template";

const Logo = () => {
    return <LogoTemplate logoLink={landingConfig.logoImgLink} />;
};

export default Logo;
