// contexts
import { useRecipesContext } from "@/contexts/RecipesContext";

// components
import Card from "../cards/Card";

// lib
import { capitalizeFirstLetter } from "@/lib/capitalizeFirstLetter";

export default function RandomRecommendations() {
    const { selectedMode, getRandomRecipe } = useRecipesContext();
    const randomRecipes = getRandomRecipe(3);
    
    return (
        <section className="flex flex-col gap-7 my-15">
            <h3 className="font-semibold">
                Related <span className="text-primary">
                    {capitalizeFirstLetter(`${selectedMode === "all-types" ? "Recipes" : selectedMode}`)}
                </span>
            </h3>
            <div className="grid grid-cols-1 items-stretch justify-items-center gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {randomRecipes.map((rec) => (
                    <Card
                        key={rec.id}
                        rec={rec}
                    />
                ))}
            </div>
        </section>
    )
}
