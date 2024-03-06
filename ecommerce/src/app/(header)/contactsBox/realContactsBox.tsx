"use client";

import { phoneNumber, storeAddress } from "@/lib/data/geoInf";
import HeaderContactsBox from "./contactsBox.template";
import { useAppSelector } from "@/lib";
import { GlobalState } from "@/lib/slices/global.slice";
import MobileContactsBox from "./mobileContactsBox";

const RealHeaderContactsBox = ({ mobile }: { mobile?: boolean }) => {
    const { geo } = useAppSelector(GlobalState);

    return mobile ? (
        <MobileContactsBox
            phoneNumber={phoneNumber[geo]}
            storeAddress={storeAddress[geo]}
        />
    ) : (
        <HeaderContactsBox
            phoneNumber={phoneNumber[geo]}
            storeAddress={storeAddress[geo]}
        />
    );
};

export default RealHeaderContactsBox;
