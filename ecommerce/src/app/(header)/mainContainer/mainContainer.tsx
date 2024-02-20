"use client";

import {
    ChangeEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    useLayoutEffect,
    useState
} from "react";
import HeaderMainContainerTemplate from "./mainContainer.template";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib";
import { setDesktopCartButtonRect } from "@/lib/slices/cartAnimation.slice";

const HeaderMainContainer = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [backCallOpen, setBackCallOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleCartClick: MouseEventHandler<HTMLButtonElement> = () => {
        router.push("/cart");
    };

    const handleBackCallButtonClick: MouseEventHandler<
        HTMLButtonElement
    > = () => {
        setBackCallOpen(true);
    };

    const handleBackCallClose: MouseEventHandler<HTMLButtonElement> = () => {
        setBackCallOpen(false);
    };

    const handleSearch: MouseEventHandler<HTMLButtonElement> = (event) => {
        router.push(`/search?query=${searchQuery}`);
    };

    const handleSearchQueryChange: ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement
    > = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchEnter: KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.key === "Enter") {
            router.push(`/search?query=${searchQuery}`);
        }
    };

    useLayoutEffect(() => {
        const button = document.getElementById("desktop-header-button");

        dispatch(setDesktopCartButtonRect(button?.getBoundingClientRect()));
    }, []);

    return (
        <HeaderMainContainerTemplate
            onCartClick={handleCartClick}
            backCallOpen={backCallOpen}
            onBackCallButtonClick={handleBackCallButtonClick}
            onBackCallClose={handleBackCallClose}
            onSearch={handleSearch}
            searchQuery={searchQuery}
            onSearchQueryChange={handleSearchQueryChange}
            onSearchEnter={handleSearchEnter}
        />
    );
};

export default HeaderMainContainer;
