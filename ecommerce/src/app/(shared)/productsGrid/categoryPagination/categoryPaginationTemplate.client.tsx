"use client";

import { useMediaQueries } from "@/lib";
import { Box, BoxProps, Pagination, PaginationProps } from "@mui/material";
import { ChangeEvent } from "react";

const CategoryPaginationTemplate = ({
    page,
    pagesCount,
    onPageChange
}: {
    page: number;
    pagesCount: number;
    onPageChange: (_: ChangeEvent<unknown>, page: number) => void;
}) => {
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

export default CategoryPaginationTemplate;
