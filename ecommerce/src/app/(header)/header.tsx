import { useAppSelector } from "@/lib";
import { GlobalState } from "@/lib/slices/global.slice";
import HeaderTemplate from "./header.template";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const router = useRouter();

    const { categories } = useAppSelector(GlobalState);

    const handleDesktopTabClick = (path: string): void => {
        router.push(`/catalog?category=${path}`);
    };

    return (
        <HeaderTemplate
            categories={categories}
            onDesktopTabClick={handleDesktopTabClick}
        />
    );
};

export default Header;
