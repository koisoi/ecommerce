import { useAppSelector } from "@/lib";
import { GlobalState } from "@/lib/slices/global.slice";
import FooterTemplate from "./footer.template";

const Footer = () => {
    const { phoneNumber, storeAddress, categories } =
        useAppSelector(GlobalState);

    return (
        <FooterTemplate
            phone={phoneNumber}
            address={storeAddress}
            categories={categories}
        />
    );
};

export default Footer;
