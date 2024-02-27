"use client";

import { useMediaQueries } from "@/lib/hooks";
import { Box, BoxProps, Pagination, PaginationProps } from "@mui/material";
import { ChangeEvent } from "react";

// TODO: сделать слайс?
const CategoryPagination = ({
    page,
    pagesCount,
    onPageChange
}: {
    page: number;
    pagesCount: number;
    onPageChange: (event: ChangeEvent<unknown>, page: number) => void;
}) => {
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
        onChange: onPageChange,

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
