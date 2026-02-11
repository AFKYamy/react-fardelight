import { Link } from "react-router-dom";

// types
type Card = {
    slug: string,
    name: string,
    img: string
}

export default function Card({ slug, name, img }: Card) {
    return (
        <div className="flex flex-col gap-5 p-7 rounded-xl max-w-[30em] max-h-[40em] bg-light-gray shadow-md">
            <Link to={`/recipes/${slug}`}>
                <h1 className="font-medium">{name}</h1>
            </Link>
            <Link to={`/recipes/${slug}`}>
                <img 
                    src={img} 
                    alt={name}
                    className="rounded-xl w-full h-full object-cover bg-gray" 
                />
            </Link>
        </div>
    )
}