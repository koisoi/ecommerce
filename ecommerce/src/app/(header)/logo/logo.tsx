import { useAppSelector } from "@/lib";
import LogoTemplate from "./logo.template";
import { GlobalState } from "@/lib/slices/global.slice";

const Logo = () => {
    const { logoImgLink } = useAppSelector(GlobalState);

    return <LogoTemplate logoLink={logoImgLink} />;
};

export default Logo;
