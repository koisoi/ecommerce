"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import CategoryPaginationTemplate from "./categoryPaginationTemplate.client";

const CategoryPagination = ({
    page,
    pagesCount,
    url
}: {
    page: number;
    pagesCount: number;
    url: string;
}) => {
    const router = useRouter();

    const handlePageChange = (_: ChangeEvent<unknown>, page: number): void => {
        router.push(`${url}?page=${page}`);
    };

    return (
        <CategoryPaginationTemplate
            page={page}
            pagesCount={pagesCount}
            onPageChange={handlePageChange}
        />
    );
};

export default CategoryPagination;
