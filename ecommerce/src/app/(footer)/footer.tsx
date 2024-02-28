import { useAppSelector } from "@/lib";
import { GlobalState } from "@/lib/slices/global.slice";
import FooterTemplate from "./footer.template";
import { landingConfig } from "../config";

const Footer = () => {
    const { phoneNumber, storeAddress } = useAppSelector(GlobalState);

    return (
        <FooterTemplate
            phone={phoneNumber}
            address={storeAddress}
            categories={landingConfig.categories}
        />
    );
};

export default Footer;
