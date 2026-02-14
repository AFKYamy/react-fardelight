import { Navigate, useParams } from "react-router-dom";

// components
import Navbar from "@/components/nav/Navbar";
import Header from "@/components/header/Header";

// lib
import { findRecipe } from "@/lib/recipes";

export default function RecipeDetail() {
    const { slug } = useParams<{ slug: string }>();
    const recipe = slug ? findRecipe(slug) : undefined;

    if (!recipe) return <Navigate to="/not-found" replace/>;

    return (
        <>
            <Navbar />
            <Header heroBgColor={recipe.type} heroLogo={recipe.img}>
                <h1>{recipe.name}</h1>
            </Header>
            RecipeDetail {recipe.name}
        </>
    )
}