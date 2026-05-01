import { useMemo, useState } from "react";

// lib
import { shuffleItems } from "@/lib/getRandomItems";

export default function usePaginatedCards<T>(items: T[], batchAmount: number = 6) {
    const [visibleCount, setVisibleCount] = useState(batchAmount);
    const shuffledRecipes = useMemo(() => shuffleItems(items), [items]);
    const visibleRecipes = shuffledRecipes.slice(0, visibleCount);
    const hasMoreRecipes = visibleCount < shuffledRecipes.length;

    const handleShowMore = () => {
        setVisibleCount((currentCount) => currentCount + batchAmount);
    }

    return {
        visibleCount,
        setVisibleCount,
        shuffledRecipes,
        visibleRecipes,
        hasMoreRecipes,
        handleShowMore
    }
}