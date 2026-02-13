import { createContext, useContext } from "react";

// hooks
import { useRecipes } from "@/hooks/useRecipes";

type RecipesContextType = ReturnType<typeof useRecipes>;

const RecipesContext = createContext<RecipesContextType | null>(null);

export function RecipesProvider({ children }: { children: React.ReactNode}) {
    const value = useRecipes();

    return (
        <RecipesContext.Provider value={value}>
            {children}
        </RecipesContext.Provider>    
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRecipesContext() {
    const context = useContext(RecipesContext);

    if (!context) {
        throw new Error("useRecipesContext must be inside <RecipesProvider>")
    }

    return context;
}