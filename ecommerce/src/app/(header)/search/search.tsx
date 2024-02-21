"use client";

import {
    ChangeEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    useState
} from "react";
import HeaderSearchBoxTemplate from "./searchBox.template";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib";
import { clearPopupSearchResponse } from "@/lib/slices/searchPopover.slice";

const HeaderSearchBox = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchPopoverAnchorEl, setSearchPopoverAnchorEL] =
        useState<Element | null>(null);
    const [searchPopoverOpen, setSearchPopoverOpen] = useState<boolean>(false);

    const handleSearch: MouseEventHandler<HTMLButtonElement> = () => {
        router.push(`/search?query=${searchQuery}`);
    };

    const handleSearchEnter: KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.key === "Enter") {
            router.push(`/search?query=${searchQuery}`);
        }
    };

    const handleSearchQueryChange: ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement
    > = (event) => {
        setSearchQuery(event.target.value);
        window.addEventListener("scroll", handlePopoverClose);
        setSearchPopoverOpen(!!event.target.value);
        setSearchPopoverAnchorEL(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setSearchPopoverOpen(false);
        dispatch(clearPopupSearchResponse());
        window.removeEventListener("scroll", handlePopoverClose);
    };

    return (
        <HeaderSearchBoxTemplate
            onSearch={handleSearch}
            searchQuery={searchQuery}
            onSearchQueryChange={handleSearchQueryChange}
            onSearchEnter={handleSearchEnter}
            searchPopoverAnchorEl={searchPopoverAnchorEl}
            searchPopoverOpen={searchPopoverOpen}
            onPopoverClose={handlePopoverClose}
        />
    );
};

export default HeaderSearchBox;
