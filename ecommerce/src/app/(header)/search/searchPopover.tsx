import { useEffect, useState } from "react";
import SearchPopoverTemplate from "./searchPopover.template";
import { useAppDispatch, useAppSelector } from "@/lib";
import {
    SearchPopoverState,
    clearPopupSearchResponse,
    searchPopover,
    setCanSearchInPopover
} from "@/lib/slices/searchPopover.slice";
import { PayloadAction } from "@reduxjs/toolkit";

const SearchPopover = ({
    searchQuery,
    anchorEl,
    open,
    onClose
}: {
    searchQuery: string;
    anchorEl: Element | null;
    open: boolean;
    onClose: (...props: any) => any;
}) => {
    const dispatch = useAppDispatch();
    const limit = 10;

    const { loading, response, canSearchInPopover } =
        useAppSelector(SearchPopoverState);

    useEffect(() => {
        if (!searchQuery.length) return;

        let promise: Promise<PayloadAction<any>>;
        const timeout = setTimeout(() => {
            promise = dispatch(
                searchPopover({
                    query: searchQuery,
                    productsPerPage: limit,
                    page: 1
                })
            );
            // @ts-ignore
            promise.unwrap().catch((error) => console.error(error.message));
        }, 1000);

        return () => {
            // @ts-ignore
            if (promise) promise.abort();
            clearTimeout(timeout);
        };
    }, [searchQuery]);

    useEffect(() => {
        dispatch(setCanSearchInPopover(true));

        return () => {
            dispatch(setCanSearchInPopover(false));
        };
    }, []);

    return (
        <SearchPopoverTemplate
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            loading={loading}
            response={response}
            seeMoreHref={{ pathname: "/search", query: { query: searchQuery } }}
            limit={limit}
        />
    );
};

export default SearchPopover;
