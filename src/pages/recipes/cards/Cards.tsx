// contexts
import { useRecipesContext } from "@/contexts/RecipesContext";

// components
import CardsGrid from "./CardsGrid";

export default function Cards() {
    const { selectedMode, selectedRecipes } = useRecipesContext();

    return (
        <CardsGrid
            key={selectedMode}
            recipes={selectedRecipes}
        />
    )
}
