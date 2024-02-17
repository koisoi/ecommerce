"use client";

import { useRouter } from "next/navigation";
import EmptyCartTemplate from "./emptyCart.template";

const EmptyCart = ({ full }: { full?: boolean }) => {
    const router = useRouter();

    const handleCatalogClick = () => {
        router.push("/catalog?category=TOP.range_finders");
    };

    return (
        <EmptyCartTemplate onCatalogClick={handleCatalogClick} full={full} />
    );
};

export default EmptyCart;