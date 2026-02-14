// contexts
import { useRecipesContext } from "@/contexts/RecipesContext";

// components
import Card from "../cards/Card";

// lib
import { capitalizeFirstLetter } from "@/lib/capitalizeFirstLetter";

export default function RandomRecommendations({ recType }: { recType: string }) {
    const { getRandomRecipe } = useRecipesContext();
    const randomRecipes = getRandomRecipe(3);
    
    return (
        <section className="flex flex-col gap-7 my-15">
            <h3 className="font-semibold">Random <span className="text-primary">{capitalizeFirstLetter(recType)}</span></h3>
            <div className="flex justify-between gap-7 flex-wrap">
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