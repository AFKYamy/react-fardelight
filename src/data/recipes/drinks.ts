import type { FoodType } from "@/types/recipes/foods";

export const drinks: FoodType[] = [
    {
        id: "drinks1",
        slug: "hot-cocoa",
        name: "Hot Cocoa",
        type: "drinks",
        description: "Hot Cocoa is obtained using, a Milk Bottle or a Milk Bucket, two Cocoa Beans, and a Sugar inside of a cooking pot. Plated with a bottle.",
        ingredients: [
            { name: "Milk Bucket", amount: 1 },
            { name: "Cocoa Beans", amount: 2 },
            { name: "Sugar", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/drinks/Crafting_Hot_Cocoa.png"
        },
        effects: [
            { name: "Clears Latest Harmful Effect" }
        ],
        img: "/assets/food/drinks/Hot_Cocoa.png",
    },
    {
        id: "drinks2",
        slug: "apple-cider",
        name: "Apple Cider",
        type: "drinks",
        description: "Apple cider is obtained using two Apples, and a Sugar inside of a cooking pot. Plated with a glass bottle.",
        ingredients: [
            { name: "Apples", amount: 2 },
            { name: "Sugar", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/drinks/Crafting_Apple_Cider.png"
        },
        effects: [
            { name: "Absorption" }
        ],
        img: "/assets/food/drinks/Apple_Cider.png",
    },
    {
        id: "drinks3",
        slug: "melon-juice",
        name: "Melon Juice",
        type: "drinks",
        description: "Melon Juice is crafted with Four Melon Slices, Sugar, and a Glass Bottle. Melon Juice provides Minor Instant Health.",
        ingredients: [
            { name: "Melon Slice", amount: 4 },
            { name: "Sugar", amount: 1 },
            { name: "Glass Bottle", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/drinks/Crafting_Melon_Juice.png"
        },
        effects: [
            { name: "Instant Health" }
        ],
        img: "/assets/food/drinks/Melon_Juice.png",
    },
];