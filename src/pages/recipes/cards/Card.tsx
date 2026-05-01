import { Link } from "react-router-dom";

// types
import type { FoodType } from "@/types/recipes/foods";

type CardProps = {
    rec: FoodType;
}

const typeBgMap: Record<string, string> = {
    meals: "bg-meals",
    drinks: "bg-drinks",
    feasts: "bg-feasts",
    sweets: "bg-sweets",
    "pet-foods": "bg-pet-foods",
    "finger-foods": "bg-finger-foods",
};

export default function Card({ rec }: CardProps) {
    return (
        <div className="flex h-full w-full max-w-[30rem] flex-col gap-5 rounded-xl bg-light-gray p-5 shadow-md sm:p-6 lg:p-7">
            <Link to={`/recipes/${rec.slug}`} onClick={() => window.scrollTo(0,0)}>
                <h2 className="text-2xl font-medium leading-tight ease-in-out duration-200 hover:opacity-60 sm:text-3xl lg:text-4xl">{rec.name}</h2>
            </Link>
            <Link 
                to={`/recipes/${rec.slug}`} 
                draggable="false"
                onClick={() => window.scrollTo(0,0)}
                className="mt-auto block"
            >
                <div className={`
                    aspect-square rounded-xl overflow-hidden group
                    ${typeBgMap[rec.type]}
                `}>
                    <img 
                        src={rec.img} 
                        alt={rec.name}
                        className="w-full h-full object-cover ease-in-out duration-200 hover:scale-105"
                        draggable="false"
                    />
                </div>
            </Link>
        </div>
    )
}
