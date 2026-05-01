// contexts
import { useRecipesContext } from "@/contexts/RecipesContext";

// components
import Card from "./Card";

// lib
import { shuffleItems } from "@/lib/getRandomItems";

export default function Cards() {
    const { selectedRecipes } = useRecipesContext();
    const shuffledRecipes = shuffleItems(selectedRecipes);

    return (
        <section className="grid grid-cols-1 items-stretch justify-items-center gap-7 mx-auto my-20 sm:grid-cols-2 lg:grid-cols-3 container">
            {
                shuffledRecipes.map((rec) => (
                    <Card
                        key={rec.id}
                        rec={rec}
                    />
                ))
            }
        </section>
    )
}
