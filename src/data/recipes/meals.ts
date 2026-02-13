import type { FoodType } from "@/types/recipes/foods.ts";

export const meals: FoodType[] = [
    {
        id: "meals1",
        slug: "fruit-salad",
        name: "Fruit Salad",
        type: "meals",
        description: "Fruit Salad can be crafted with a Bowl, two Berries (either Glow Berries or Sweet Berries), two Melon Slices, one Pumpkin Slice, and an Apple. Once eaten, Fruit Salad provides the Regeneration effect for 5 seconds.",
        ingredients: [
            { name: "Bowl", amount: 1 },
            { name: "Berries", amount: 2 },
            { name: "Melon Slices", amount: 2 },
            { name: "Pumpkin Slice", amount: 1 },
            { name: "Apple", amount: 1 }
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/meals/Fruit_Salad_Crafting.png"
        },
        stats: { hunger: 6, saturation: 3 },
        effects: [
            { name: "Regeneration", duration: 5000 }
        ],
        img: "/assets/food/meals/Fruit_Salad.png",
    },
    {
        id: "meals2",
        slug: "nether-salad",
        name: "Nether Salad",
        type: "meals",
        description: "Nether Salad can be crafted with a Bowl, Crimson Fungus, and Warped Fungus.",
        ingredients: [
            { name: "Bowl", amount: 1 },
            { name: "Crimson Fungus", amount: 1 },
            { name: "Warped Fungus", amount: 1 }
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/meals/Nether_Salad_Crafting.png"
        },
        stats: { hunger: 5, saturation: 4 },
        effects: [
            { name: "Nausea", duration: 12000 }
        ],
        img: "/assets/food/meals/Nether_Salad.png",
    },
    {
        id: "meals3",
        slug: "cooked-rice",
        name: "Cooked Rice",
        type: "meals",
        description: "It is obtained by cooking rice in a cooking pot (plated with a bowl) taking 100t (5s) and awarding 0.35xp",
        ingredients: [
            { name: "Rice", amount: 1 }
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Cooked_Rice.png"
        },
        stats: { hunger: 6, saturation: 5 },
        effects: [
            { name: "Comfort", duration: 30000 }
        ],
        img: "/assets/food/meals/Cooked_Rice.png",
    },
    {
        id: "meals4",
        slug: "bone-broth",
        name: "Bone Broth",
        type: "meals",
        description: "In a Cooking Pot, add a Bone and either a Brown Mushroom, Red Mushroom or Glow Lichen.",
        ingredients: [
            { name: "Bone", amount: 1 },
            { name: "Brown Mushroom", amount: 1 }
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Cooking_Bone_Broth.png"
        },
        stats: { hunger: 8, saturation: 11 },
        effects: [
            { name: "Comfort", duration: 60000 }
        ],
        img: "/assets/food/meals/Bone_Broth.png",
    },
    {
        id: "meals5",
        slug: "beef-stew",
        name: "Beef Stew",
        type: "meals",
        description: "Beef Stew is made by placing Minced Beef/Raw Beef, Carrot, and Potato in a cooking pot.",
        ingredients: [
            { name: "Minced Beef", amount: 1 },
            { name: "Carrot", amount: 1 },
            { name: "Potato", amount: 1 }
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Beef_Stew.png"
        },
        stats: { hunger: 12, saturation: 19  },
        effects: [
            { name: "Comfort", duration: 180000 }
        ],
        img: "/assets/food/meals/Beef_Stew.png",
    },
    {
        id: "meals6",
        slug: "chicken-soup",
        name: "Chicken Soup",
        type: "meals",
        description: "In a Cooking Pot add a Carrot and an Onion, as well as either a Cabbage or Cabbage Leaf and either a Raw Chicken or Raw Chicken Cuts.",
        ingredients: [
            { name: "Onion", amount: 1 },
            { name: "Carrot", amount: 1 },
            { name: "Cabbage", amount: 1 },
            { name: "Raw Chicken", amount: 1 }
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Chicken_Soup.png"
        },
        stats: { hunger: 14, saturation: 22  },
        effects: [
            { name: "Comfort", duration: 180000 }
        ],
        img: "/assets/food/meals/Chicken_Soup.png",
    },
    {
        id: "meals7",
        slug: "fish-stew",
        name: "Fish Stew",
        type: "meals",
        description: "Fish stew is made by placing any raw fish, Tomato Sauce, and an Onion in a Cooking Pot.",
        ingredients: [
            { name: "Raw Fish", amount: 1 },
            { name: "Tomato Sauce", amount: 1 },
            { name: "Onion", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Fish_Stew.png"
        },
        stats: { hunger: 12, saturation: 19  },
        effects: [
            { name: "Comfort", duration: 180000 }
        ],
        img: "/assets/food/meals/Fish_Stew.png",
    },
    {
        id: "meals8",
        slug: "fried-rice",
        name: "Fried Rice",
        type: "meals",
        description: "It is obtained by cooking rice, an egg, a carrot, and an onion in a cooking Pot with a source of heat under it.",
        ingredients: [
            { name: "Rice", amount: 1 },
            { name: "Egg", amount: 1 },
            { name: "Carrot", amount: 1 },
            { name: "Onion", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Fried_Rice.png"
        },
        stats: { hunger: 14, saturation: 22  },
        effects: [
            { name: "Comfort", duration: 300000 }
        ],
        img: "/assets/food/meals/Fried_Rice.png",
    },
    {
        id: "meals9",
        slug: "pumpkin-soup",
        name: "Pumpkin Soup",
        type: "meals",
        description: "In a Cooking Pot, add a Pumpkin Slice and one each of the following:  Milk Bucket or Milk Bottle, Cabbage or Cabbage Leaf, Raw Bacon or Raw Porkchop.",
        ingredients: [
            { name: "Pumpkin Slice", amount: 1 },
            { name: "Milk Bucket", amount: 1 },
            { name: "Cabbage", amount: 1 },
            { name: "Raw Porkchop", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Pumpkin_Soup.png"
        },
        stats: { hunger: 14, saturation: 22  },
        effects: [
            { name: "Comfort", duration: 300000 }
        ],
        img: "/assets/food/meals/Pumpkin_Soup.png",
    },
    {
        id: "meals10",
        slug: "baked-cod-stew",
        name: "Baked Cod Stew",
        type: "meals",
        description: "In a Cooking Pot, add either a Raw Cod or Raw Cod Slice, a Tomato, an Egg and a Potato.",
        ingredients: [
            { name: "Raw Cod", amount: 1 },
            { name: "Tomato", amount: 1 },
            { name: "Egg", amount: 1 },
            { name: "Potato", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Baked_Cod_Stew.png"
        },
        stats: { hunger: 14, saturation: 22  },
        effects: [
            { name: "Comfort", duration: 300000 }
        ],
        img: "/assets/food/meals/Baked_Cod_Stew.png",
    },
    {
        id: "meals11",
        slug: "noodle-soup",
        name: "Noodle Soup",
        type: "meals",
        description: "In a Cooking Pot, add a Fried Egg, Raw Pasta, Dried Kelp and either Raw Bacon or Raw Porkchop.",
        ingredients: [
            { name: "Fried Egg", amount: 1 },
            { name: "Raw Pasta", amount: 1 },
            { name: "Dried Kelp", amount: 1 },
            { name: "Raw Porkchop", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Noodle_Soup.png"
        },
        stats: { hunger: 14, saturation: 22  },
        effects: [
            { name: "Comfort", duration: 300000 }
        ],
        img: "/assets/food/meals/Noodle_Soup.png",
    },
    {
        id: "meals12",
        slug: "bacon-and-eggs",
        name: "Bacon and Eggs",
        type: "meals",
        description: "Place two fried eggs, two cooked pieces of bacon and a bowl in a crafting grid.",
        ingredients: [
            { name: "Fried Egg", amount: 2 },
            { name: "Cooked Bacon", amount: 2 },
            { name: "Bowl", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/meals/Crafting_Bacon_and_Eggs.png"
        },
        stats: { hunger: 10, saturation: 12  },
        effects: [
            { name: "Nourishment", duration: 60000 }
        ],
        img: "/assets/food/meals/Bacon_and_Eggs.png",
    },
    {
        id: "meals13",
        slug: "pasta-with-meatballs",
        name: "Pasta with Meatballs",
        type: "meals",
        description: "Pasta with Meatballs can be made by placing Minced Beef, Raw Pasta, and Tomato Sauce in a Cooking Pot. It provides nourishment for 3:00.",
        ingredients: [
            { name: "Minced Beef", amount: 1 },
            { name: "Raw Pasta", amount: 1 },
            { name: "Tomato Sauce", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Pasta_with_Meatballs.png"
        },
        stats: { hunger: 12, saturation: 19  },
        effects: [
            { name: "Nourishment", duration: 180000 }
        ],
        img: "/assets/food/meals/Pasta_with_Meatballs.png",
    },
    {
        id: "meals14",
        slug: "mushroom-rice",
        name: "Mushroom Rice",
        type: "meals",
        description: "In a Cooking Pot add a Brown Mushroom, Red Mushroom, Rice as well as either a Carrot or Potato.",
        ingredients: [
            { name: "Brown Mushroom", amount: 1 },
            { name: "Red Mushroom", amount: 1 },
            { name: "Rice", amount: 1 },
            { name: "Carrot", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Mushroom_Rice.png"
        },
        stats: { hunger: 12, saturation: 19  },
        effects: [
            { name: "Nourishment", duration: 180000 }
        ],
        img: "/assets/food/meals/Mushroom_Rice.png",
    },
    {
        id: "meals15",
        slug: "vegetable-noodles",
        name: "Vegetable Noodles",
        type: "meals",
        description: "In a pot, add Raw Pasta, a Carrot, a Brown Mushroom, either a Cabbage or Cabbage Leaf and one of the following: a Potato, a Beetroot, an Onion or another Carrot.",
        ingredients: [
            { name: "Raw Pasta", amount: 1 },
            { name: "Carrot", amount: 1 },
            { name: "Brown Mushroom", amount: 1 },
            { name: "Cabbage", amount: 1 },
            { name: "Onion", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Vegetable_Noodles.png"
        },
        stats: { hunger: 14, saturation: 22  },
        effects: [
            { name: "Nourishment", duration: 300000 }
        ],
        img: "/assets/food/meals/Vegetable_Noodles.png",
    },
    {
        id: "meals16",
        slug: "steak-and-potatoes",
        name: "Steak and Potatoes",
        type: "meals",
        description: "Steak and Potatoes can be crafted in a crafting table using Cooked Rice, Onion, Baked Potato, Steak a bowl.",
        ingredients: [
            { name: "Cooked Rice", amount: 1 },
            { name: "Onion", amount: 1 },
            { name: "Baked Potato", amount: 1 },
            { name: "Steak", amount: 1 },
            { name: "Bowl", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/meals/Crafting_Steak_and_Potatoes.png"
        },
        stats: { hunger: 12, saturation: 19  },
        effects: [
            { name: "Nourishment", duration: 180000 }
        ],
        img: "/assets/food/meals/Steak_and_Potatoes.png",
    },
    {
        id: "meals17",
        slug: "ratatouille",
        name: "Ratatouille",
        type: "meals",
        description: "Ratatouille can be made by placing a Beetroot, Onion, Tomato, and any Vegetable in a Cooking Pot.",
        ingredients: [
            { name: "Beetroot", amount: 1 },
            { name: "Onion", amount: 1 },
            { name: "Tomato", amount: 1 },
            { name: "Carrot", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Ratatouille.png"
        },
        stats: { hunger: 10, saturation: 12  },
        effects: [
            { name: "Nourishment", duration: 60000 }
        ],
        img: "/assets/food/meals/Ratatouille.png",
    },
    {
        id: "meals18",
        slug: "squid-ink-pasta",
        name: "Squid Ink Pasta",
        type: "meals",
        description: "In a Cooking Pot add Raw Pasta, Ink Sac, Tomato and any variant of Raw Fish (cod, salmon, tropical fish).",
        ingredients: [
            { name: "Raw Pasta", amount: 1 },
            { name: "Ink Sac", amount: 1 },
            { name: "Tomato", amount: 1 },
            { name: "Raw Cod", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/meals/Crafting_Squid_Ink_Pasta.png"
        },
        stats: { hunger: 14, saturation: 22  },
        effects: [
            { name: "Nourishment", duration: 300000 }
        ],
        img: "/assets/food/meals/Squid_Ink_Pasta.png",
    },
    {
        id: "meals19",
        slug: "grilled-salmon",
        name: "Grilled Salmon",
        type: "meals",
        description: "It can be crafted with a Cooked Salmon or Cooked Salmon Slice, one Sweet Berries, an Onion, a Cabbage or Cabbage Leaf and a Bowl.",
        ingredients: [
            { name: "Cooked Salmon", amount: 1 },
            { name: "Sweet Berries", amount: 1 },
            { name: "Onion", amount: 1 },
            { name: "Cabbage", amount: 1 },
            { name: "Bowl", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/meals/Crafting_Grilled_Salmon.png"
        },
        stats: { hunger: 14, saturation: 22  },
        effects: [
            { name: "Nourishment", duration: 180000 }
        ],
        img: "/assets/food/meals/Grilled_Salmon.png",
    },
];