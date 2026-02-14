import type { FoodType } from "@/types/recipes/foods";

export default function CookingInstructions({ rec }: { rec: FoodType }) {
    return (
        <section className="flex flex-col gap-5 my-15">
            <h3 className="font-semibold">Cooking <span className="text-primary">Instructions</span></h3>
            <p className="text-lg">Craft In: {rec.crafting.source}</p>
            <img 
                className="shadow-primary rounded-sm w-128 h-auto" 
                src={rec.crafting.img} 
                alt={rec.name} 
            />
        </section>
    )
}