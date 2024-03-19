"use client";

import {
    SearchState,
    resetSearch,
    search,
    useAppDispatch,
    useAppSelector
} from "@/lib";
import SearchPageTemplate from "./searchPageTemplate";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Loading from "../(shared)/loading";
import NoQuery from "./noQuery";

const SearchPage = () => {
    const dispatch = useAppDispatch();
    const params = useSearchParams();
    const productsPerPage = 12;

    const query = params.get("query");
    const page = params.get("page");

    const { loading, response } = useAppSelector(SearchState);

    const [pagesCount, setPagesCount] = useState<number>(0);

    useEffect(() => {
        if (!query) return;

        const promise = dispatch(
            search({
                query,
                page: Number(page || 1),
                productsPerPage
            })
        );
        promise.catch((error) => console.error(error.message));

        return () => {
            promise.abort();
            dispatch(resetSearch());
        };
    }, [query, page]);

    useEffect(() => {
        setPagesCount(
            Math.ceil((response?.totalItemCount || 0) / productsPerPage)
        );
    }, [response?.totalItemCount]);

    if (!query) {
        return <NoQuery />;
    }

    return (
        <SearchPageTemplate
            loading={loading}
            response={response}
            page={Number(page)}
            pagesCount={pagesCount}
            linkBeforeQuery={`/search?query=${query}&`}
        />
    );
};

const SearchPageSuspense = () => {
    return (
        <Suspense fallback={<Loading>Загрузка...</Loading>}>
            <SearchPage />
        </Suspense>
    );
};

export default SearchPageSuspense;
