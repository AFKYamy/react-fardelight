import { Link } from "react-router-dom";

export default function RecipeDetailDescription({ desc }: { desc: string }) {
    return (
        <section className="flex flex-col gap-5 my-15">
            <Link 
                to="/recipes"
                className="font-bold italic hover:text-gray"
            >
                Go back to Recipes
            </Link>
            <p>{desc}</p>
        </section>
    )
}