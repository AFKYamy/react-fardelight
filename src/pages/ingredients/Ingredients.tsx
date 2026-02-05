// components
import Navbar from "@/components/nav/Navbar";
import Header from "@/components/header/Header";

// assets
import heroBg from "@/assets/backgrounds/basic-crops-blur.png";
import heroLogo from "@/assets/ingredients/carrot.png";

export default function Ingredients() {
    return (
        <>
            <Navbar />
            <Header
                heroBg={heroBg}
                heroLogo={heroLogo}
            >
                <h1>Farmer's</h1>
                <h1><span className="text-primary">Delightful</span> Ingredients</h1>
            </Header>
            Ingredients
        </>
    )
}