"use client";

import { useMediaQueries } from "@/lib";
import CardSkeleton from "../cardSkeleton.template";

const CardsSkeleton = () => {
    const screen = useMediaQueries();
    let skeletonNumber: number = 0;

    if (screen.xs) skeletonNumber = 3;
    if (screen.sm) skeletonNumber = 6;
    if (screen.md) skeletonNumber = 9;
    if (screen.mlg) skeletonNumber = 12;

    return Array(skeletonNumber).map((_, i) => <CardSkeleton key={i} />);
};

export default CardsSkeleton;
