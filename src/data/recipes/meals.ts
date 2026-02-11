import type { MealType } from "@/types/recipes/foods.ts";

export const meals: MealType[] = [
    {
        id: "meals1",
        slug: "fruit-salad",
        name: "Fruit Salad",
        type: "meals",
        description: "Fruit Salad can be crafted with a Bowl, two Berries (either Glow Berries or Sweet Berries), two Melon Slices, one Pumpkin Slice, and an Apple. Once eaten, Fruit Salad provides the Regeneration effect for 5 seconds.",
        ingredients: [
            { 
                name: "Bowl",
                amount: 1
            },
            { 
                name: "Berries",
                amount: 2
            },
            { 
                name: "Melon Slices",
                amount: 2
            },
            { 
                name: "Pumpkin Slice",
                amount: 1
            },
            { 
                name: "Apple",
                amount: 1
            }
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/Fruid_Salad_Crafting.png"
        },
        stats: {
            hunger: 6,
            saturation: 3.6
        },
        effects: [
            {
                name: "Regeneration",
                duration: 5000
            }
        ],
        img: "/assets/food/Fruit_Salad.png",
    },
    {
        id: "meals2",
        slug: "nether-salad",
        name: "Nether Salad",
        type: "meals",
        description: "Nether Salad can be crafted with a Bowl, Crimson Fungus, and Warped Fungus.",
        ingredients: [
            {
                name: "Bowl",
                amount: 1
            },
            {
                name: "Crimson Fungus",
                amount: 1
            },
            {
                name: "Warped Fungus",
                amount: 1
            }
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/Nether_Salad_Crafting.png"
        },
        stats: {
            hunger: 5,
            saturation: 4
        },
        effects: [
            {
                name: "Nausea",
                duration: 12000
            }
        ],
        img: "/assets/food/Nether_Salad.png",
    },
    {
        id: "meals3",
        slug: "cooked-rice",
        name: "Cooked Rice",
        type: "meals",
        description: "It is obtained by cooking rice in a cooking pot (plated with a bowl) taking 100t (5s) and awarding 0.35xp",
        ingredients: [
            {
                name: "Rice",
                amount: 1
            }
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/Crafting_Cooked_Rice.png"
        },
        stats: {
            hunger: 6,
            saturation: 5.8
        },
        effects: [
            {
                name: "Comfort",
                duration: 30000
            }
        ],
        img: "/assets/food/Cooked_Rice.png",
    },
    {
        id: "meals4",
        slug: "bone-broth",
        name: "Bone Broth",
        type: "meals",
        description: "In a Cooking Pot, add a Bone and either a Brown Mushroom, Red Mushroom or Glow Lichen.",
        ingredients: [
            {
                name: "Bone",
                amount: 1
            },
            {
                name: "Brown Mushroom",
                amount: 1
            }
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/Cooking_Bone_Broth.png"
        },
        stats: {
            hunger: 8,
            saturation: 11.2
        },
        effects: [
            {
                name: "Comfort",
                duration: 60000
            }
        ],
        img: "/assets/food/Bone_Broth.png",
    },
];