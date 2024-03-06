"use client";

import { useAppDispatch, useAppSelector } from "@/lib";
import SearchPageTemplate from "./page.template";
import { SearchState, resetSearch, search } from "@/lib/slices/search.slice";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Loading from "../(shared)/loading.template";
import NoQuery from "./noQueryPage.template";

const SearchPageFC = () => {
    const dispatch = useAppDispatch();
    const params = useSearchParams();
    // const router = useRouter();
    const productsPerPage = 12;

    const query = params.get("query");
    const page = params.get("page");

    const { loading, response } = useAppSelector(SearchState);

    // const [page, setPage] = useState<number>(1);
    const [pagesCount, setPagesCount] = useState<number>(0);

    // const handlePageChange = (_: ChangeEvent<unknown>, page: number): void =>
    //     router.push(`/search?query=${query}&page=${page}`);

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
        // return notFound();
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

const SearchPage = () => {
    return (
        <Suspense fallback={<Loading>Загрузка...</Loading>}>
            <SearchPageFC />
        </Suspense>
    );
};

export default SearchPage;
