// data
import { meals, drinks, finger_foods } from "@/data/recipes";

export const allRecipes = [
    ...meals,
    ...drinks,
    ...finger_foods,
];

export function findRecipe(slug: string) {
    return allRecipes.find((rec) => (
        rec.slug === slug
    ));
}

export function selectRecipes(mode: string) {
    switch (mode) {
        case "meals":
            return meals;
        case "drinks":
            return drinks;
        case "finger-foods":
            return finger_foods;
        default:
            return allRecipes;
    }
}

export function searchRecipes(query: string) {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return [];

    return allRecipes.filter((rec) => {
        const searchableText = [
            rec.name,
            rec.type,
            rec.description,
            rec.crafting.source,
            ...rec.ingredients.map((ing) => ing.name),
            ...(rec.effects?.map((eff) => eff.name) ?? []),
        ].join(" ").toLowerCase();

        return searchableText.includes(normalizedQuery);
    });
}
