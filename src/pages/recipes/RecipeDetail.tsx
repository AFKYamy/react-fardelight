import { Navigate, useParams } from "react-router-dom";

// lib
import { findRecipe } from "@/lib/recipes";

export default function RecipeDetail() {
    const { slug } = useParams<{ slug: string }>();
    const recipe = slug ? findRecipe(slug) : undefined;

    if (!recipe) return <Navigate to="/not-found" replace/>;

    return (
        <>
            RecipeDetail {recipe.name}
        </>
    )
}