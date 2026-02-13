import { Link } from "react-router-dom";

// types
type CardProps = {
    slug: string;
    name: string;
    img: string;
    type: string;
}

const typeBgMap: Record<string, string> = {
    meals: "bg-meals",
    drinks: "bg-drinks",
    feasts: "bg-feasts",
    sweets: "bg-sweets",
    "pet-foods": "bg-pet-foods",
    "finger-foods": "bg-finger-foods",
};

export default function Card({ slug, name, img, type }: CardProps) {
    return (
        <div className="flex flex-col justify-between gap-5 p-7 rounded-xl w-[30em] h-[37em] bg-light-gray shadow-md">
            <Link to={`/recipes/${slug}`}>
                <h2 className="font-medium ease-in-out duration-200 hover:opacity-60">{name}</h2>
            </Link>
            <Link to={`/recipes/${slug}`} draggable="false">
                <div className={`
                    rounded-xl overflow-hidden group
                    ${typeBgMap[type]}
                `}>
                    <img 
                        src={img} 
                        alt={name}
                        className="w-full h-full object-cover ease-in-out duration-200 hover:scale-105"
                        draggable="false"
                    />
                </div>
            </Link>
        </div>
    )
}