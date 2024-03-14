import { useAppSelector } from "@/lib";
import { GlobalState } from "@/lib/slices/global.slice";
import dynamic from "next/dynamic";

const DynamicLogo = dynamic(() => import("@/app/(header)/logo"), {
    ssr: false
});

const ClientLogo = () => {
    const { logoSrc } = useAppSelector(GlobalState);

    return <DynamicLogo logoSrc={logoSrc} />;
};

export default ClientLogo;
