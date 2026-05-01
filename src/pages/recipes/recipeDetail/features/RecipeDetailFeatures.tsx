// components
import FeaturesCard from "./FeaturesCard";

// lib
import { capitalizeFirstLetter } from "@/lib/capitalizeFirstLetter";

// icons
import { LuCircleGauge, LuCookingPot, LuHeart } from "react-icons/lu";
import { MdOutlineFastfood } from "react-icons/md";

// types
import type { FoodType } from "@/types/recipes/foods";

export default function RecipeDetailFeatures({ rec }: { rec: FoodType }) {
    return (
        <section className="flex justify-center my-15">
            <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:flex lg:w-auto lg:gap-20 lg:flex-wrap">
                <FeaturesCard title="Type" feat={capitalizeFirstLetter(rec.type)} Icon={MdOutlineFastfood} />

                <FeaturesCard title="Craft In" feat={rec.crafting.source} Icon={LuCookingPot}/>
                
                {rec.stats?.hunger && (
                    <FeaturesCard title="Hunger Satisfied" feat={rec.stats.hunger} Icon={LuHeart}/>
                )}

                {rec.stats?.saturation && (
                    <FeaturesCard title="Saturation Restored" feat={rec.stats.saturation} Icon={LuCircleGauge} />
                )}
            </div>
        </section>
    )
}
