// components
import Card from "../recipes/cards/Card";

import type { FoodType } from "@/types/recipes/foods";

type SearchResultsProps = {
    query: string;
    results: FoodType[];
}

export default function SearchResults({ query, results }: SearchResultsProps) {    
    return (
        <section>
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
        </section>
    )
}