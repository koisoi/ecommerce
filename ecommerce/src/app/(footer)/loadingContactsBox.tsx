import { phoneNumber, storeAddress } from "@/lib/data/geoInf";
import ContactsBox from "./contactsBox.template";

const LoadingContactsBox = () => {
    return (
        <ContactsBox phone={phoneNumber["rf"]} address={storeAddress["rf"]} />
    );
};

export default LoadingContactsBox;
