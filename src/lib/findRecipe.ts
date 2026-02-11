// data
import { meals } from "@/data/recipes/meals";

const allRecipes = [
    ...meals
];

export default function findRecipe(slug: string) {
    return allRecipes.find((rec) => (
        rec.slug === slug
    ));
}