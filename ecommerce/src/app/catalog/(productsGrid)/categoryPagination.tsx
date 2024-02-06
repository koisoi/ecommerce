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

        size: "large",
        shape: "rounded"
    };

    return (
        <Box {...paginationWrapperProps}>
            <Pagination {...paginationProps} />
        </Box>
    );
};

export default CategoryPagination;
