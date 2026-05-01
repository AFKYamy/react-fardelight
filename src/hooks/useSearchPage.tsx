import { useEffect, useMemo, useState, type SyntheticEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// lib
import { searchRecipes } from "@/lib/recipes";
import { buildSearchUrl, normalizeSearchQuery } from "@/lib/search";

export function useSearchPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const query = searchParams.get("q") ?? "";
    const [inputValue, setInputValue] = useState(query);

    useEffect(() => {
        setInputValue(query);
    }, [query]);

    const results = useMemo(() => searchRecipes(query), [query]);

    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedQuery = normalizeSearchQuery(inputValue);

        if (!trimmedQuery) return;

        navigate(buildSearchUrl(trimmedQuery));
    }

    return {
        query,
        inputValue,
        setInputValue,
        results,
        handleSubmit,
    };
}