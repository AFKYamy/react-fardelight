type FoodCategories = "finger_foods" | "meals" | "feasts" | "sweets" | "drinks" | "pet_foods";
type FoodEffects = "Regeneration" | "Nausea" | "Comfort" | "Nourishment" | "Speed" | "Instant Health" | "Absorption" | "Clears Fire burning" | "Clears Latest Harmful Effect";

export type FoodType = {
    id: string;
    slug: string;
    name: string;
    type: FoodCategories;
    description: string;
    ingredients: {
        name: string;
        amount: number;
    }[];
    crafting: {
        source: string;
        img: string;
    }
    stats?: {
        hunger?: number;
        saturation?: number;
    };
    effects?: {
        name: FoodEffects;
        duration?: number;
    }[];
    img: string;
}