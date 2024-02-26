"use client";

import { useAppDispatch, useAppSelector } from "@/lib";
import SearchPageTemplate from "./page.template";
import { SearchState, resetSearch, search } from "@/lib/slices/search.slice";
import { notFound, useSearchParams } from "next/navigation";
import { ChangeEvent, Suspense, useEffect, useState } from "react";
import Loading from "../(shared)/loading.template";

const SearchPageFC = () => {
    const dispatch = useAppDispatch();
    const params = useSearchParams();
    const productsPerPage = 12;

    const query = params.get("query");

    const { loading, response } = useAppSelector(SearchState);

    const [page, setPage] = useState<number>(1);
    const [pagesCount, setPagesCount] = useState<number>(0);

    const handlePageChange = (_: ChangeEvent<unknown>, page: number): void =>
        setPage(page);

    useEffect(() => {
        if (!query) return;

        const promise = dispatch(
            search({
                query,
                page,
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
        return notFound();
    }

    return (
        <SearchPageTemplate
            loading={loading}
            response={response}
            onPageChange={handlePageChange}
            page={page}
            pagesCount={pagesCount}
        />
    );
};

const SearchPage = () => {
    return (
        <Suspense fallback={<Loading>Загрузка...</Loading>}>
            <SearchPageFC />
        </Suspense>
    );
};

export default SearchPage;
