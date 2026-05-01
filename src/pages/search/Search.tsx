import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LuSearch } from "react-icons/lu";

import type { FormEvent } from "react";

// components
import Navbar from "@/components/nav/Navbar";
import Card from "@/pages/recipes/cards/Card";

// lib
import { searchRecipes } from "@/lib/recipes";

export default function Search() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get("q") ?? "";
    const [inputValue, setInputValue] = useState(query);

    const results = useMemo(() => searchRecipes(query), [query]);

    useEffect(() => {
        setInputValue(query);
    }, [query]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedQuery = inputValue.trim();

        if (!trimmedQuery) return;

        navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }

    return (
        <>
            <Navbar />
            <main className="mx-auto my-15 flex flex-col gap-10 container">
                <section className="flex flex-col gap-5">
                    <h1 className="font-medium">
                        Search <span className="text-primary">Results</span>
                    </h1>
                    <form
                        className="flex w-full max-w-2xl items-center gap-3 rounded-full bg-light-gray px-5 py-3 shadow-md"
                        role="search"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-gray sm:text-lg"
                            type="search"
                            value={inputValue}
                            placeholder="Search recipes"
                            aria-label="Search recipes"
                            onChange={(event) => setInputValue(event.target.value)}
                        />
                        <button
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-black hover:bg-neutral-950 hover:text-neutral-50"
                            type="submit"
                            aria-label="Search"
                        >
                            <LuSearch className="h-5 w-5" />
                        </button>
                    </form>
                </section>

                {query && (
                    <p className="text-lg text-dark-gray">
                        {results.length} {results.length === 1 ? "result" : "results"} for <span className="font-semibold text-black">"{query}"</span>
                    </p>
                )}

                {query && results.length > 0 && (
                    <section className="grid grid-cols-1 items-stretch justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {results.map((rec) => (
                            <Card
                                key={rec.id}
                                rec={rec}
                                label="Recipe"
                            />
                        ))}
                    </section>
                )}

                {query && results.length === 0 && (
                    <p className="rounded-xl bg-light-gray p-7 text-dark-gray shadow-md">
                        No recipes found.
                    </p>
                )}
            </main>
        </>
    )
}
