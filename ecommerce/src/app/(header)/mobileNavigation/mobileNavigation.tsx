"use client";

import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import HeaderMobileNavigationTemplate from "./mobileNavigation.template";

const HeaderMobileNavigation = () => {
    const router = useRouter();

    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    return <HeaderMobileNavigationTemplate onCartClick={handleCartClick} />;
};

export default HeaderMobileNavigation;
