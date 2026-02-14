import { useState } from "react";

// lib
import { selectRecipes } from "@/lib/recipes";
import { getRandomItems } from "@/lib/getRandomItems";

export function useRecipes() {
    const [selectedMode, setSelectedMode] = useState("all-types");
    
    const selectedRecipes = selectRecipes(selectedMode);

    function getRandomRecipe(count: number) {
        return getRandomItems(selectedRecipes, count);
    }
    
    return {
        selectedMode,
        setSelectedMode,
        selectedRecipes,
        getRandomRecipe
    }
}