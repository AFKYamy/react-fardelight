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
        <div className="flex flex-col justify-between gap-5 p-7 rounded-xl w-[30em] h-[37em] bg-light-gray shadow-md">
            <Link to={`/recipes/${rec.slug}`}>
                <h2 className="font-medium ease-in-out duration-200 hover:opacity-60">{rec.name}</h2>
            </Link>
            <Link to={`/recipes/${rec.slug}`} draggable="false">
                <div className={`
                    rounded-xl overflow-hidden group
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