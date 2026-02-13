import { useState } from "react";

// lib
import { selectRecipes } from "@/lib/recipes";

export function useRecipes() {
    const [selectedMode, setSelectedMode] = useState("all-types");
    
    const selectedRecipes = selectRecipes(selectedMode);
    
    return {
        selectedMode,
        setSelectedMode,
        selectedRecipes,
    }
}