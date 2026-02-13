import { Link } from "react-router-dom";

// types
type CardProps = {
    slug: string;
    name: string;
    img: string;
}

export default function Card({ slug, name, img }: CardProps) {
    return (
        <div className="flex flex-col justify-between gap-5 p-7 rounded-xl w-[30em] h-[37em] bg-light-gray shadow-md">
            <Link to={`/recipes/${slug}`}>
                <h1 className="font-medium ease-in-out duration-200 hover:opacity-60">{name}</h1>
            </Link>
            <Link to={`/recipes/${slug}`}>
                <div className="rounded-xl bg-gray overflow-hidden group">
                    <img 
                        src={img} 
                        alt={name}
                        className="w-full h-full object-cover ease-in-out duration-200 hover:scale-105" 
                    />
                </div>
            </Link>
        </div>
    )
}