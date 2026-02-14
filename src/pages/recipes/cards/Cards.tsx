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
        <section className="flex justify-between gap-7 flex-wrap mx-auto my-20 container">
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