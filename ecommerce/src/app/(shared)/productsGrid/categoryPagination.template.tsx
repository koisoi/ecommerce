"use client";

import { useMediaQueries } from "@/lib/hooks";
import { Box, BoxProps, Pagination, PaginationProps } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const CategoryPagination = ({
    page,
    pagesCount,
    linkBeforeQuery
}: {
    page: number;
    pagesCount: number;
    linkBeforeQuery: string;
}) => {
    const router = useRouter();

    const handlePageChange = (_: ChangeEvent<unknown>, page: number): void => {
        router.push(`${linkBeforeQuery}page=${page}`);
    };

    const screen = useMediaQueries();

    const paginationWrapperProps: BoxProps = {
        display: "flex",
        justifyContent: "center",

        width: "100%",
        paddingY: { xs: "1rem", md: "1.5rem" }
    };

    const paginationProps: PaginationProps = {
        count: pagesCount,
        page: page,
        onChange: handlePageChange,

        size: screen.sm ? "large" : "small",
        shape: "rounded"
    };

    return (
        <Box {...paginationWrapperProps}>
            <Pagination {...paginationProps} />
        </Box>
    );
};

export default CategoryPagination;
