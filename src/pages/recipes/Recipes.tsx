// components
import Navbar from "@/components/nav/Navbar";
import Header from "@/components/header/Header";

// assets
import heroBg from "@/assets/backgrounds/glorious-feast-blur.png";
import heroLogo from "@/assets/food/ratatouille.png";

export default function Recipes() {
    return (
        <>
            <Navbar />
            <Header
                heroBg={heroBg}
                heroLogo={heroLogo}
            >
                <h1>Farmer's</h1>
                <h1><span className="text-primary">Delightful</span> Recipes</h1>
            </Header>
            Recipes
        </>
    )
}