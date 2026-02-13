// contexts
import { useRecipesContext } from "@/contexts/RecipesContext";

// components
import Card from "./Card";

export default function Cards() {
    const { selectedRecipes } = useRecipesContext();

    return (
        <section className="flex justify-between gap-7 flex-wrap mx-auto my-25 container">
            {
                selectedRecipes.map((rec) => (
                    <Card
                        key={rec.id}
                        slug={rec.slug}
                        name={rec.name}
                        img={rec.img}
                    />
                ))
            }
        </section>
    )
}