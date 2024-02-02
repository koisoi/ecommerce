"use client";

import { Skeleton, SkeletonProps } from "@mui/material";

// TODO: Сделать в виде карточки
const CardSkeleton = () => {
    const skeletonProps: SkeletonProps = {
        variant: "rectangular",
        width: "100%",

        sx: {
            display: "block",
            minHeight: "410px",
            borderRadius: "4px"
        }
    };

    return <Skeleton {...skeletonProps} />;
};

export default CardSkeleton;
