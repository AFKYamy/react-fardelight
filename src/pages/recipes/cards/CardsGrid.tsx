// hooks
import usePaginatedCards from "@/hooks/usePaginatedCards";

// components
import Card from "./Card";

// types
import type { FoodType } from "@/types/recipes/foods";

export default function CardsGrid({ recipes }: { recipes: FoodType[] }) {
    const {
        visibleRecipes,
        hasMoreRecipes,
        handleShowMore
    } = usePaginatedCards(recipes, 6);

    return (
        <section className="mx-auto my-20 flex flex-col items-center gap-10 container">
            <div className="grid w-full grid-cols-1 items-stretch justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {visibleRecipes.map((rec) => (
                    <Card
                        key={rec.id}
                        rec={rec}
                    />
                ))}
            </div>

            {hasMoreRecipes && (
                <button
                    className="rounded-full bg-primary px-7 py-3 font-semibold text-black shadow-md hover:bg-neutral-950 hover:text-neutral-50"
                    type="button"
                    onClick={handleShowMore}
                >
                    Show more
                </button>
            )}
        </section>
    )
}