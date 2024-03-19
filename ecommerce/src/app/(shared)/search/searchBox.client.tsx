"use client";

import {
    ChangeEventHandler,
    KeyboardEventHandler,
    MouseEventHandler,
    useState
} from "react";
import SearchBoxTemplate from "./searchBoxTemplate";
import { useRouter } from "next/navigation";
import { clearPopupSearchResponse, useAppDispatch } from "@/lib";

const SearchBox = ({ searchPage }: { searchPage?: boolean }) => {
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
        <SearchBoxTemplate
            onSearch={handleSearch}
            searchQuery={searchQuery}
            onSearchQueryChange={handleSearchQueryChange}
            onSearchEnter={handleSearchEnter}
            searchPopoverAnchorEl={searchPopoverAnchorEl}
            searchPopoverOpen={searchPopoverOpen}
            onPopoverClose={handlePopoverClose}
            searchPage={searchPage}
        />
    );
};

export default SearchBox;
