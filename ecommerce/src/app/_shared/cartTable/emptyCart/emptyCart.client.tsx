"use client";

import { useRouter } from "next/navigation";
import EmptyCartTemplate from "./emptyCartTemplate";

const EmptyCart = ({ full }: { full?: boolean }) => {
    const router = useRouter();

    const handleCatalogClick = () => {
        router.push("/catalog");
    };

    return (
        <EmptyCartTemplate onCatalogClick={handleCatalogClick} full={full} />
    );
};

export default EmptyCart;
