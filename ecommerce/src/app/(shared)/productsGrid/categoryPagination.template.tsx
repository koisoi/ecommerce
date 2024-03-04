"use client";

import { useMediaQueries } from "@/lib/hooks";
import { Box, BoxProps, Pagination, PaginationProps } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const CategoryPagination = ({
    page,
    pagesCount,
    category,
    series
}: // onPageChange
{
    page: number;
    pagesCount: number;
    category: string;
    series?: string | null;
    // onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
}) => {
    const router = useRouter();

    const handlePageChange = (_: ChangeEvent<unknown>, page: number): void => {
        router.push(
            `/catalog/${category}${series ? "/" + series : ""}?page=${page}`
        );
    };

    const screen = useMediaQueries();

    const paginationWrapperProps: BoxProps = {
        display: "flex",
        justifyContent: "center",

        width: "100%",
        paddingY: "25px"
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
