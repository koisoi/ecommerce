import { phoneNumber, storeAddress } from "@/lib/data/geoInf";
import HeaderContactsBox from "./contactsBox.template";
import MobileContactsBox from "./mobileContactsBox";

const LoadingHeaderContactsBox = ({ mobile }: { mobile?: boolean }) => {
    return mobile ? (
        <MobileContactsBox
            phoneNumber={phoneNumber["rf"]}
            storeAddress={storeAddress["rf"]}
        />
    ) : (
        <HeaderContactsBox
            phoneNumber={phoneNumber["rf"]}
            storeAddress={storeAddress["rf"]}
        />
    );
};

export default LoadingHeaderContactsBox;
