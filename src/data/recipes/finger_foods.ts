import type { FoodType } from "@/types/recipes/foods";

export const finger_foods: FoodType[] = [
    {
        id: "finger1",
        slug: "barbecue-on-a-stick",
        name: "Barbecue on a Stick",
        type: "finger-foods",
        description: "Barbecue on a Stick can be crafted with a Stick, Onion, Tomato, and any Cooked Meat. Can be crafted in Crafting Table.",
        ingredients: [
            { name: "Stick", amount: 1 },
            { name: "Onion", amount: 1 },
            { name: "Tomato", amount: 1 },
            { name: "Cooked Chicken", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Barbecue_on_a_Stick.png"
        },
        stats: { hunger: 8, saturation: 7 },
        img: "/assets/food/finger_foods/Barbecue_on_a_Stick.png"
    },
    {
        id: "finger2",
        slug: "egg-sandwich",
        name: "Egg Sandwich",
        type: "finger-foods",
        description: "Egg Sandwiches can be crafted using one Bread and two Fried Eggs. Can be crafted in Crafting Table.",
        ingredients: [
            { name: "Bread", amount: 1 },
            { name: "Fried Eggs", amount: 2 }
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Egg_Sandwich.png"
        },
        stats: { hunger: 8, saturation: 6 },
        img: "/assets/food/finger_foods/Egg_Sandwich.png"
    },
    {
        id: "finger3",
        slug: "chicken-sandwich",
        name: "Chicken Sandwich",
        type: "finger-foods",
        description: "Chicken Sandwich can be crafted with Bread, Cooked Chicken/Cooked Chicken Cuts, Cabbage/Cabbage leaf, and Carrot. Can be crafted in Crafting Table.",
        ingredients: [
            { name: "Bread", amount: 1 },
            { name: "Cooked Chicken", amount: 1 },
            { name: "Cabbage", amount: 1 },
            { name: "Carrot", amount: 1 }
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Chicken_Sandwich.png"
        },
        stats: { hunger: 10, saturation: 8 },
        img: "/assets/food/finger_foods/Chicken_Sandwich.png"
    },
    {
        id: "finger4",
        slug: "hamburger",
        name: "Hamburger",
        type: "finger-foods",
        description: "A hamburger can be crafted with one Bread, one Beef Patty, one Tomato, one Onion and either a Cabbage or Cabbage Leaf. Can be crafted in Crafting Table.",
        ingredients: [
            { name: "Bread", amount: 1 },
            { name: "Beef Patty", amount: 1 },
            { name: "Tomato", amount: 1 },
            { name: "Onion", amount: 1 },
            { name: "Cabbage", amount: 1 }
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Hamburger.png"
        },
        stats: { hunger: 11, saturation: 8 },
        img: "/assets/food/finger_foods/Hamburger.png"
    },
    {
        id: "finger5",
        slug: "bacon-sandwich",
        name: "Bacon Sandwich",
        type: "finger-foods",
        description: "It can be crafted with one Bread, one Cooked Bacon, a Tomato, and either a Cabbage or Cabbage Leaf.",
        ingredients: [
            { name: "Bread", amount: 1 },
            { name: "Cooked Bacon", amount: 1 },
            { name: "Tomato", amount: 1 },
            { name: "Cabbage", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Bacon_Sandwich.png"
        },
        stats: { hunger: 10, saturation: 8 },
        img: "/assets/food/finger_foods/Bacon_Sandwich.png"
    },
    {
        id: "finger6",
        slug: "mutton-wrap",
        name: "Mutton Wrap",
        type: "finger-foods",
        description: "A Mutton Wrap is a food item, added by the Farmer's Delight mod. If you have Cultural or Corn Delight, the bread is replaced by a Tortilla. Can be crafted in Crafting Table.",
        ingredients: [
            { name: "Bread", amount: 1 },
            { name: "Onion", amount: 1 },
            { name: "Cabbage", amount: 1 },
            { name: "Cooked Mutton", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Mutton_Wrap.png"
        },
        stats: { hunger: 10, saturation: 7 },
        img: "/assets/food/finger_foods/Mutton_Wrap.png"
    },
    {
        id: "finger7",
        slug: "dumplings",
        name: "Dumplings",
        type: "finger-foods",
        description: "Dumplings can be made in a Cooking Pot with Wheat Dough, Cabbage or a Cabbage Leaf, Onion, and either Raw Chicken, Raw Beef, Raw Pork, or a Brown Mushroom. Dumplings are one of the few Cooking Pot recipes that do not require a vessel (such as a Bowl or Bottle) to remove the cooked food from the pot.",
        ingredients: [
            { name: "Wheat Dough", amount: 1 },
            { name: "Cabbage", amount: 1 },
            { name: "Onion", amount: 1 },
            { name: "Raw Chicken", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/finger_foods/Crafting_Dumplings.png"
        },
        stats: { hunger: 8, saturation: 6 },
        img: "/assets/food/finger_foods/Dumplings.png"
    },
    {
        id: "finger8",
        slug: "stuffed-potato",
        name: "Stuffed Potato",
        type: "finger-foods",
        description: "Stuffed Potato can be crafted by placing a baked potato, steak/beef patty, and milk bucket/milk bottle in a crafting grid.",
        ingredients: [
            { name: "Baked Potato", amount: 1 },
            { name: "Steak", amount: 1 },
            { name: "Milk Bucket", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Stuffed_Potato.png"
        },
        stats: { hunger: 6, saturation: 7 },
        img: "/assets/food/finger_foods/Stuffed_Potato.png"
    },
    {
        id: "finger9",
        slug: "cabbage-rolls",
        name: "Cabbage Rolls",
        type: "finger-foods",
        description: "In a Cooking Pot, Cabbage and either one:  Raw pork/raw bacon, raw fish/slices (salmon, cod, tropical fish), raw chicken/raw chicken cuts, raw beef/minced beef, raw mutton/mutton chops, egg, mushrooms, carrot, potato, or beetroot.",
        ingredients: [
            { name: "Cabbage", amount: 1 },
            { name: "Raw Bacon", amount: 1 },
        ],
        crafting: {
            source: "Cooking Pot",
            img: "/assets/food/finger_foods/Crafting_Cabbage_Rolls.png"
        },
        stats: { hunger: 5, saturation: 2 },
        img: "/assets/food/finger_foods/Cabbage_Rolls.png"
    },
    {
        id: "finger10",
        slug: "salmon-roll",
        name: "Salmon Roll",
        type: "finger-foods",
        description: "Two Salmon Rolls can be crafted with two Raw Salmon Slices and one Cooked Rice.",
        ingredients: [
            { name: "Raw Salmon Slice", amount: 2 },
            { name: "Cooked Rice", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Salmon_Roll.png"
        },
        stats: { hunger: 7, saturation: 4 },
        img: "/assets/food/finger_foods/Salmon_Roll.png"
    },
    {
        id: "finger11",
        slug: "cod-roll",
        name: "Cod Roll",
        type: "finger-foods",
        description: "Two Cod Rolls can be crafted with two Raw Cod Slices and one Cooked Rice.",
        ingredients: [
            { name: "Raw Cod Slice", amount: 2 },
            { name: "Cooked Rice", amount: 1 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Cod_Roll.png"
        },
        stats: { hunger: 7, saturation: 4 },
        img: "/assets/food/finger_foods/Cod_Roll.png"
    },
    {
        id: "finger12",
        slug: "kelp-roll",
        name: "Kelp Roll",
        type: "finger-foods",
        description: "It is created with a crafting table with the following recipe Cooked Rice, Carrot, Cooked Rice, Dried Kelp, Dried Kelp, Dried Kelp",
        ingredients: [
            { name: "Cooked Rice", amount: 2 },
            { name: "Carrot", amount: 1 },
            { name: "Dried Kelp", amount: 3 },
        ],
        crafting: {
            source: "Crafting Table",
            img: "/assets/food/finger_foods/Crafting_Kelp_Roll.png"
        },
        stats: { hunger: 12, saturation: 6 },
        img: "/assets/food/finger_foods/Kelp_Roll.png"
    },
];