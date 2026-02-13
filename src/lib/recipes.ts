// data
import { meals, drinks } from "@/data/recipes";

const allRecipes = [
    ...meals,
    ...drinks
];

export function findRecipe(slug: string) {
    return allRecipes.find((rec) => (
        rec.slug === slug
    ));
}

export function selectRecipes(mode: string) {
    console.log("ran", meals)
    switch (mode) {
        case "meals":
            return meals;
        case "drinks":
            return drinks;
        default:
            return allRecipes;
    }
}