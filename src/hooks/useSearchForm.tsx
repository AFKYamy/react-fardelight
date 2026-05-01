import { useState, type SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

// lib
import { buildSearchUrl, normalizeSearchQuery } from "@/lib/search";

export function useSearchForm() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedQuery = normalizeSearchQuery(query);

        if (!trimmedQuery) return;

        navigate(buildSearchUrl(trimmedQuery));
        setQuery("");
    }

    return {
        query,
        setQuery,
        handleSubmit
    }
}