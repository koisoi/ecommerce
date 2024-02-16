"use client";

import { MouseEventHandler, useState } from "react";
import HeaderMainContainerTemplate from "./mainContainer.template";
import { useRouter } from "next/navigation";

const HeaderMainContainer = () => {
    const router = useRouter();

    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    return <HeaderMainContainerTemplate onCartClick={handleCartClick} />;
};

export default HeaderMainContainer;
