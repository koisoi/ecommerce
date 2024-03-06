"use client";

import { phoneNumber, storeAddress } from "@/lib/data/geoInf";
import ContactsBox from "./contactsBox.template";
import { useAppSelector } from "@/lib";
import { GlobalState } from "@/lib/slices/global.slice";

const LoadingContactsBox = () => {
    const { geo } = useAppSelector(GlobalState);

    return <ContactsBox phone={phoneNumber[geo]} address={storeAddress[geo]} />;
};

export default LoadingContactsBox;
