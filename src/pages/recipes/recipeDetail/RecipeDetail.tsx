import { Navigate, useParams } from "react-router-dom";

// components
import Navbar from "@/components/nav/Navbar";
import Header from "@/components/header/Header";
import RecipeDetailFeatures from "./features/RecipeDetailFeatures";
import RecipeDetailDescription from "./RecipeDetailDescription";
import IngredientsEffects from "./ingredientsEffects/IngredientsEffects";
import CookingInstructions from "./CookingInstructions";

// ui components
import Divider from "@/components/ui/Divider";

// lib
import { findRecipe } from "@/lib/recipes";
import RandomRecommendations from "./RandomRecommendations";

export default function RecipeDetail() {
    const { slug } = useParams<{ slug: string }>();
    const rec = slug ? findRecipe(slug) : undefined;

    if (!rec) return <Navigate to="/not-found" replace/>;

    return (
        <>
            <Navbar />
            <Header heroBgColor={rec.type} heroLogo={rec.img}>
                <p className="text-lg">Let's make</p>
                <h1>{rec.name}</h1>
            </Header>
            <div className="mx-auto container">
                <RecipeDetailFeatures rec={rec} />
                <RecipeDetailDescription desc={rec.description} />
                <IngredientsEffects rec={rec} />
                <CookingInstructions rec={rec} />
                <Divider />
                <RandomRecommendations recType={rec.type} />
            </div>
        </>
    )
}